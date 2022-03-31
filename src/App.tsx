import React, { FC, Suspense } from 'react';

import './App.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootStateT } from './redux/store';

import {
  LoginPage,
  SearchPage,
  MainForm,
  PasswordReset,
  PasswordResend,
  PasswordNew,
  Filter,
  SearchFoundPanel,
  Preloader,
} from 'components';

export const DashboardPage = React.lazy(() =>
  import('components').then(x => ({ default: x.DashboardPage })),
);
export const FavoritesPage = React.lazy(() =>
  import('components').then(x => ({ default: x.FavoritesPage })),
);
export const ProspectsPage = React.lazy(() =>
  import('components').then(x => ({ default: x.ProspectsPage })),
);
export const ProspectsListPage = React.lazy(() =>
  import('components').then(x => ({ default: x.ProspectsListPage })),
);
export const CompanyPage = React.lazy(() =>
  import('components').then(x => ({ default: x.CompanyPage })),
);

const App: FC = () => {
  const accessToken = useSelector((state: RootStateT) => state.login.accessToken);

  return (
    <>
      {accessToken ? (
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route index element={<SearchFoundPanel />} />
            <Route path="filter" element={<Filter />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Preloader />}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<Preloader />}>
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route
            path="/prospects"
            element={
              <Suspense fallback={<Preloader />}>
                <ProspectsPage />
              </Suspense>
            }
          />
          <Route
            path="/prospects/prospects-list"
            element={
              <Suspense fallback={<Preloader />}>
                <ProspectsListPage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<Preloader />}>
                <CompanyPage />
              </Suspense>
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route index element={<MainForm />} />
            <Route path="reset" element={<PasswordReset />} />
            <Route path="resend" element={<PasswordResend />} />
            <Route path="change_password" element={<PasswordNew />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
