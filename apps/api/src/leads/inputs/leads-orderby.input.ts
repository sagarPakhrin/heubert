import { Field, InputType, registerEnumType } from '@nestjs/graphql';

@InputType()
export class LeadsOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lead_number?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  engagement_score?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  last_activity_date?: SortOrder;
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortOrder, {
  name: 'SortOrder',
});
