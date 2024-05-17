import { useState , useRef} from "react";

export default function Player() {
  const playerName = useRef();

  const [enterdPlayerName, setEnterdPlayerName] = useState("");

  function handleClick() {
    setEnterdPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
