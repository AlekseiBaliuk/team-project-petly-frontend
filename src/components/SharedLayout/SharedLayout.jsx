import React from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <NoticeCategoryItem />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
