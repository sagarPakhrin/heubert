import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../shared/services/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}
  findAll<T extends Prisma.LeadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindManyArgs>
  ) {
    return this.prisma.lead.findMany(args);
  }
}
