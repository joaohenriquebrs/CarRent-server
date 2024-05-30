import { Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { FilterPrisma } from 'src/utils/filter-request';

import { VehicleDto } from './dto/vehicle-dto';
import { VehiclesRepository } from './vehicles.repository';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehiclesRepository: VehiclesRepository) {}

  async getVehicles(query: FilterPrisma) {
    return await this.vehiclesRepository.getVehicles(query);
  }

  async getVehicle(id: number) {
    return await this.vehiclesRepository.getVehicle(id);
  }

  async createVehicle(body: VehicleDto) {
    const createVehicle: Prisma.VehicleCreateInput = {
      brand: body.brand,
      name: body.name,
      year: body.year,
      km: body.km,
      price: body.price,
      specifications: body.specifications,
      image: body.image,
      color: body.color,
      fuel: body.fuel,
      fuelUrban: body.fuelUrban,
      fuelRoad: body.fuelRoad,
      dataSheet: body.dataSheet,
      status: Status.ATIVO,
    };

    const createdVehicle =
      await this.vehiclesRepository.createVehicle(createVehicle);

    return createdVehicle.id;
  }

  async updateVehicle(id: number, body: VehicleDto) {
    const updateVehicle: Prisma.VehicleUpdateInput = {
      brand: body.brand,
      name: body.name,
      year: body.year,
      km: body.km,
      price: body.price,
      specifications: body.specifications,
      image: body.image,
      color: body.color,
      fuel: body.fuel,
      fuelUrban: body.fuelUrban,
      fuelRoad: body.fuelRoad,
      dataSheet: body.dataSheet,
      status: Status.ATIVO,
    };

    const updatedVehicle = await this.vehiclesRepository.updateVehicle(
      id,
      updateVehicle,
    );

    return updatedVehicle.id;
  }

  async deleteVehicle(id: number) {
    const deletedVehicle = await this.vehiclesRepository.deleteVehicle(id);

    return deletedVehicle.id;
  }
}
