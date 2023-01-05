import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RootRoutes, ErrorsRoutes } from './routes';

const Home = React.lazy(() => import('../pages/Home'));
const Call = React.lazy(() => import('../pages/Call'));
const Page404 = React.lazy(() => import('../pages/Page404'));

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RootRoutes.HOME} element={<Home />} />
      <Route path={RootRoutes.Call} element={<Call />} />
      <Route path={ErrorsRoutes.PAGE_404} element={<Page404 />} />
      <Route
        path="*"
        element={<Navigate to={ErrorsRoutes.PAGE_404} replace />}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
