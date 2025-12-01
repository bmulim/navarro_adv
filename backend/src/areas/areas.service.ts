import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateAreaDto, UpdateAreaDto } from './dto/area.dto';
import { Area } from './area.entity';
import { eq, asc } from 'drizzle-orm';
import { areas } from '../database/schema';

@Injectable()
export class AreasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Area[]> {
    const db = this.databaseService.getDb();
    return await db.select().from(areas).orderBy(asc(areas.order));
  }

  async findOne(id: string): Promise<Area> {
    const db = this.databaseService.getDb();
    const [area] = await db.select().from(areas).where(eq(areas.id, id));

    if (!area) {
      throw new NotFoundException(`Área com ID ${id} não encontrada`);
    }

    return area;
  }

  async create(createAreaDto: CreateAreaDto): Promise<Area> {
    const db = this.databaseService.getDb();
    const [area] = await db
      .insert(areas)
      .values({
        title: createAreaDto.title,
        description: createAreaDto.description,
        icon: createAreaDto.icon,
        imageUrl: createAreaDto.imageUrl,
        order: createAreaDto.order,
      })
      .returning();

    return area;
  }

  async update(id: string, updateAreaDto: UpdateAreaDto): Promise<Area> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    const updateData: Partial<typeof areas.$inferInsert> = {};

    if (updateAreaDto.title !== undefined) {
      updateData.title = updateAreaDto.title;
    }
    if (updateAreaDto.description !== undefined) {
      updateData.description = updateAreaDto.description;
    }
    if (updateAreaDto.icon !== undefined) {
      updateData.icon = updateAreaDto.icon;
    }
    if (updateAreaDto.imageUrl !== undefined) {
      updateData.imageUrl = updateAreaDto.imageUrl;
    }
    if (updateAreaDto.order !== undefined) {
      updateData.order = updateAreaDto.order;
    }

    updateData.updatedAt = new Date();

    const [area] = await db
      .update(areas)
      .set(updateData)
      .where(eq(areas.id, id))
      .returning();

    return area;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    await db.delete(areas).where(eq(areas.id, id));
  }
}
