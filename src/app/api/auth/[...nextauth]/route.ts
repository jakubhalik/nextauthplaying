import NextAuth from 'next-auth/next'; import CredentialsProvider from 'next-auth/providers/credentials'; import bcrypt from 'bcrypt'; 
import { PrismaAdapter } from '@auth/prisma-adapter'; import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); export const authOptions = { adapter: PrismaAdapter(prisma) }