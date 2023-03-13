import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProjectStartPage } from '../projectStartPage/projectStartPage';

const LandingPage: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectStartPage />} />
    </Routes>
  );
};

export default LandingPage;
