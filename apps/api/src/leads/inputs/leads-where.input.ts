import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StringFilter {
  @Field(() => [String], { nullable: true })
  in?: string[];
}

@InputType()
export class LeadsWhereInput {
  @Field(() => StringFilter, { nullable: true })
  origin?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  source?: StringFilter;

  @Field(() => [LeadsWhereInput], { nullable: true })
  AND?: [LeadsWhereInput];

  @Field(() => [LeadsWhereInput], { nullable: true })
  OR?: [LeadsWhereInput];
}
