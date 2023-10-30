import { createContext, useState } from "react";

const FavContext = createContext({
    favs:[],
    totalFavs:0,
    addFavourite:(favMeetup)=>{},
    removeFav:(meetupId)=>{},
    itemIsFav:(meetupId)=>{}
});


export function FavContextProvider(props){

    const [userFavs, setUserFavs] = useState([]);
    
    function addFavHandler(favMeetup){
        setUserFavs((prevUserFavs)=>{
            return prevUserFavs.concat(favMeetup);
        })
    }

    function removeFavHandler(meetupId){
        setUserFavs((prevUserFavs)=>{
            return prevUserFavs.filter(meetup=>meetup.id !== meetupId);
        })
    }

    function itemIsFavHandler(meetupId){
        return userFavs.some(meetup=>meetup.id === meetupId);
    }

    const context ={
        favs:userFavs,
        totalFavs:userFavs.length,
        addFavourite: addFavHandler,
        removeFav: removeFavHandler,
        itemIsFav: itemIsFavHandler
    };

    return <FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>
}


export default FavContext;