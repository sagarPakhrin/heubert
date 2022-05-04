import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryArgs } from './args/get-leads.args';
import { Lead } from './entities/lead.entity';
import { LeadsService } from './leads.service';

@Resolver(() => Lead)
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Query(() => [Lead], { name: 'leads' })
  leads(@Args() args: QueryArgs) {
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
