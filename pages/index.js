import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>hallo {counter}</h1>
      <button onClick={() => setCounter((add) => add + 1)}>+</button>
      <button onClick={() => setCounter((min) => min - 1)}>-</button>
    </div>
  );
}
