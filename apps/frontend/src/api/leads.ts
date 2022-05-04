import { gql, useQuery } from '@apollo/client';

const FETCH_LEADS = gql`
  query fetchLeads {
    leads {
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

export const useLeads = () => {
  return useQuery(FETCH_LEADS);
};
