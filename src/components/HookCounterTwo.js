import React, { useEffect, useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
    </>
  );
}

export default HookCounterTwo;
