import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import SiteNav from './components/SiteNav'
import Homepage from './pages/Homepage'
import Allpage from './pages/Allpage'
import Beatuppage from './pages/Beatuppage'
import Fighterpage from './pages/Fighterpage'
import Platformerpage from './pages/Platformerpage'
import Puzzlepage from './pages/Puzzlepage'
import Racingpage from './pages/Racingpage'
import RPGpage from './pages/RPGpage'

function App() {
  
  console.log("Let's get started then...")
  return (
    <div>
      <SiteNav />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/all' element={<Allpage />}/>
          <Route path='/beatup' element={<Beatuppage />}/>
          <Route path='/fighter' element={<Fighterpage />}/>
          <Route path='/platformer' element={<Platformerpage />}/>
          <Route path='/puzzle' element={<Puzzlepage />}/>
          <Route path='/racing' element={<Racingpage />}/>
          <Route path='/rpg' element={<RPGpage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App