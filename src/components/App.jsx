import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { LoginPage, DashbordPage } from 'Pages';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashbordPage />}></Route>
      </Route>
    </Routes>
  );
};
