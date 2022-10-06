import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Layout from './components/Layout';
import LongLatToLatLong from './pages/Utils/LongLatToLatLong';
import FileUrlToBase64 from './pages/Utils/FileUrlToBase64';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/portfolio" />} />
          <Route path="/portfolio">
            <Route index element={<Home />} />
            <Route path="utils">
              <Route path="longlat-to-latlong" element={<LongLatToLatLong />} />
              <Route path="file-url-to-base64" element={<FileUrlToBase64 />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
