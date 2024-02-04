import { Body, Controller, Post } from '@nestjs/common';
import { CreateConfigDto } from 'src/dto/CreateConfigDto';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post()
  createConfig(@Body() body: CreateConfigDto): Promise<string> {
    return this.configService.createConfig(body.user);
  }
}
