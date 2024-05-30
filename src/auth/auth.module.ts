import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/database/prisma.module';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { AtStrategy } from './strategies/at.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, LocalStrategy, AtStrategy],
  imports: [PrismaModule, JwtModule],
  exports: [AuthService, AuthRepository],
})
export class AuthModule {}
