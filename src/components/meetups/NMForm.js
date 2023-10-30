import { useRef } from "react";
import DefButton from "../UI/DefButton";

function NMForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const rateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const rate = rateInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const meetupData = {
      Title: title,
      Image: image,
      Address: address,
      Rate: rate,
      Description: description,
    };
    props.onAdd(meetupData);
  }
  return (
    <div
      className="border-2 border-violet-600 rounded-2xl w-8/12 drop-shadow-2xl m-auto mt-20 overflow-y-auto
    text-2xl max-h-screen "
    >
      <form
        className=" dark:bg-slate-950 text-black dark:text-white bg-white p-10 rounded-t-xl grid md:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            className="focus:p-4 dark:bg-slate-950 border-2 rounded-lg border-violet-600"
            type="text"
            name="title"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="image">Image</label>
          <input
            className=" dark:bg-slate-950 border-2 rounded-lg border-violet-600"
            type="url"
            name="Image"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="Address">Address</label>
          <input
            className=" dark:bg-slate-950 border-2 rounded-lg border-violet-600"
            type="text"
            required
            id="Address"
            ref={addressInputRef}
          />
        </div>

        <div className="flex flex-col space-y-2 ">
          <label htmlFor="Rate">Rating</label>
          <input
            className=" dark:bg-slate-950 border-2 rounded-lg border-violet-600"
            type="text"
            required
            id="Rate"
            ref={rateInputRef}
          />
        </div>
        <div className="flex flex-col space-y-2  md:col-span-2">
          <label className="" htmlFor="Description">
            Desctiption
          </label>
          <textarea
            className=" dark:bg-slate-950 border-2 rounded-lg border-violet-600"
            required
            id="Description"
            rows={5}
            ref={descriptionInputRef}
          />
        </div>
        <div className="md:col-span-2">
          <DefButton
            text="Add Meetup"
            className=" border-b-2 border-violet-700 px-0 mx-auto w-1/4"
          />
        </div>
      </form>
    </div>
  );
}

export default NMForm;
