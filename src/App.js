import { useEffect, useState } from "react";

import Templates from "./components/Templates";

function App() {
  const [memeTemplatesArray, setMemeTemplatesArray] = useState([]);

  async function fetchTemplates() {
    await fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemeTemplatesArray(data.data.memes);

        console.log("fetchinng works");
      });
  }

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div>
      <Templates templates={memeTemplatesArray} />
    </div>
  );
}

export default App;
