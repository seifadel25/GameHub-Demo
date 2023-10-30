function Card(props) {
  return (
    <div className="bg-white  rounded-t-2xl w-fit  drop-shadow-2xl overflow-y-auto">
      <div className="">{props.children}</div>
    </div>
  );
}

export default Card;
