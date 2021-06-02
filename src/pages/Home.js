import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import NavBar from '../views/NavBar';
import ProfileForm from '../views/ProfileForm';
import ProfileParser from '../views/ProfileParser';
import ProfileTable from '../views/ProfileTable';

const Dashboard = () => {
  const [dataSubmited, setDataSubmited] = useState('');

  return (
    <>
      <NavBar />
      <Box display="flex">
        <ProfileForm setDataSubmited={setDataSubmited} />
        <ProfileParser dataSubmited={dataSubmited} />
      </Box>
      <ProfileTable dataSubmited={dataSubmited} />
    </>
  );
};

export default Dashboard;
