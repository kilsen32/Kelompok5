import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/page/Login/login";
import RegisterPage from "./component/page/Register/register";
import BerandaPage from "./component/page/Beranda/beranda";
import Keranjang from "./component/page/Keranjang/keranjang";
import Pesanan from "./component/page/Pesanan/pesanan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/beranda" element={<BerandaPage />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/pesanan" element={<Pesanan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
