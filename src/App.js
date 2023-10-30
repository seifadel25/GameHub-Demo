import { Route, Routes } from "react-router-dom";
import React from "react";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavsPage from "./pages/Favs";
import Layuout from "./components/layout/Layout";

function App() {
  // localhost:3000/
  //www.

  return (
    <Layuout>
      <div>
        <Routes>
          <Route path="/" exact element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupsPage />} />
          <Route path="/favs" element={<FavsPage />} />
        </Routes>
      </div>
    </Layuout>
  );
}

export default App;
