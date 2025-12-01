import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<{
      method: string;
      url: string;
      body: unknown;
      query: unknown;
      params: unknown;
    }>();
    const { method, url, body, query, params } = request;
    const now = Date.now();

    this.logger.log(
      `Requisição: ${method} ${url} - Body: ${JSON.stringify(body)} - Query: ${JSON.stringify(query)} - Params: ${JSON.stringify(params)}`,
    );

    return next.handle().pipe(
      tap({
        next: () => {
          const responseTime = Date.now() - now;
          this.logger.log(
            `Resposta: ${method} ${url} - Tempo: ${responseTime}ms`,
          );
        },
        error: (error: Error) => {
          const responseTime = Date.now() - now;
          this.logger.error(
            `Erro: ${method} ${url} - Tempo: ${responseTime}ms - ${error.message}`,
          );
        },
      }),
    );
  }
}
