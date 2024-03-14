import MainNav from "./MainNav";
import React from "react";

function Layuout(props) {
  const [darkmode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={` duration-1000 font-urbanist  w-full dark:bg-slate-950 bg-indigo-300 pb-24 px-4 ${
        darkmode ? "dark" : ""
      } `}
    >
      <MainNav darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <main className="">{props.children}</main>
    </div>
  );
}

export default Layuout;
