import MainNav from "./MainNav";
import React from "react";

function Layuout(props) {
  const [darkmode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={` duration-1000 font-urbanist  w-full h-screen ${
        darkmode ? "dark" : ""
      } bg-indigo-300 text-white`}
    >
      <MainNav darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <main className="">{props.children}</main>
    </div>
  );
}

export default Layuout;
