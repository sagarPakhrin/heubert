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

const FETCH_LEADS_FOR_REPORT = gql`
  {
    report {
      source
      count
    }
  }
`;

const FETCH_ORIGIN_AGG = gql`
  query getOriginAggregiate($source: String!) {
    getOriginAggregiate(source: $source) {
      count
      origin
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
  orderBy?: LeadsOrderBy;
  filters?: Filters;
}

export const TAKE = 20;

export const useLeads = ({ page = 1, orderBy, filters }: UseLeadsProps) => {
  if (page <= 0) {
    page = 1;
  }
  let where = {};
  let operator = 'OR';

  if (filters?.operator) {
    operator = filters.operator;
  }

  if (filters?.origin.length) {
    where = {
      [operator]: [
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

export const useLeadsForReport = () => {
  return useQuery(FETCH_LEADS_FOR_REPORT);
};

export const useOriginAggregiate = (source: string) => {
  return useQuery(FETCH_ORIGIN_AGG, {
    variables: {
      source: source,
    },
    skip: !source,
  });
};
