import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import PageContainer from './container/PageContainer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PageContainer>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      </PageContainer>
    </>
  )
}

export default App
