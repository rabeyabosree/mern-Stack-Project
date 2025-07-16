
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContex from './pages/contex/ShopContex.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <ShopContex>
    <App />
  </ShopContex>
  </BrowserRouter>
)
