import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from './modules/auth/auth.module';
import { AtGuard } from './modules/auth/guards';
import { PrismaModule } from './database/prisma.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { HttpExceptionFilter } from './utils/exception-filter';

@Module({
  providers: [
    { provide: APP_GUARD, useClass: AtGuard },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
    }),
    VehiclesModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule { }
