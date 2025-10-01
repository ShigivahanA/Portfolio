import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProjectsList from './pages/ProjectsList';
import CertificatesList from './pages/CertificatesList';
import ProjectDetail from "./pages/ProjectDetail";
import CertificateDetail from "./pages/CertificateDetail";
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
<Router>
  <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/certificates" element={<CertificatesList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certificates" element={<CertificatesList />} />
        <Route path="/certificates/:id" element={<CertificateDetail />} />
      </Routes>
    </Router>
  )
}

export default App
