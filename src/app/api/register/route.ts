import bcrypt from 'bcrypt'; import { PrismaClient } from '@prisma/client'; import { NextRequest ,NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(request: NextRequest) { const body = await request.json(); const { name, email, password } = body; console.log(body); }