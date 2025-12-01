import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { users } from './schema';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Carregar variáveis de ambiente
dotenv.config({ path: join(__dirname, '../../.env') });

async function clearUsers() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL não encontrada no .env');
  }

  const sql = neon(connectionString);
  const db = drizzle(sql, { schema: { users } });

  console.log('🗑️  Deletando todos os usuários...');

  await db.delete(users);

  console.log('✅ Todos os usuários foram removidos!');
  console.log(
    '\n📝 Agora você pode acessar http://localhost:3000/admin/setup para criar o primeiro usuário.',
  );

  process.exit(0);
}

clearUsers().catch((error) => {
  console.error('❌ Erro ao deletar usuários:', error);
  process.exit(1);
});
