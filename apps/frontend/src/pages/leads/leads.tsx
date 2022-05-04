import { useState } from 'react';
import { LeadsOrderBy, SortOrder, useLeads } from '../../api/leads';
import Pagination from '../../components/pagination';
import LeadsTable from './components/leads-table';

export const Leads = () => {
  const [page, setPage] = useState(1);

  const [orderBy, setOrderBy] = useState<LeadsOrderBy>({
    engagement_score: SortOrder.asc,
  });

  const { data } = useLeads({
    page,
    orderBy,
  });

  const prev = () => {
    setPage((old) => (old > 0 ? old - 1 : old));
  };

  const next = () => {
    if (!data) return;

    setPage((old) => (old < 200 ? old + 1 : old));
  };

  if (!data) {
    return null;
  }

  const sortLeads = (orderBy: LeadsOrderBy) => {
    setOrderBy(orderBy);
  };

  return (
    <div className="flex flex-col">
      <LeadsTable leads={data.leads} orderBy={orderBy} sortLeads={sortLeads} />
      <Pagination
        page={page}
        perPage={20}
        total={200}
        prev={prev}
        next={next}
      />
    </div>
  );
};
export default Leads;
