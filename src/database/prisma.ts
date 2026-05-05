import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// 1. Cria a conexão com o banco usando o driver nativo
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Cria o adaptador do Prisma
const adapter = new PrismaPg(pool);

// 3. Instancia o cliente unindo o adapter e seus logs
const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "production" ? [] : ["query"]
});

export default prisma;