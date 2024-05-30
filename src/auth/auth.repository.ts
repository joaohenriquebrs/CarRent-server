import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByLogin(login: string) {
    return await this.prisma.user.findUnique({
      where: {
        login,
      },
    });
  }
}
