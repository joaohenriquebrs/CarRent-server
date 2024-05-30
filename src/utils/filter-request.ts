import { IsOptional } from 'class-validator';

export class FilterPrisma {
  @IsOptional()
  page?: number = 1;

  @IsOptional()
  perPage?: number = 10;

  @IsOptional()
  search?: string;

  @IsOptional()
  order?: string;

  orderBy?: any;

  where?: any;

  select?: any;
}
