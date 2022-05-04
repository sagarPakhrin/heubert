import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export const DefaultLayout = () => {
  return (
    <div className="flex bg-gray-50 w-full h-screen">
      <Sidebar />
      <div className="overflow-y-auto flex-1 flex flex-col">
        <div className="flex-1 py-12 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
