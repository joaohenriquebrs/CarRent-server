import {
  Injectable,
  Logger,
  InternalServerErrorException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AuthRepository } from './auth.repository';
import { Login } from './dto/login.dto';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(login: string, userPassword: string) {
    const user = await this.authRepository.findUserByLogin(login);
    const errorMesasge = 'E-mail ou senha invalido';

    if (!user) {
      this.logger.log(`Usuário ${login} não existe`);
      throw new BadRequestException(errorMesasge);
    }

    const isPasswordValid = await bcrypt.compare(userPassword, user.password);

    if (!isPasswordValid) {
      this.logger.log(`Senha inválida`);

      throw new BadRequestException(errorMesasge);
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(user: Login) {
    this.logger.log('Login do usuario ' + user.login);

    try {
      const usuario = await this.authRepository.findUserByLogin(user.login);

      const token = await this.jwtService.signAsync(
        {
          sub: usuario.id,
          id: usuario.id,
          name: usuario.name,
          login: usuario.login,
          role: usuario?.role,
        },
        {
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: process.env.ACCESS_TOKEN_LIFETIME,
        },
      );

      const { password, ...userWithoutPassword } = usuario;

      return {
        usuario: userWithoutPassword,
        token,
      };
    } catch (error) {
      this.logger.error(error);

      if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Erro interno no servidor');
      }
    }
  }
}
