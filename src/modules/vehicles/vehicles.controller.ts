import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { FilterPrisma } from 'src/utils/filter-request';

import { VehicleDto } from './dto/vehicle-dto';
import { VehiclesService } from './vehicles.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('vehicle')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @Get()
  @IsPublic()
  public async getVehicles(
    @Res() response: Response,
    @Query() query: FilterPrisma,
  ) {
    return response
      .status(HttpStatus.OK)
      .json(await this.vehiclesService.getVehicles(query));
  }

  @Get(':id')
  @IsPublic()
  public async getVehicle(@Res() response: Response, @Param('id') id: number) {
    return response
      .status(HttpStatus.OK)
      .json(await this.vehiclesService.getVehicle(id));
  }

  @Post()
  public async createVehicle(
    @Res() response: Response,
    @Body() body: VehicleDto,
  ) {
    return response
      .status(HttpStatus.CREATED)
      .json(await this.vehiclesService.createVehicle(body));
  }

  @Put(':id')
  public async updateVehicle(
    @Res() response: Response,
    @Body() body: VehicleDto,
    @Param('id') id: number,
  ) {
    return response
      .status(HttpStatus.OK)
      .json(await this.vehiclesService.updateVehicle(id, body));
  }

  @Delete('/:id')
  public async deleteVehicle(
    @Res() response: Response,
    @Param('id') id: number,
  ) {
    return response
      .status(HttpStatus.OK)
      .json(await this.vehiclesService.deleteVehicle(id));
  }
}
