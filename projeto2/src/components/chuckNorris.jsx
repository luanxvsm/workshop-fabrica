import { useEffect, useState } from "react";

function ChuckNorris() {
  const [norris, setNorris] = useState("Chuck Norris Facts");

  useEffect(() => {
    getNorris();
  }, []);

  const getNorris = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setNorris(data.value);
  };

  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="norris">{norris}</p>
      <button type="button" className="btn" onClick={getNorris}>
        Get Another Fact
      </button>
    </div>
  );
}

export default ChuckNorris;