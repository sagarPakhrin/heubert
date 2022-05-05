import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Lead } from '../entities/lead.entity';

@ObjectType()
export class MetaData {
  @Field(() => Int)
  total: number;
}

@ObjectType()
export class PaginatedLeads {
  @Field(() => [Lead])
  data: Lead[];

  @Field(() => MetaData)
  meta: MetaData;
}
