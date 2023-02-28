import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTests(): string {
    return 'Hello Nest!';
  }
}
