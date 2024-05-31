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
  @MaxLength(255, { message: 'o campo name excedeu o limite de caracteres' })
  name: string;

  @IsNotEmpty({
    message: 'O campo year é obrigatório',
  })
  @MaxLength(255, { message: 'o campo year excedeu o limite de caracteres' })
  year: string;

  @IsNotEmpty({
    message: 'O campo km é obrigatório',
  })
  @MaxLength(255, { message: 'o campo km excedeu o limite de caracteres' })
  km: string;

  @IsNotEmpty({
    message: 'O campo price é obrigatório',
  })
  price: number;

  @IsNotEmpty({
    message: 'O campo specifications é obrigatório',
  })
  @MaxLength(255, { message: 'o campo specifications excedeu o limite de caracteres' })
  specifications: string;

  @IsNotEmpty({
    message: 'O campo image é obrigatório',
  })
  @MaxLength(255, { message: 'o campo image excedeu o limite de caracteres' })
  image: string;

  @IsNotEmpty({
    message: 'O campo color é obrigatório',
  })
  @MaxLength(255, { message: 'o campo color excedeu o limite de caracteres' })
  color: string;

  @IsNotEmpty({
    message: 'O campo fuel é obrigatório',
  })
  @MaxLength(255, { message: 'o campo fuel excedeu o limite de caracteres' })
  fuel: string;

  @IsNotEmpty({
    message: 'O campo fuelUrban é obrigatório',
  })
  @MaxLength(255, { message: 'o campo fuelUrban excedeu o limite de caracteres' })
  fuelUrban: string;

  @IsNotEmpty({
    message: 'O campo fuelRoad é obrigatório',
  })
  @MaxLength(255, { message: 'o campo fuelRoad excedeu o limite de caracteres' })
  fuelRoad: string;

  @IsNotEmpty({
    message: 'O campo dataSheet é obrigatório',
  })
  @MaxLength(255, { message: 'o campo dataSheet excedeu o limite de caracteres' })
  dataSheet: string;
}
