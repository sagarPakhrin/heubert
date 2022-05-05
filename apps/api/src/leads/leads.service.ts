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

  async report() {
    const data = await this.prisma.lead.groupBy({
      by: ['source'],
      _count: {
        source: true,
      },
    });
    return data.map(({ _count, source }) => ({
      source,
      count: _count.source,
    }));
  }

  async originAggregiate(source: string) {
    const data = await this.prisma.lead.groupBy({
      by: ['origin'],
      _count: {
        origin: true,
      },
      where: {
        source,
      },
    });

    return data.map(({ _count, origin }) => ({
      origin,
      count: _count.origin,
    }));
  }
}
