import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class ParseUuidPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (!uuidRegex.test(value)) {
      throw new BadRequestException(`${metadata.data} deve ser um UUID válido`);
    }

    return value;
  }
}
