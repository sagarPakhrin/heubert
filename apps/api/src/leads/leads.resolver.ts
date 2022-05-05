import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryArgs } from './args/get-leads.args';
import { PaginatedLeads } from './dto/paginated-leads.dto';
import { Lead } from './entities/lead.entity';
import { LeadsService } from './leads.service';

@Resolver(() => Lead)
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Query(() => PaginatedLeads, { name: 'leads' })
  leads(@Args() args: QueryArgs): Promise<PaginatedLeads> {
    return this.leadsService.findAll(args);
  }

  @Query(() => [String])
  leadOrigins(): Promise<string[]> {
    return this.leadsService.findLeadOrigins();
  }

  @Query(() => [String])
  leadSources() {
    return this.leadsService.findLeadSources();
  }
}
