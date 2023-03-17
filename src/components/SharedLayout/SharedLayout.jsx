import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
