import NMForm from "../components/meetups/NMForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch(
      "https://react-refresher-65646-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //history.replace('/');
      navigate("/", { replace: true });
    });
  }
  return (
    <div className=" dark:bg-slate-950 h-screen bg-indigo-300">
      <h1 className="text-3xl dark:text-white text-black text-center my-10">
        Add New Meetup
      </h1>
      <NMForm onAdd={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupsPage;
