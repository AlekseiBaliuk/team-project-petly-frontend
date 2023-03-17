import React from 'react';
import { Outlet } from 'react-router-dom';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

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
