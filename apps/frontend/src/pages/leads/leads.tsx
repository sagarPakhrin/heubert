import { useState } from 'react';
import { LeadsOrderBy, SortOrder, useLeads } from '../../api/leads';
import Drawer from '../../components/drawer';
import Pagination from '../../components/pagination';
import LeadsTable from './components/leads-table';

export interface Filters {
  origin: string[];
  source: string[];
}

export const Leads = () => {
  const [page, setPage] = useState(1);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const [activeFilters, setActiveFilters] = useState<Filters>({
    origin: [],
    source: [],
  });

  const [orderBy, setOrderBy] = useState<LeadsOrderBy>({
    engagement_score: SortOrder.asc,
  });

  const { data } = useLeads({
    page,
    orderBy,
    filters: activeFilters,
  });

  const prev = () => {
    setPage((old) => (old > 0 ? old - 1 : old));
  };

  const next = () => {
    if (!data) return;

    setPage((old) => (old < 200 ? old + 1 : old));
  };

  const sortLeads = (orderBy: LeadsOrderBy) => {
    setOrderBy(orderBy);
  };

  console.log(data);

  return (
    <div className="flex flex-col">
      <LeadsTable
        leads={data?.leads.data ?? []}
        orderBy={orderBy}
        sortLeads={sortLeads}
        openDrawer={() => setShowDrawer(true)}
      />

      <Pagination
        page={page}
        perPage={data?.leads.data.length}
        total={data?.leads?.meta?.total ?? 0}
        prev={prev}
        next={next}
      />

      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    </div>
  );
};
export default Leads;
