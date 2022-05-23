import { Drawer } from '@heubert/ui';
import { useOriginsAndSources } from '../../api/leads';
import { Filters } from '../../pages/leads/leads';

export interface DrawerProps {
  onClose?: () => void;
  activeFilters: Filters;
  setActiveFilters: (filters: Filters) => void;
}

const Filter = ({ onClose, activeFilters, setActiveFilters }: DrawerProps) => {
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
          ...activeFilters,
          source: activeFilters.source,
          origin: activeFilters.origin.filter((src) => src !== value),
        });
      } else {
        setActiveFilters({
          ...activeFilters,
          source: activeFilters.source,
          origin: [...activeFilters.origin, value],
        });
      }
    }
  };

  const handleOperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const operator = e.target.id as unknown as 'AND' | 'OR';
    setActiveFilters({ ...activeFilters, operator });
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Drawer title="Filters" open onClose={handleClose}>
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-gray-700 font-medium text-lg">Logical Attribute</h2>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="operator"
              id="AND"
              checked={activeFilters.operator === 'AND'}
              onChange={handleOperatorChange}
            />

            <label htmlFor="AND">Match all filters - AND</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="operator"
              id="OR"
              checked={activeFilters.operator === 'OR'}
              onChange={handleOperatorChange}
            />

            <label htmlFor="OR">Match any filters - OR</label>
          </div>
        </div>
        <h2 className="text-gray-700 font-medium text-lg mt-5">Origins</h2>
        <div className="grid grid-cols-2 space-y-3">
          {data?.leadOrigins.map((origin: string) => (
            <label
              htmlFor={origin}
              className="flex items-center gap-3 text-gray-800"
              key={origin}
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

        <h2 className="mt-10 text-gray-700 font-medium text-lg">Sources</h2>
        <div className="mt-5 grid grid-cols-2 space-y-3">
          {data?.leadSources.map((source: string) => (
            <label
              htmlFor={source}
              className="flex items-center gap-3 text-gray-800"
              key={source}
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
    </Drawer>
  );
};

export default Filter;
