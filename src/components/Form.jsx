import React, { useState } from "react";
import { saveAs } from "file-saver";
import blank from "./image/image.png";

const Form = ({ selectedMeme }) => {
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");

  const [resultMeme, setResultMeme] = useState("");

  const generate = () => {
    fetch(
      `https://api.imgflip.com/caption_image?template_id=${selectedMeme.id}&username=AdityaSinha3&password=new_password&text0=${caption1}&text1=${caption2}`
    )
      .then((res) => res.json())
      .then((data) => setResultMeme(data.data));
  };

  const showToast = () => {
    // Show the toast
    document.getElementById("myToast").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("myToast").classList.add("hidden");
    }, 5000);
  };

  const saveimg = (url) => {
    saveAs(url, "mememaker.jpg");
    setResultMeme("");
    selectedMeme.url = "";
    showToast();
  };
  const back = () => {
    window.location.reload(true);
  };

  return (
    <div className="items-center justify-center">
      <div
        id="myToast"
        class="hidden fixed z-10 top-50 ml-1/2 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg"
      >
        <p class="text-xl font-bold">
          <span class="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">
            i
          </span>
          Image Downloaded Successfully
        </p>
      </div>
      {resultMeme ? (
        <div className="w-[15rem] sm:w-[25rem] lg:w-4/5">
          {resultMeme ? (
            <img
              src={resultMeme.url}
              height={230}
              width={230}
              alt="Choose a template"
              className="mb-2"
            />
          ) : (
            <img
              src={blank}
              height={230}
              width={230}
              alt="Choose a template"
              className="mb-2"
            />
          )}
          <button
            type="button"
            class="text-white bg-gradient-to-br mt-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md p-2 py-2.5 text-center mx-2"
            onClick={() => saveimg(resultMeme.url)}
          >
            SAVE IMAGE
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br mt-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md p-2 py-2.5 text-center mx-2"
            onClick={() => back()}
          >
            BACK
          </button>
        </div>
      ) : (
        <div className="w-[15rem] sm:w-[25rem] lg:w-4/5">
          {selectedMeme ? (
            <img
              src={selectedMeme.url}
              height={230}
              width={230}
              alt="Choose a template"
              className="mb-2"
            />
          ) : (
            <img
              src={blank}
              height={230}
              width={230}
              alt="Choose a template"
              className="mb-2"
            />
          )}

          <label for="text1" className="text-white">
            Enter 1st caption
          </label>

          <input
            type="text"
            name="text1"
            id="text1"
            onChange={(e) => setCaption1(e.target.value)}
            required
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-whiteblock  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
            placeholder=" "
          />

          <label for="text2" className="text-white">
            Enter 2nd Caption
          </label>
          <input
            type="text"
            name="text2"
            id="text2"
            onChange={(e) => setCaption2(e.target.value)}
            required
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-whiteblock  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
            placeholder=" "
          />
          <button
            type="button"
            class="text-white bg-gradient-to-br mt-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md p-2 py-2.5 text-center"
            onClick={() => generate()}
          >
            GENERATE
          </button>
          {/* <button
            type="button"
            class="text-white bg-gradient-to-br mt-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md p-2 py-2.5 text-center mx-2"
            onClick={() => back()}
          >
            BACK
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Form;

// Todo
// 1. Create a save img button - it should also go back on saving ♠♠♠
// 2. Create a back button ♠♠♠
// 3. Style according to yourself
// 4. Show notification
