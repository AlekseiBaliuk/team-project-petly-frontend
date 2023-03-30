import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Loader } from 'components/Loader/Loader';

import './App.css';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

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
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices/">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route
            path="/user"
            element={shouldRedirect ? <Navigate to="/" /> : <UserPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
