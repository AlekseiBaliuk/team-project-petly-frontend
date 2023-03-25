import React, { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Suspense fallback={<Loader />}>
        <main style={{ flex: 'auto' }}>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
