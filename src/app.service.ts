import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Muhammad Siddik';
  }

  Hello(): string {
    return 'Hello from siddik';
  }
}
