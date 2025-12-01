import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Segurança

  app.use(helmet());
  const compressionMiddleware = compression();
  app.use(compressionMiddleware);

  // CORS
  app.enableCors({
    origin: configService.get('CORS_ORIGIN') || 'http://localhost:3000',
    credentials: true,
  });

  // Global prefix
  app.setGlobalPrefix('api');

  const port = configService.get<number>('PORT') || 3001;
  await app.listen(port);

  logger.log(`🚀 Aplicação rodando em http://localhost:${port}/api`);
  logger.log(`🔒 CORS habilitado para: ${configService.get('CORS_ORIGIN')}`);
}

void bootstrap();
