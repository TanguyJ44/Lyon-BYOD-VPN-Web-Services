import { IsNotEmpty } from 'class-validator';

export class CreateConfigDto {
  @IsNotEmpty()
  user: string;
}
