import bcrypt from 'bcrypt'; import { PrismaClient } from '@prisma/client'; import { NextRequest ,NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(request: NextRequest) { 
    const { name, email, password } = await request.json(); 
    if(!(name && email && password) || await prisma.user.findUnique({ where: { email: email } })) return new NextResponse('Missing name, email, or password', { status: 400 });
    return NextResponse.json(await prisma.user.create({ data: { name, email, hashedPassword: await bcrypt.hash(password, 10) } })); 
}