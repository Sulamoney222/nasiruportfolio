//Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//components
import './index.css'

//CSS link
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
