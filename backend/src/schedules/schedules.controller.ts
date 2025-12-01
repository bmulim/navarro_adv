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
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Public } from '../common/decorators/public.decorator';
import { ParseUuidPipe } from '../common/pipes/parse-uuid.pipe';

@Controller('schedules')
@UseGuards(JwtAuthGuard)
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Public()
  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseUuidPipe) id: string) {
    return this.schedulesService.findOne(id);
  }

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUuidPipe) id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(id, updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUuidPipe) id: string) {
    return this.schedulesService.remove(id);
  }
}
