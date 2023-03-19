import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Loader } from 'components/Loader/Loader';

import './App.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage'),
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

function App() {
  // TODO remove after actual loading state will be added(also hooks in imports should be removed as well)
  const [isPageRefreshing, setIsPageRefreshing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPageRefreshing(false);
    }, 1500);
  }, [setIsPageRefreshing]);
  // ----

  return isPageRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
