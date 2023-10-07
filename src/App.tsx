import { Container } from "react-bootstrap";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavbarBS from "./components/NavbarBS";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <NavbarBS/>
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}
