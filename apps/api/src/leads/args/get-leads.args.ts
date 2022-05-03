import { ArgsType, Field } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { LeadsOrderByInput } from '../inputs/leads-orderby.input';
import { LeadsWhereInput } from '../inputs/leads-where.input';

@ArgsType()
export class QueryArgs {
  @Field({ nullable: true, defaultValue: 20 })
  @Max(100)
  take: number;

  @Field({ nullable: true })
  skip: number;

  @Field(() => LeadsOrderByInput, { nullable: true })
  orderBy?: LeadsOrderByInput;

  @Field(() => LeadsWhereInput, { nullable: true })
  where?: LeadsWhereInput;
}
