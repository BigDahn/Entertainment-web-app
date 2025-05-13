import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./Pages/Home/Home";
import BookMarked from "./Pages/BookMarked/BookMarked";
import Series from "./Pages/TvSeriesPage/Series";
import Movies from "./Pages/Movies/Movies";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/:name" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="bookmarked" element={<BookMarked />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
