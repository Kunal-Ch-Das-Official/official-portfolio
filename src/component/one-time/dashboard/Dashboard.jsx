import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import Projects from '../../../pages/projects/Projects';

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Dashboard;