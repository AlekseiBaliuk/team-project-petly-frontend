import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

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
  return (
    <>
      <Suspense>
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
      </Suspense>
    </>
  );
}

export default App;
