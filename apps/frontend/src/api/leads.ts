import { gql, useQuery } from '@apollo/client';
import { Filters } from '../pages/leads/leads';

const FETCH_LEADS = gql`
  query fetchLeads(
    $skip: Float
    $orderBy: LeadsOrderByInput
    $where: LeadsWhereInput
    $take: Float
  ) {
    leads(skip: $skip, orderBy: $orderBy, where: $where, take: $take) {
      data {
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
      meta {
        total
      }
    }
  }
`;

const FETCH_ORIGINS_AND_SOURCES = gql`
  {
    leadOrigins
    leadSources
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
  orderBy?: LeadsOrderBy;
  filters?: Filters;
}

export const TAKE = 20;

export const useLeads = ({ page = 1, orderBy, filters }: UseLeadsProps) => {
  if (page <= 0) {
    page = 1;
  }
  let where = {};

  if (filters?.origin.length || filters?.source.length) {
    where = {
      OR: [
        {
          source: {
            in: filters?.source,
          },
        },
        {
          origin: {
            in: filters?.origin,
          },
        },
      ],
    };
  }

  return useQuery(FETCH_LEADS, {
    variables: {
      skip: (page - 1) * TAKE,
      orderBy,
      where,
      take: TAKE,
    },
  });
};

export const useOriginsAndSources = () => {
  return useQuery(FETCH_ORIGINS_AND_SOURCES);
};
