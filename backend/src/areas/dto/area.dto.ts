import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateAreaDto {
  @IsNotEmpty({ message: 'Título é obrigatório' })
  @IsString()
  @MaxLength(255, { message: 'Título deve ter no máximo 255 caracteres' })
  title: string;

  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(100, { message: 'Ícone deve ter no máximo 100 caracteres' })
  icon?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem inválida' })
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10, { message: 'Ordem deve ter no máximo 10 caracteres' })
  order?: string;
}

export class UpdateAreaDto {
  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Título deve ter no máximo 255 caracteres' })
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100, { message: 'Ícone deve ter no máximo 100 caracteres' })
  icon?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem inválida' })
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10, { message: 'Ordem deve ter no máximo 10 caracteres' })
  order?: string;
}
