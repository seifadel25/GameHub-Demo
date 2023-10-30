import MeetupItem from "./MeetupItems";

function MeetupList(props) {
  return (
    <ul className="grid xl:grid-cols-3 place-items-center gap-y-6">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          Image={meetup.Image}
          Title={meetup.Title}
          Address={meetup.Address}
          Description={meetup.Description}
          Rate={meetup.Rate}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
