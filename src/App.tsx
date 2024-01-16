import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './views/Home'
import Vault from './views/Vault';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vault' element={<Vault/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
