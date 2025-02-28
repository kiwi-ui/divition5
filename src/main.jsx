import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Suspense } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router'
import Loading from './pages/Loading/index.jsx'
import Cover from './pages/Cover/index.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
          <Route path='/:name' element={ <Cover /> }/>
          <Route path='/:name/main' element={ <App /> }/>
      </Routes>
    </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
