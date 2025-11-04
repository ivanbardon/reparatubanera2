import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Trabajos from './components/Trabajos'
import Layout from './components/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Trabajos />
    </Layout>
  </StrictMode>,
)
