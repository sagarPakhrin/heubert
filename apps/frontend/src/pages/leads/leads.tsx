import moment from 'moment';
import { useLeads } from '../../api/leads';
import { classNames } from '../../utils/class-names';

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

export const Leads = () => {
  const { data } = useLeads();
  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <div>
      <table
        className={classNames(
          'relative shadow-md w-full text-sm text-left text-gray-500',
          'table-fixed mr-6'
        )}
      >
        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-100">
          <tr className="">
            <th scope="col" className="px-6 py-3 w-10">
              Id
            </th>
            <th scope="col" className="px-6 py-3 w-20">
              Lead Number
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
            <th scope="col" className="px-6 py-3 w-32 text-center">
              Engagement Score
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
            <th scope="col" className="px-6 py-3 w-52 text-right">
              Last Activity Date
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
          {data.leads.map(
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
            }: Lead) => (
              <tr key={id} className="even:bg-gray-50 overflow-hidden">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{lead_number}</td>
                <td className="px-6 py-3 truncate">{origin}</td>
                <td className="px-6 py-3">{source}</td>
                <td className="px-6 py-3">
                  <p className="line-clamp-3">{notes ?? ''}</p>
                </td>
                <td className="px-6 py-3">{stage}</td>
                <td className="px-6 py-3 text-center">{engagement_score}</td>
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
                  {last_activity_date
                    ? moment(last_activity_date).format('D/MM/YYYY HH:mm:ss')
                    : ''}
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
export default Leads;
