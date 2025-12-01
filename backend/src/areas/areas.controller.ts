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
import { AreasService } from './areas.service';
import { CreateAreaDto, UpdateAreaDto } from './dto/area.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Public } from '../common/decorators/public.decorator';
import { ParseUuidPipe } from '../common/pipes/parse-uuid.pipe';

@Controller('areas')
@UseGuards(JwtAuthGuard)
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Public()
  @Get()
  findAll() {
    return this.areasService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseUuidPipe) id: string) {
    return this.areasService.findOne(id);
  }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areasService.create(createAreaDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUuidPipe) id: string,
    @Body() updateAreaDto: UpdateAreaDto,
  ) {
    return this.areasService.update(id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUuidPipe) id: string) {
    return this.areasService.remove(id);
  }
}
