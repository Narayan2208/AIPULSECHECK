
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AssessmentCard from '../components/AsssesmentCard';
import LandingpageCard from '../components/LandingpageCard';
import Navbar from '../components/Navbar';

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/assessment"
        element={
          <Navbar>
            <AssessmentCard />
          </Navbar>
        }
      />
      <Route
        path="/"
        element={
          <Navbar>
            <LandingpageCard />
          </Navbar>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
