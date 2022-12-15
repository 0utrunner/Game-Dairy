import Homepage from './pages/Homepage'
import SiteNav from './components/SiteNav'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  console.log("Let's get started then...")
  return (
    <div>
      <SiteNav />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App