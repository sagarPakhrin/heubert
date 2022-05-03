import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <div className="flex bg-gray-50 w-full h-screen">
      <aside>Sidebar</aside>
      <div className="overflow-y-auto flex-1 flex flex-col">
        <div className="flex-1 py-12 px-8 2xl:px-32">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
