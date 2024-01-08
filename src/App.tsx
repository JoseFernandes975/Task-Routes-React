import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ClientHeader from './routes/ClientHeader'
import Home from './routes/ClientHeader/Home'
import Products from './routes/ClientHeader/Products'
import Computers from './routes/ClientHeader/Products/Computers'
import Eletronics from './routes/ClientHeader/Products/Eletronics'
import Books from './routes/ClientHeader/Products/Books'
import About from './routes/ClientHeader/About'
import NotFound from './routes/ClientHeader/NotFound'


function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<ClientHeader />}>
      <Route index element={<Navigate to={'home'} />} />
      <Route path='home' element={<Home />} />
        <Route path='products' element={<Products />} >
          <Route index element={<Navigate to='computers' />} />
           <Route path='computers' element={<Computers />} />
           <Route path='eletronics' element={<Eletronics />} />
           <Route path='books' element={<Books />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Route>
    

    </Routes>
    </BrowserRouter>
  )
}

export default App
