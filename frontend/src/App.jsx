import {  Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Testimonails from "./pages/testimonetion/Testimonails";
import Contact from "./pages/contact/Contact";
import ProductDetails from "./pages/products/ProductDetails";
import Collection from "./pages/collection/Collection";
import Cart from "./pages/collection/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (

      <main className="overflow-hidden text-[#404040]">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/testimonials" element={<Testimonails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

  );
}

export default App;
