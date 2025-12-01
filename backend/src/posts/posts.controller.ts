import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Public } from '../common/decorators/public.decorator';
import { ParseUuidPipe } from '../common/pipes/parse-uuid.pipe';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Public()
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseUuidPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUuidPipe) id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUuidPipe) id: string) {
    return this.postsService.remove(id);
  }
}
