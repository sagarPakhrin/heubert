import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsResolver } from './leads.resolver';

@Module({
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}
