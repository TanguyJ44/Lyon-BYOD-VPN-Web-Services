import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): string {
    return `Lyon BYOD - VPN Web Service`;
  }
}
