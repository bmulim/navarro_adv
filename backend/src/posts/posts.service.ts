import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Post } from './post.entity';
import { eq, desc } from 'drizzle-orm';
import { posts } from '../database/schema';

@Injectable()
export class PostsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Post[]> {
    const db = this.databaseService.getDb();
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  }

  async findOne(id: string): Promise<Post> {
    const db = this.databaseService.getDb();
    const [post] = await db.select().from(posts).where(eq(posts.id, id));

    if (!post) {
      throw new NotFoundException(`Post com ID ${id} não encontrado`);
    }

    return post;
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const db = this.databaseService.getDb();
    const [post] = await db
      .insert(posts)
      .values({
        title: createPostDto.title,
        slug: createPostDto.slug,
        content: createPostDto.content,
        excerpt: createPostDto.excerpt,
        imageUrl: createPostDto.imageUrl,
        published: createPostDto.published ?? false,
      })
      .returning();

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    const updateData: Partial<typeof posts.$inferInsert> = {};

    if (updatePostDto.title !== undefined) {
      updateData.title = updatePostDto.title;
    }
    if (updatePostDto.slug !== undefined) {
      updateData.slug = updatePostDto.slug;
    }
    if (updatePostDto.content !== undefined) {
      updateData.content = updatePostDto.content;
    }
    if (updatePostDto.excerpt !== undefined) {
      updateData.excerpt = updatePostDto.excerpt;
    }
    if (updatePostDto.imageUrl !== undefined) {
      updateData.imageUrl = updatePostDto.imageUrl;
    }
    if (updatePostDto.published !== undefined) {
      updateData.published = updatePostDto.published;
    }

    updateData.updatedAt = new Date();

    const [post] = await db
      .update(posts)
      .set(updateData)
      .where(eq(posts.id, id))
      .returning();

    return post;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);

    const db = this.databaseService.getDb();
    await db.delete(posts).where(eq(posts.id, id));
  }
}
