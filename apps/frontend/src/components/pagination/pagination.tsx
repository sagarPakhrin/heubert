import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { classNames } from '../../utils/class-names';

export interface PaginationProps {
  page: number;
  total: number;
  perPage: number;
  prev: () => void;
  next: () => void;
}
export const Pagination = ({
  page,
  perPage,
  total,
  prev,
  next,
}: PaginationProps) => {
  return (
    <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className={classNames(
            'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md',
            'text-gray-700 bg-white hover:bg-gray-50'
          )}
          onClick={prev}
        >
          Previous
        </button>
        <button
          className={classNames(
            'ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md',
            'text-gray-700 bg-white hover:bg-gray-50'
          )}
          onClick={next}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium"> {perPage} </span>
            of
            <span className="font-medium"> {total} </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white',
                ' text-sm font-medium text-gray-500 hover:bg-gray-50'
              )}
              onClick={prev}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              {page}
            </button>
            <button
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white',
                ' text-sm font-medium text-gray-500 hover:bg-gray-50'
              )}
              onClick={next}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
