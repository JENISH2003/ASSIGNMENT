import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import RtkStore from './RTK/RtkStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={RtkStore}>
    <App />
    </Provider>
  </StrictMode>,
)
