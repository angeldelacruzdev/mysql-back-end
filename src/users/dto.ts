import { IsEmail, IsString, Min } from 'class-validator';

export class CreateUserDto {
  id?: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  confirm_password: string;
}

export class UpdateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  role: string;
  @Min(0)
  status: number;
}
