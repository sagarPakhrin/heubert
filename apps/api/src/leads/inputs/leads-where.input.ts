import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LeadsWhereInput {
  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => String, { nullable: true })
  source?: string;
}
