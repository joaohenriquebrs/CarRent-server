import { IsNotEmpty } from 'class-validator';

export class Login {
  @IsNotEmpty({ message: 'Login é obrigatório' })
  login: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}
