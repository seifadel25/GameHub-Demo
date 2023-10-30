function SButton(props) {
  return (
    <div>
      <button
        className="block text-xl text-gray-500 dark:bg-slate-950 hover:text-indigo-500 hover:bg-slate-950 duration-500 md:p-4 py-7 px-10 rounded w-full   font-urbanist  md:ml-0 
            "
      >
        {props.text}
      </button>
    </div>
  );
}

export default SButton;
