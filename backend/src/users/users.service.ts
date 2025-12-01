import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';
import { users } from '../database/schema';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findByEmail(email: string): Promise<User | null> {
    const db = this.databaseService.getDb();
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return user || null;
  }

  async findById(id: string): Promise<User | null> {
    const db = this.databaseService.getDb();
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return user || null;
  }

  async create(email: string, password: string, name: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = this.databaseService.getDb();

    const [user] = await db
      .insert(users)
      .values({ email, password: hashedPassword, name })
      .returning();

    if (!user) {
      throw new Error('Falha ao criar usuário');
    }

    return user as User;
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }
}
