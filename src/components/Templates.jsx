import React, { useState } from "react";
import Form from "./Form";
import logo from "./image/logo.png";

const Templates = ({ templates }) => {
  const [selectedMeme, setSelectedMeme] = useState("");

  const selectMeme = (meme) => {
    setSelectedMeme(meme);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-screen bg-slate-900">
      <img width={500} src={logo} alt="meme maker" />
      <div className="flex flex-col lg:flex-row">
        <div className="p-20 w-2/5">
          <Form selectedMeme={selectedMeme} />
        </div>
        <div className="flex justify-center items-center flex-wrap p-12   scrollbar-thumb-rose-500  w-full lg:w-3/5 overflow-scroll h-screen scrollbar-thin">
          {templates
            .filter((meme) => meme.box_count === 2)
            .map((meme) => (
              <div
                key={meme.id}
                className="mx-2 hover:animate-spin"
                onClick={() => selectMeme(meme)}
              >
                <img src={meme.url} height={200} width={200} alt={meme.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
