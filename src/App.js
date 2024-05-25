import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Genere, Info, Movies, NotFound, UserRegistration } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/genere" element={<Genere />} />
        <Route path="/info" element={<Info />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
