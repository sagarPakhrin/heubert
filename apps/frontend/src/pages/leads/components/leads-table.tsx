import { ArrowUpIcon } from '@heroicons/react/solid';
import moment from 'moment';
import { LeadsOrderBy, SortOrder } from '../../../api/leads';
import { classNames } from '../../../utils/class-names';

export interface Lead {
  id: number;
  lead_number: number;
  origin: string;
  source: string;
  notes?: string;
  stage: string;
  engagement_score: number;
  total_visits: number;
  page_views_per_visit?: number;
  average_time_per_visit?: number;
  last_activity: string;
  last_activity_date?: Date;
  lead_conversion_date?: Date;
  city_old?: string;
  specialization?: string;
  entrance_test?: string;
  current_occupation?: string;
}

export interface LeadsTableProps {
  leads: Lead[];
  orderBy: LeadsOrderBy;
  sortLeads: (orderBy: LeadsOrderBy) => void;
}

const sortable_keys = {
  lead_number: 'lead_number',
  engagement_score: 'engagement_score',
  last_activity_date: 'last_activity_date',
};

export const LeadsTable = ({ leads, orderBy, sortLeads }: LeadsTableProps) => {
  const order = Object.keys(orderBy)[0];

  const setOrder = (sort_key: keyof typeof sortable_keys) => {
    if (order === sort_key) {
      if (orderBy[sort_key] === SortOrder.asc) {
        sortLeads({
          [sort_key]: SortOrder.desc,
        });
        return;
      } else {
        sortLeads({
          [sort_key]: SortOrder.asc,
        });
      }
    }
    sortLeads({
      [sort_key]: SortOrder.asc,
    });
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <table
        className={classNames(
          'shadow-md w-full text-sm text-left text-gray-500',
          'table-fixed mr-6'
        )}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr className="">
            <th scope="col" className="px-6 py-3 w-10">
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 w-32 cursor-pointer"
              onClick={() => setOrder('lead_number')}
            >
              <div className="flex items-center gap-2">
                <ArrowUpIcon
                  className={classNames(
                    'w-4 h-4 flex-shrink-0 transition-all duration-150',
                    order === sortable_keys.lead_number ? ' text-blue-500' : '',
                    orderBy.lead_number === SortOrder.desc ? 'rotate-180' : ''
                  )}
                />
                <span>Lead Number</span>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 w-32  cursor-pointer"
              onClick={() => setOrder('engagement_score')}
            >
              <div className="flex items-center gap-2">
                <ArrowUpIcon
                  className={classNames(
                    'w-4 h-4 flex-shrink-0 transition-all duration-150',
                    order === sortable_keys.engagement_score
                      ? ' text-blue-500'
                      : '',
                    orderBy.engagement_score === SortOrder.desc
                      ? 'rotate-180'
                      : ''
                  )}
                />
                <span>Engagement Score</span>
              </div>
            </th>
            <th
              scope="col"
              className="pl-6 py-3 w-52 text-right  cursor-pointer"
              onClick={() => setOrder('last_activity_date')}
            >
              <div className="flex items-center gap-2">
                <ArrowUpIcon
                  className={classNames(
                    'w-4 h-4 flex-shrink-0 transition-all duration-150',
                    order === sortable_keys.last_activity_date
                      ? ' text-blue-500'
                      : '',
                    orderBy.last_activity_date === SortOrder.desc
                      ? 'rotate-180'
                      : ''
                  )}
                />
                <span>Last Activity Date</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 w-56">
              Lead Origin
            </th>
            <th scope="col" className="px-6 py-3 w-44">
              Lead Source
            </th>
            <th scope="col" className="px-6 py-3 w-64">
              Notes
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Lead Stage
            </th>
            <th scope="col" className="px-6 py-3 w-24 text-center">
              Total Visits
            </th>
            <th scope="col" className="px-6 py-3 w-32 text-center">
              Page Views Per Visit
            </th>
            <th scope="col" className="px-6 py-3 w-44 text-center">
              Average Time Per Visit
            </th>
            <th scope="col" className="px-6 py-3 w-44">
              Last Activity
            </th>
            <th scope="col" className="px-6 py-3  w-52 text-right">
              Lead Conversion date
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              Cityold
            </th>
            <th scope="col" className="px-6 py-3 w-52">
              Specilization
            </th>
            <th scope="col" className="px-6 py-3 w-20">
              Entrance Test
            </th>
            <th scope="col" className="px-6 py-3 w-52">
              Current occupation
            </th>
          </tr>
        </thead>
        <tbody>
          {leads.map(
            ({
              id,
              lead_number,
              origin,
              source,
              notes,
              stage,
              engagement_score,
              total_visits,
              page_views_per_visit,
              average_time_per_visit,
              last_activity,
              last_activity_date,
              lead_conversion_date,
              city_old,
              specialization,
              entrance_test,
              current_occupation,
            }) => (
              <tr key={id} className="even:bg-gray-50 overflow-hidden">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{lead_number}</td>
                <td className="px-6 py-3 text-center">{engagement_score}</td>
                <td className="px-6 py-3 text-right">
                  {last_activity_date
                    ? moment(last_activity_date).format('D/MM/YYYY HH:mm:ss')
                    : ''}
                </td>
                <td className="px-6 py-3 truncate">{origin}</td>
                <td className="px-6 py-3">{source}</td>
                <td className="px-6 py-3">
                  <p className="line-clamp-3">{notes ?? ''}</p>
                </td>
                <td className="px-6 py-3">{stage}</td>
                <td className="px-6 py-3 text-center">{total_visits}</td>
                <td className="px-6 py-3 text-center">
                  {page_views_per_visit ?? ''}
                </td>
                <td className="px-6 py-3 text-center">
                  {average_time_per_visit ?? ''}
                </td>
                <td className="px-6 py-3">
                  <p className="line-clamp-2">{last_activity}</p>
                </td>
                <td className="px-6 py-3 text-right">
                  {lead_conversion_date
                    ? moment(lead_conversion_date).format('D/MM/YYYY HH:mm:ss')
                    : ''}
                </td>
                <td className="px-6 py-3">{city_old ?? ''}</td>
                <td className="px-6 py-3">{specialization ?? ''}</td>
                <td className="px-6 py-3">{entrance_test ?? ''}</td>
                <td className="px-6 py-3">{current_occupation ?? ''}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
