/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "pages/ProductPage";
import Cart from "pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="category/:categoryId" element={<CategoryPage />} />
            <Route path="product/:productId" element={<ProductPage />} />

            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
