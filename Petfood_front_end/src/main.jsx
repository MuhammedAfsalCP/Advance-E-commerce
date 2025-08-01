import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';
import './index.css'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './Redex/Store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
