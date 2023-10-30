import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupsList";
import  Loading  from "./Loading.tsx";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-refresher-65646-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            // title:data[key].title,
            // image:data[key].image,
            // address:data[key].address,
            // description:data[key].description,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
        console.log(meetups);
      });
  }, []);

  if (isLoading) {
    return <div className="">
      <Loading size={72}/>
    </div>;
  }

  return (
    <div className="dark:bg-slate-950 bg-indigo-300 w-full dark:text-white text-black font-urbanist">
      <h1 className="text-3xl text-center my-10"> All Meetups Available</h1>
      <MeetupList meetups={loadedMeetups} />

      {/* <ul>
      {Dummy_Data.map( (meet) => {
        return <li key={meet.id}>
          {meet.title}
        </li>
      })}
      </ul> */}
    </div>
  );
}

export default AllMeetupsPage;
