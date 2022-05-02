import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Lead {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  lead_number: number;

  @Field(() => String)
  origin: string;

  @Field(() => String)
  source: string;

  @Field(() => String, { nullable: true })
  notes: string;

  @Field(() => String)
  stage: string;

  @Field(() => Number)
  engagement_score: number;

  @Field(() => Number)
  total_visits: number;

  @Field(() => Number, { nullable: true })
  page_views_per_visit: number;

  @Field(() => Number, { nullable: true })
  average_time_per_visit: number;

  @Field(() => String)
  last_activity: string;

  @Field(() => Date, { nullable: true })
  last_activity_date: Date;

  @Field(() => Date, { nullable: true })
  lead_conversion_date: Date;

  @Field(() => String, { nullable: true })
  city_old: string;

  @Field(() => String, { nullable: true })
  specialization: string;

  @Field(() => String, { nullable: true })
  entrance_test: string;

  @Field(() => String, { nullable: true })
  current_occupation: string;
}
