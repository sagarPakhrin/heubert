import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useLeadsForReport } from '../../api/leads';
import PieChartModal from '../../components/pie-chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const Reports = () => {
  const { data } = useLeadsForReport();
  const [activeSource, setActiveSource] = useState('');

  const labels =
    data?.report.map((src: { source: string }) => src.source) ?? [];

  const dataset = data?.report.map((src: { count: number }) => src.count) ?? [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any, element: any) => {
    const source = labels[element[0]?.index];
    if (source) {
      setActiveSource(source);
    }
  };

  return (
    <div>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Lead Sources',
              data: dataset,
              backgroundColor: '#818cf8',
            },
          ],
        }}
        options={{
          onClick: handleClick,
        }}
      />
      {activeSource && (
        <PieChartModal
          source={activeSource}
          onClose={() => setActiveSource('')}
        />
      )}
    </div>
  );
};
export default Reports;
