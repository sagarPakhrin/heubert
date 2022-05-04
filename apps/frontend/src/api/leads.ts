import { gql, useQuery } from '@apollo/client';

const FETCH_LEADS = gql`
  query fetchLeads($skip: Float, $orderBy: LeadsOrderByInput) {
    leads(skip: $skip, orderBy: $orderBy) {
      id
      lead_number
      origin
      source
      notes
      stage
      engagement_score
      total_visits
      page_views_per_visit
      average_time_per_visit
      last_activity
      last_activity_date
      lead_conversion_date
      city_old
      specialization
      entrance_test
      current_occupation
    }
  }
`;

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export interface LeadsOrderBy {
  id?: SortOrder;
  lead_number?: SortOrder;
  engagement_score?: SortOrder;
  last_activity_date?: SortOrder;
}

interface UseLeadsProps {
  page: number;
  orderBy: LeadsOrderBy;
}

export const TAKE = 20;

export const useLeads = ({ page = 1, orderBy }: UseLeadsProps) => {
  if (page <= 0) {
    page = 1;
  }

  return useQuery(FETCH_LEADS, {
    variables: {
      skip: (page - 1) * TAKE,
      orderBy,
    },
  });
};
