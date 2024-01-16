import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './views/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App