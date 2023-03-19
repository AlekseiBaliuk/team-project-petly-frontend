import React, { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
