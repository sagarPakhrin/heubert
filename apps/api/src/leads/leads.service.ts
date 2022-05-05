import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../shared/services/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll<T extends Prisma.LeadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindManyArgs>
  ) {
    const data = await this.prisma.lead.findMany(args);

    const total = await this.prisma.lead.count({
      where: args.where,
    });

    return {
      data: data,
      meta: {
        total,
      },
    };
  }

  async findLeadOrigins(): Promise<string[]> {
    const origins = await this.prisma.lead.findMany({
      select: {
        origin: true,
      },
      distinct: ['origin'],
      where: {
        origin: {
          not: '',
        },
      },
    });
    return origins.map(({ origin }) => origin);
  }

  async findLeadSources(): Promise<string[]> {
    const origins = await this.prisma.lead.findMany({
      select: {
        source: true,
      },
      distinct: ['source'],
      where: {
        source: {
          not: '',
        },
      },
    });
    return origins.map(({ source }) => source);
  }
}
