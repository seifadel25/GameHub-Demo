import { useContext } from "react";
import FavContext from "../../store/fav-context";

function ToFavs(props) {
  const FavCtx = useContext(FavContext)
  const itemIsFav = FavCtx.itemIsFav(props.id);

  function toggleFavStatHandler(){
    if(itemIsFav){
      FavCtx.removeFav(props.id);
  }
  else{
      FavCtx.addFavourite({
          id:props.id,
          Title:props.Title,
          Description:props.Description,
          Image:props.Image,
          Address:props.Address,
          Rate:props.Rate
      });
  }
  }
  return (
    <div>
      <button
        className={`last:block text-xl hover:text-2xl dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 hover:bg-indigo-300 bg-white duration-500 md:p-4 py-7 px-10 rounded-b-xl w-full font-urbanist ${props.className}`}
        onClick={toggleFavStatHandler}
      >
        {itemIsFav ? "Remove from Favourites" : "To Favourites"}
      </button>
    </div>
  );
}

export default ToFavs;
