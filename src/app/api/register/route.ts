import bcrypt from 'bcrypt'; import { PrismaClient, User } from '@prisma/client'; import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) return new NextResponse('Missing name, email, or password', { status: 400 });
    const existingUser: User | null = await prisma.user.findFirst({ where: { OR: [ { name }, { email } ] } });
    if (existingUser) {
        const field = existingUser.email === email ? 'Email' : 'Name'; const fieldValue = existingUser[field.toLowerCase() as keyof User];
        return NextResponse.json({ error: true, message: `${field} "${fieldValue}" has already been registered`}, { status: 400 });
    }
    return NextResponse.json(await prisma.user.create({ data: { name, email, hashedPassword: await bcrypt.hash(password, 10) } }));
}