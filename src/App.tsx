import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DemoPage from './pages/DemoPage'
import FAQPage from './pages/FAQPage'
import FeasibilityPage from './pages/FeasibilityPage'
import FeaturesPage from './pages/FeaturesPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import LoginPage from './pages/LoginPage'
import Navigation from './components/Navigation'
import ProblemPage from './pages/ProblemPage'
import ResearchPage from './pages/ResearchPage'
import SolutionPage from './pages/SolutionPage'
import TeamPage from './pages/TeamPage'
import TechPage from './pages/TechPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/feasibility" element={<FeasibilityPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App