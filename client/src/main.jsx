import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import HomePage from './Routes/HomePage.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import PainPage from './Routes/PainPage.jsx'
import ViennoiseriePage from './Routes/ViennoiseriePage.jsx'
import PatisseriePage from './Routes/PatisseriePage.jsx'
import TraiteurPage from './Routes/TraiteurPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/pain' element={<PainPage />} />
          <Route path='/viennoiseries' element={<ViennoiseriePage />} />
          <Route path='/patisseries' element={<PatisseriePage />} />
          <Route path='/traiteur' element={<TraiteurPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
