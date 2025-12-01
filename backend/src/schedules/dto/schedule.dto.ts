import {
  IsNotEmpty,
  IsString,
  IsOptional,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty({ message: 'Dia da semana é obrigatório' })
  @IsString()
  @MaxLength(20, { message: 'Dia da semana deve ter no máximo 20 caracteres' })
  dayOfWeek: string;

  @IsNotEmpty({ message: 'Horário de abertura é obrigatório' })
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Horário de abertura deve estar no formato HH:MM',
  })
  openTime: string;

  @IsNotEmpty({ message: 'Horário de fechamento é obrigatório' })
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Horário de fechamento deve estar no formato HH:MM',
  })
  closeTime: string;
}

export class UpdateScheduleDto {
  @IsOptional()
  @IsString()
  @MaxLength(20, { message: 'Dia da semana deve ter no máximo 20 caracteres' })
  dayOfWeek?: string;

  @IsOptional()
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Horário de abertura deve estar no formato HH:MM',
  })
  openTime?: string;

  @IsOptional()
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Horário de fechamento deve estar no formato HH:MM',
  })
  closeTime?: string;
}
