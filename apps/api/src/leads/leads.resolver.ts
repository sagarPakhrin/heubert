import { Query, Resolver } from '@nestjs/graphql';
import { Lead } from './entities/lead.entity';
import { LeadsService } from './leads.service';

@Resolver(() => Lead)
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Query(() => [Lead], { name: 'leads' })
  leads() {
    return this.leadsService.findAll();
  }
}
