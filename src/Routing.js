import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  CategoriesPage,
  ContactPage,
  ErrorPage,
  HomePage,
  LoginPage,
  NewsPage,
  RegisterPage,
} from "./Pages";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/categories" element={<CategoriesPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
