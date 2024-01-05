import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App.jsx'
import About from './Components/About.jsx';


function Main() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
