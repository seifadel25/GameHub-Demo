import { Link } from "react-router-dom";
import { useContext } from "react";
import FavContext from "../../store/fav-context";
//import ThemeSwitcher from "../UI/ThemeSwitcher";
import { useState } from "react";
import classNames from "classnames";

let Links = [
  {
    name: "All Meets",
    path: "/",
  },
  {
    name: "New Meets",
    path: "/new-meetup",
  },
  {
    name: "Favourites",
    path: "/favs",
  },
];

function MainNav(props) {
  const FavCtx = useContext(FavContext);
  let [open, setOpen] = useState(false);
  const classname = classNames(
    "flex",
    "md:flex-row",
    "flex-col",
    "ml-1",
    "items-center",
    "md:pb-0",
    "pb-0",
    "pt-8",
    "md:pt-0",
    "md:static",
    "bg-white",
    "md:z-auto",
    "z-8",
    "min-h-full",
    "left-0",
    "w-full",
    "md:w-auto",
    "md:pl-0",
    "pl-0",

    "dark:bg-slate-950",
    `${
      open
        ? "static visible  md:visible md:animate-none animate-fade-in pb-0 overflow-hidden"
        : "invisible md:visible md:h-6 animate-fade-out md:animate-none absolute h-0 pb-0 overflow-hidden "
    }`
  );

  let contentx;
  if (FavCtx.totalFavs === 0) {
    contentx = <span></span>;
  } else {
    contentx=
    <span className=" dark:bg-slate-800 bg-white text-indigo-600 dark:text-white rounded-full px-4 ml-2 ">
      {FavCtx.totalFavs}
    </span>;
  }
  return (
    <div className="shadow-md  w-full relative top-0 left-0">
      <div className=" md:flex items-center justify-between dark:bg-slate-950 bg-white md:py-0 pt-5 pb-4 md:px-0 px-7">
        <Link to="/">
          <div
            className=" dark:text-indigo-600 font-bold text-2xl cursor-pointer flex items-center font-urbanist
        text-gray-800 "
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="game-controller-outline"></ion-icon>
            </span>
            GameHub
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-indigo-600 absolute right-8 top-6 cursor-pointer
         md:hidden "
        >
          <ion-icon
            name={open ? "close-circle-outline" : "menu-outline"}
          ></ion-icon>
        </div>
        <div className="items-center md:h-20 lg:h-16 md:w-9/12">
          <ul className={classname}>
            {/* {Links.map((link) => (
              <li
                key={link.name}
                className=" h-20 md:h-full md:ml-0  text-xl md:py-0 md:my-0 py-0 w-full"
              >
                <Link
                  to={link.path}
                  className=" h-full md:h-full text-center  box-border block hover:bg-indigo-300 hover:text-white text-indigo-600 dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 md:duration-500 md:py-4 pt-7 md:px-4 w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))} */}
            <li className=" h-20 md:h-full md:ml-0  text-xl md:py-0 md:my-0 py-0 w-full">
              <Link
                className=" h-full md:h-full text-center  box-border block hover:bg-indigo-300 hover:text-white text-indigo-600 dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 md:duration-500 md:py-4 pt-7 md:px-4 w-full"
                to="/"
              >
                All Meetups
              </Link>
            </li>
            <li className=" h-20 md:h-full md:ml-0  text-xl md:py-0 md:my-0 py-0 w-full">
              <Link
                className=" h-full md:h-full text-center  box-border block hover:bg-indigo-300 hover:text-white text-indigo-600 dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 md:duration-500 md:py-4 pt-7 md:px-4 w-full"
                to="/new-meetup"
              >
                New Meetups
              </Link>
            </li>
            <li className=" h-20 md:h-full md:ml-0  text-xl md:py-0 md:my-0 py-0 w-full">
              <Link
                className=" h-full md:h-full text-center  box-border block hover:bg-indigo-300 hover:text-white text-indigo-600 dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 md:duration-500 md:py-4 pt-7 md:px-4 w-full"
                to="/favs"
              >
                My Favourites
                {contentx}
              </Link>
            </li>
            {/* <ThemeSwitcher  /> */}
            <button
              onClick={props.toggleDarkMode}
              className=" md:h-fit h-full block text-sm text-gray-500 hover:text-black hover:font-bold dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950  duration-500 py-7 px-10  md:p-0 w-fit   font-urbanist  md:ml-0"
            >
              <ion-icon name="contrast-outline"></ion-icon>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
