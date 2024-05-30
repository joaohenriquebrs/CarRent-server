import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { Login } from './dto/login.dto';
import { LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  async login(@Res() response: Response, @Body() dto: Login) {
    return response
      .status(HttpStatus.OK)
      .json(await this.authService.login(dto));
  }
}
