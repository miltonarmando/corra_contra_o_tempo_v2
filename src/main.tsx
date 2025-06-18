import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Scroll to top on page load/refresh
if (typeof window !== 'undefined') {
  window.scrollTo(0, 0);
  // Força o scroll para o topo mesmo com scroll restaurado pelo browser
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
