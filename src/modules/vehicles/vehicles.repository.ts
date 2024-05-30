import { Status } from '.prisma/client';

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { FilterPrisma } from 'src/utils/filter-request';
import { Paginator } from 'src/utils/paginator';

@Injectable()
export class VehiclesRepository {
  constructor(private readonly prisma: PrismaService) { }

  async getVehicles(filter: FilterPrisma) {
    const whereInput: Record<string, any>[] = [
      {
        status: Status.ATIVO,
      },
    ];

    if (filter.search) {
      whereInput.push({
        name: {
          contains: filter.search,
        },
      });
    }

    const orderBy =
      filter.order && filter.order.split('-').length === 2
        ? { [filter.order.split('-')[0]]: filter.order.split('-')[1] }
        : { price: 'desc' };

    return await Paginator.applyPagination(this.prisma.vehicle, {
      page: filter.page,
      perPage: filter.perPage,
      where: { AND: whereInput },
      orderBy,
    });
  }

  async getVehicle(id: number) {
    return await this.prisma.vehicle.findUnique({
      where: { id, status: Status.ATIVO },
    });
  }

  async createVehicle(data: Prisma.VehicleCreateInput) {
    return await this.prisma.vehicle.create({
      data,
    });
  }

  async updateVehicle(id: number, data: Prisma.VehicleUpdateInput) {
    return await this.prisma.vehicle.update({
      where: { id },
      data,
    });
  }

  async deleteVehicle(id: number) {
    return await this.prisma.vehicle.update({
      where: { id },
      data: { status: Status.INATIVO },
    });
  }
}
