import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadsService {
  findAll() {
    return [{ id: 1 }];
  }
}
