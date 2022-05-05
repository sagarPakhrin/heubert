import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useOriginsAndSources } from '../../api/leads';
import { Filters } from '../../pages/leads/leads';
import { classNames } from '../../utils/class-names';

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  activeFilters: Filters;
  setActiveFilters: (filters: Filters) => void;
}

const Drawer = ({
  open,
  onClose,
  activeFilters,
  setActiveFilters,
}: DrawerProps) => {
  const { data } = useOriginsAndSources();

  const handleChange = (filterType: 'source' | 'origin', value: string) => {
    if (filterType === 'source') {
      if (activeFilters.source.includes(value)) {
        setActiveFilters({
          ...activeFilters,
          source: activeFilters.source.filter((org) => org !== value),
        });
      } else {
        setActiveFilters({
          ...activeFilters,
          source: [...activeFilters.source, value],
        });
      }
    } else {
      if (activeFilters.origin.includes(value)) {
        setActiveFilters({
          source: activeFilters.source,
          origin: activeFilters.origin.filter((src) => src !== value),
        });
      } else {
        setActiveFilters({
          source: activeFilters.source,
          origin: [...activeFilters.origin, value],
        });
      }
    }
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="h-screen min-h-screen flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <Transition.Child
            className={classNames(
              'fixed w-full max-w-screen-md h-full flex flex-col',
              'flex flex-col overflow-hidden text-left transition-all transform bg-gray-50 shadow-xl z-20'
            )}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Title
              as="div"
              className="px-11 py-5 flex justify-between bg-white shadow z-10"
            >
              <h3 className="text-lg font-medium text-gray-900 capitalize">
                Filters
              </h3>
              <button
                onClick={handleClose}
                className="focus:outline-none flex items-center justify-center"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </Dialog.Title>
            <div className="flex-1 overflow-y-auto p-11">
              <h2 className="text-gray-700 font-medium text-lg">Origins</h2>
              <div className="mt-5 grid grid-cols-2 space-y-3">
                {data?.leadOrigins.map((origin: string) => (
                  <label
                    htmlFor={origin}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <input
                      type="checkbox"
                      name={origin}
                      id={origin}
                      value={origin}
                      checked={activeFilters.origin.includes(origin)}
                      onChange={() => handleChange('origin', origin)}
                    />
                    {origin}
                  </label>
                ))}
              </div>

              <h2 className="mt-10 text-gray-700 font-medium text-lg">
                Sources
              </h2>
              <div className="mt-5 grid grid-cols-2 space-y-3">
                {data?.leadSources.map((source: string) => (
                  <label
                    htmlFor={source}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <input
                      type="checkbox"
                      name={source}
                      id={source}
                      value={source}
                      checked={activeFilters.source.includes(source)}
                      onChange={() => handleChange('source', source)}
                    />
                    {source}
                  </label>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
