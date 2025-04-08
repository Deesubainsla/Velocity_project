import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MycontextProvider } from './contextapi/context.jsx'
import {Toaster} from 'react-hot-toast'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <MycontextProvider>
    <Toaster/>
    <App />
    </MycontextProvider>
  </StrictMode>,
)
