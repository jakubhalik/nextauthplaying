import bcrypt from 'bcrypt'; import { PrismaClient } from '@prisma/client'; import { NextRequest ,NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(request: NextRequest) { 
    const requestData = await request.json(); const { name, email, password } = requestData;
    const existingEmail = await prisma.user.findFirst({ where: { email } }); const existingName = await prisma.user.findFirst({ where: { name } });
    if (existingEmail) return new NextResponse('Email already exists', { status: 400 }); if (existingName) return new NextResponse('Name already exists', { status: 400 });
    if (!name || !email || !password) return new NextResponse('Missing name, email, or password', { status: 400 });
    return NextResponse.json(await prisma.user.create({ data: { name, email, hashedPassword: await bcrypt.hash(password, 10) } })); 
}