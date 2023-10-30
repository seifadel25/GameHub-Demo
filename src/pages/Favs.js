import { useContext } from "react";

import FavContext from "../store/fav-context";
import MeetupList from "../components/meetups/MeetupsList";
function FavsPage(params) {
  const favCtx = useContext(FavContext);

let content;
if(favCtx.totalFavs === 0){
  content = <h3 className="text-center text-2xl my-10">You got no favourites yet. Start adding some?</h3>
}
else {
  content = <MeetupList meetups={favCtx.favs}/>
}
  return <div className="dark:bg-slate-950 bg-indigo-300 w-full dark:text-white text-black font-urbanist ">
    <h1 className=" text-center text-4xl my-10"> Favourites Page</h1>
    {content}
      {console.log(favCtx.favs)}
  </div>;
}

export default FavsPage;
