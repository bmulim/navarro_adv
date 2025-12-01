import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsBoolean,
  MaxLength,
} from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Título é obrigatório' })
  @IsString()
  @MaxLength(255, { message: 'Título deve ter no máximo 255 caracteres' })
  title: string;

  @IsNotEmpty({ message: 'Slug é obrigatório' })
  @IsString()
  @MaxLength(255, { message: 'Slug deve ter no máximo 255 caracteres' })
  slug: string;

  @IsNotEmpty({ message: 'Conteúdo é obrigatório' })
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem inválida' })
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Título deve ter no máximo 255 caracteres' })
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Slug deve ter no máximo 255 caracteres' })
  slug?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem inválida' })
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
