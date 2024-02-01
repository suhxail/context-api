
import React from 'react' 
import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App