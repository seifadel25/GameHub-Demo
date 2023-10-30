import Card from "../UI/Card";
import ToFavs from "../UI/ToFavs";

function MeetupItem(props) {
  return (
    <li className=" hover:scale-110 border-2 hover:border-black dark:hover:border-4 hover:border-4 dark:hover:border-indigo-600 rounded-2xl duration-500">
      <Card>
        <div className=" h-64 overflow-hidden object-cover">
          <img
            src={props.Image}
            alt={props.Title}
            width={420}
            className="h-full"
          />
        </div>
        <div className="p-3">
          <h3 className="font-bold text-slate-950 text-2xl my-1">
            {props.Title}
          </h3>
          <address className="text-gray-600 text-xl">{props.Address}</address>
          <p className="text-gray-600 text-base">{props.Description}</p>
        </div>
        <div className="bg-blue-600 text-white font-bold absolute top-0 m-4 px-3 py-1 rounded-sm opacity-80">
          <span> {props.Rate}</span>
        </div>
      </Card>
      <ToFavs
        text="To Favourites"
        key={props.id}
        id={props.id}
        Image={props.Image}
        Title={props.Title}
        Address={props.Address}
        Description={props.Description}
        Rate={props.Rate}
      />
    </li>
  );
}

export default MeetupItem;
