// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="w-full h-screen bg-gray-200">Heubert</div>}
      />
    </Routes>
  );
}

export default App;
