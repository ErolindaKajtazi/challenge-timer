import { useState , useRef} from "react";

export default function Player() {
  const playerName = useRef();

  const [enterdPlayerName, setEnterdPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnterdPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enterdPlayerName : "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onChange={handleChange}
          value={enterdPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
