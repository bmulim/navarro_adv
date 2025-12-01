import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';
import { Schedule } from './schedule.entity';
import { eq, sql } from 'drizzle-orm';
import { schedules } from '../database/schema';

@Injectable()
export class SchedulesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Schedule[]> {
    const db = this.databaseService.getDb();
    return await db
      .select()
      .from(schedules)
      .orderBy(
        sql`CASE ${schedules.dayOfWeek}
          WHEN 'segunda' THEN 1
          WHEN 'terça' THEN 2
          WHEN 'quarta' THEN 3
          WHEN 'quinta' THEN 4
          WHEN 'sexta' THEN 5
          WHEN 'sábado' THEN 6
          WHEN 'domingo' THEN 7
        END`,
      );
  }

  async findOne(id: string): Promise<Schedule> {
    const db = this.databaseService.getDb();
    const [schedule] = await db
      .select()
      .from(schedules)
      .where(eq(schedules.id, id));

    if (!schedule) {
      throw new NotFoundException(`Horário com ID ${id} não encontrado`);
    }

    return schedule;
  }

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const db = this.databaseService.getDb();
    const [schedule] = await db
      .insert(schedules)
      .values({
        dayOfWeek: createScheduleDto.dayOfWeek,
        openTime: createScheduleDto.openTime,
        closeTime: createScheduleDto.closeTime,
      })
      .returning();

    return schedule;
  }

  async update(
    id: string,
    updateScheduleDto: UpdateScheduleDto,
  ): Promise<Schedule> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    const updateData: Partial<typeof schedules.$inferInsert> = {};

    if (updateScheduleDto.dayOfWeek !== undefined) {
      updateData.dayOfWeek = updateScheduleDto.dayOfWeek;
    }
    if (updateScheduleDto.openTime !== undefined) {
      updateData.openTime = updateScheduleDto.openTime;
    }
    if (updateScheduleDto.closeTime !== undefined) {
      updateData.closeTime = updateScheduleDto.closeTime;
    }

    updateData.updatedAt = new Date();

    const [schedule] = await db
      .update(schedules)
      .set(updateData)
      .where(eq(schedules.id, id))
      .returning();

    return schedule;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    await db.delete(schedules).where(eq(schedules.id, id));
  }
}
