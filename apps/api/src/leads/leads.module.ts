import { Module } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { LeadsResolver } from './leads.resolver';
import { LeadsService } from './leads.service';

@Module({
  providers: [LeadsResolver, LeadsService, PrismaService],
})
export class LeadsModule {}
