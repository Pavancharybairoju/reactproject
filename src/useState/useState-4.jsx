import React, { useState } from "react";

function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function changeName(e) {
  //   setName(e.target.value);
  // }

  // function changeEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function changePassword(e) {
  //   setPassword(e.target.value);
  // }

  // const handleInputChange = (e, names) => {
  //   console.log(e.target.value);
  //   if (names === "name") {
  //     setName(e.target.value);
  //   } else if (names === "email") {
  //     setEmail(e.target.value);
  //   } else if (names === "password") {
  //     setPassword(e.target.value);
  //   }
  // };

  function handleSubmit(e) {
    e.preventDefault();
    let userObj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userObj);
  }
  return (
    <div>
      <form>
        <div className="form-content">
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Index;
