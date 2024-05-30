import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: {
      login: string;
      name: string;
      role: string;
      id: number;
      iat: number;
      exp: number;
    },
  ) {
    return {
      id: payload?.id,
      iat: payload?.iat,
      exp: payload?.exp,
      role: payload?.role,
      login: payload?.login,
      name: payload?.name,
    };
  }
}
