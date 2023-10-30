function DefButton(props) {
  return (
    <div>
      <button
        className={`last:block text-xl hover:text-2xl dark:text-gray-500 dark:bg-slate-950 dark:hover:text-indigo-500 dark:hover:bg-slate-950 hover:bg-indigo-300 bg-white duration-500 md:p-4 py-7 px-10 rounded-b-xl w-full font-urbanist ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
}

export default DefButton;
