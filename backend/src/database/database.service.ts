import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: ReturnType<typeof drizzle>;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const databaseUrl = this.configService.get<string>('DATABASE_URL');
    if (!databaseUrl) {
      throw new Error('DATABASE_URL não está configurada');
    }
    const sql = neon(databaseUrl);
    this.db = drizzle(sql, { schema });
  }

  getDb() {
    return this.db;
  }
}
