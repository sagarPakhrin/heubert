import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Report {
  @Field(() => String, { nullable: true })
  source: string;

  @Field(() => String, { nullable: true })
  origin: string;

  @Field(() => Number)
  count: number;
}
