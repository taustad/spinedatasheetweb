import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import JIP33TabView from '../../Views/JIP33TabView';
import { ProjectStartPage } from '../projectStartPage/projectStartPage';

const LandingPage: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectStartPage />} />
      </Routes>
      <Routes>
        <Route path="/JIP33" element={<JIP33TabView />} />
      </Routes>
    </>
  );
};

export default LandingPage;
