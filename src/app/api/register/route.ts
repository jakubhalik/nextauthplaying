import bcrypt from 'bcrypt'; import { PrismaClient } from '@prisma/client'; import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) return new NextResponse('Missing name, email, or password', { status: 400 });
    const existingUser = await prisma.user.findFirst({ where: { OR: [ { name }, { email } ] } });
    if (existingUser) return NextResponse.json({ error: true, message: `${existingUser.email === email ? 'Email' : 'Name'} has already been registered`}, { status: 400 });
    return NextResponse.json(await prisma.user.create({ data: { name, email, hashedPassword: await bcrypt.hash(password, 10) } }));
}