import React, { useState } from "react";

function Form2() {
  const [username, setUsername] = useState("");

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitUsernameHandler = (e) => {
    e.preventDefault();
    alert(`You have submitted ${username}`);
  };

  return (
    <>
      <form onSubmit={submitUsernameHandler}>
        <div>
          <label>Username</label>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={changeUsernameHandler}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form2;
