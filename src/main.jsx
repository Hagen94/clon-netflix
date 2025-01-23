import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
/*Material ui */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//importo las rutas
import { Router } from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
