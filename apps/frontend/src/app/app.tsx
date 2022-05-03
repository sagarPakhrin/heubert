// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';
import Leads from '../pages/leads/leads';
import Reports from '../pages/repots/reports';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/" element={<Navigate replace to="/leads" />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
