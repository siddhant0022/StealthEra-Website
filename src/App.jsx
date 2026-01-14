import Header from './components/Header'
import PartnerLogos from './components/PartnerLogos'
import ProblemStatement from './components/ProblemStatement'
import KeyFeatures from './components/KeyFeatures'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PartnerLogos />
      <ProblemStatement />
      <KeyFeatures />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App