import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import ComparativeResearch from './pages/ComparativeResearch'
import ScientificErrors from './pages/ScientificErrors'
import ExpansionHistory from './pages/ExpansionHistory'
import AntisemitismChristianity from './pages/AntisemitismChristianity'
import RealWorldHarm from './pages/RealWorldHarm'
import MigrationImpact from './pages/MigrationImpact'
import ExMuslimResources from './pages/ExMuslimResources'
import MuhammadWomen from './pages/MuhammadWomen'
import JihadStudy from './pages/JihadStudy'
import Solution from './pages/Solution'
import TerroristOrganizations from './pages/TerroristOrganizations'
import Wahhabism from './pages/Wahhabism'
import DhimmiIdeology from './pages/DhimmiIdeology'
import './App.css'

// Analytics tracking component
function AnalyticsTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Track page views on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-N7VHK2SC81', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
  
  return null;
}

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = '/';
  
  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <AnalyticsTracker />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/comparative-research" element={<ComparativeResearch />} />
            <Route path="/scientific-errors" element={<ScientificErrors />} />
            <Route path="/expansion-history" element={<ExpansionHistory />} />
            <Route path="/antisemitism-christianity" element={<AntisemitismChristianity />} />
            <Route path="/real-world-harm" element={<RealWorldHarm />} />
            <Route path="/migration-impact" element={<MigrationImpact />} />
            <Route path="/ex-muslim-resources" element={<ExMuslimResources />} />
            <Route path="/muhammad-women" element={<MuhammadWomen />} />
            <Route path="/jihad-study" element={<JihadStudy />} />
            <Route path="/terrorist-organizations" element={<TerroristOrganizations />} />
            <Route path="/wahhabism" element={<Wahhabism />} />
            <Route path="/dhimmi-ideology" element={<DhimmiIdeology />} />
            <Route path="/solution" element={<Solution />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
