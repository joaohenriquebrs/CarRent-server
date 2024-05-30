import { InternalServerErrorException } from '@nestjs/common';
import { PaginatedResult, createPaginator } from 'prisma-pagination';

import { FilterPrisma } from './filter-request';

export class Paginator {
  static async applyPagination<T>(
    entity: T,
    filter: FilterPrisma,
  ): Promise<PaginatedResult<any>> {
    const paginate = createPaginator({
      perPage: filter.perPage,
    });

    try {
      return await paginate<T, any>(
        entity,
        {
          where: filter.where,
          orderBy: filter.orderBy,
        },
        {
          page: filter.page,
        },
      );
    } catch (error) {
      console.log('Error', error);
      throw new InternalServerErrorException(
        'Erro interno ao tentar paginar os resultados',
      );
    }
  }
}
