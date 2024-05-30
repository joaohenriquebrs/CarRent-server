import { IsNotEmpty, MaxLength } from 'class-validator';


export class VehicleDto {
  @IsNotEmpty({
    message: 'O campo brand é obrigatório',
  })
  @MaxLength(255, { message: 'o campo brand excedeu o limite de caracteres' })
  brand: string;

  @IsNotEmpty({
    message: 'O campo name é obrigatório',
  })
  name: string;

  @IsNotEmpty({
    message: 'O campo year é obrigatório',
  })
  year: string;

  @IsNotEmpty({
    message: 'O campo km é obrigatório',
  })
  km: string;

  @IsNotEmpty({
    message: 'O campo price é obrigatório',
  })
  price: number;

  @IsNotEmpty({
    message: 'O campo specifications é obrigatório',
  })
  specifications: string;

  @IsNotEmpty({
    message: 'O campo image é obrigatório',
  })
  image: string;

  @IsNotEmpty({
    message: 'O campo color é obrigatório',
  })
  color: string;

  @IsNotEmpty({
    message: 'O campo fuel é obrigatório',
  })
  fuel: string;

  @IsNotEmpty({
    message: 'O campo fuelUrban é obrigatório',
  })
  fuelUrban: string;

  @IsNotEmpty({
    message: 'O campo fuelRoad é obrigatório',
  })
  fuelRoad: string;

  @IsNotEmpty({
    message: 'O campo dataSheet é obrigatório',
  })
  dataSheet: string;
}
