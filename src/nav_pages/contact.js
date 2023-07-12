import { useState } from "react";

let msg = [];

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayName, setDisplayName] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [displayMsg, setDisplayMsg] = useState(false);

  console.log(name, "name");
  console.log(email, "email");
  console.log(message, "message");

  const submitEverything = () => {
    if (!message) setDisplayMsg(true);
    if (!email) setDisplayEmail(true);
    if (!name) setDisplayName(true);
    if ((message, email, name)) {
      msg.push([name, email, message]);
    }
  };
  return (
    <>
      <h1>contact me</h1>
      Name: <input onChange={(e) => setName(e.target.value)}></input>
      {displayName && <div>please type something for message</div>}
      <br />
      email: <input onChange={(e) => setEmail(e.target.value)}></input>
      {displayEmail && <div>please type something for email</div>}
      <br />
      messages: <input onChange={(e) => setMessage(e.target.value)}></input>
      {displayMsg && <div>please type something for message</div>}
      <br />
      <button onClick={() => submitEverything()}>Submit</button>
    </>
  );
}

export default Contacts;
