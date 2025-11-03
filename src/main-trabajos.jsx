import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Trabajos from './pages/Trabajos'
import Layout from './components/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Trabajos />
    </Layout>
  </StrictMode>,
)
