import React from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <div>Header</div>
      <NoticeCategoryItem />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
