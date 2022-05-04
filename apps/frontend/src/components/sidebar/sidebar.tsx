import { FilterIcon, PresentationChartBarIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../utils/class-names';

const Sidebar = () => {
  const links = [
    {
      to: '/leads',
      label: 'Leads',
      icon: <FilterIcon className="w-6 h-6" />,
    },
    {
      to: '/reports',
      label: 'Reports',
      icon: <PresentationChartBarIcon className="w-6 h-6" />,
    },
  ];
  return (
    <div
      className={`pb-8 h-full w-80 bg-gray-900 flex flex-shrink-0 flex-col text-gray-300 overflow-x-hidden overflow-y-auto transition-all delay-75 sidebar
      'px-7 active'
    `}
    >
      <div
        className={classNames(
          'px-6 pt-8 pb-6 flex items-center sticky top-0 z-10 ',
          'bg-gray-900 justify-start border-b border-gray-800'
        )}
      >
        <h3 className="text-gray-300">Heubert</h3>
      </div>
      <div className="mt-8 px-4">
        {links.map((link, idx) => (
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              classNames(
                'my-1 py-3 px-4 rounded flex items-center gap-3',
                isActive ? 'bg-gray-700' : ''
              )
            }
            key={idx}
          >
            {link.icon}
            <span className="text-sm link-title truncate">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
