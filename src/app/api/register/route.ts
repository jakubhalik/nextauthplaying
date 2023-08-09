import bcrypt from 'bcrypt'; import { PrismaClient } from '@prisma/client'; import { NextRequest ,NextResponse } from 'next/server';
const prisma = new PrismaClient();
export const POST = async (request: { json: () => any; }) => (!(await request.json()).email || await prisma.user.findUnique({ where: { email: (await request.json()).email } })) ? 
    new NextResponse('Missing name, email, or password', { status: 400 }) 
    : NextResponse.json(await prisma.user.create({ data: { ...(await request.json()), hashedPassword: await bcrypt.hash((await request.json()).password, 10) } }));