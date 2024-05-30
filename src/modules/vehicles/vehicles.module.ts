import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';

import { VehiclesController } from './vehicles.controller';
import { VehiclesRepository } from './vehicles.repository';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [PrismaModule],
  providers: [VehiclesService, VehiclesService, VehiclesRepository],
  controllers: [VehiclesController],
})
export class VehiclesModule {}
