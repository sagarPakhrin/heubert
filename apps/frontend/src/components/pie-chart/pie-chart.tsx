import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import { useOriginAggregiate } from '../../api/leads';

export interface PieChartModalProps {
  source: string;
  onClose: () => void;
}

export const PieChartModal = ({ source, onClose }: PieChartModalProps) => {
  const { data } = useOriginAggregiate(source);
  const labels =
    data?.getOriginAggregiate.map((src: { origin: string }) => src.origin) ??
    [];

  const datasets =
    data?.getOriginAggregiate.map((org: { count: number }) => org.count) ?? [];

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Pie chart for ${source}`,
      },
    },
  };

  const pie_data = {
    maintainAspectRatio: false,
    labels: labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: labels.map(
          () =>
            `rgb(
              ${Math.floor(Math.random() * 255)},
              ${Math.floor(Math.random() * 255)},
              ${Math.floor(Math.random() * 255)}, 1)`
        ),
      },
    ],
  };

  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  className="absolute right-4 top-2 z-10"
                  onClick={onClose}
                >
                  <XIcon className="h-6 w-6" />
                </button>
                <div className="mt-4">
                  <Pie data={pie_data} options={options} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PieChartModal;
