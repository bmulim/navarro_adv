import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { JwtPayload } from '../users/user.entity';

// Importação dinâmica para evitar conflitos de tipo
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ExtractJwt } = require('passport-jwt');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || '',
    };
    super(options);
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return { id: user.id, email: user.email, name: user.name };
  }
}
