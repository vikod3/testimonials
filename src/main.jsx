import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Testimonials from './Testimonials.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testimonials />
  </StrictMode>,
)
