import React, { useState, useEffect } from "react";
// import "../form.css";
import '../../css/logging.css';
import { db } from "../../firebase";

const Suman = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("suman")
      .add({
        name: name,
        email: email,
        date: date,
        time: time,
        message: message,

      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setMessage("");
  };

  return (
    <div className="containerlog">
        <div className="cardlog"></div>

<form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us </h1>

      <label>Name</label>
      <br />
      <input
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        
        placeholder="Email"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>time</label>
      <br />
        <input
        
        placeholder="time"
        type="time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <label>Date</label>
      <br />
      <input
        type="date"
        placeholder="Date"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      

      <label>Message</label>
      <br />
      <textarea
        placeholder="Message"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <button
        type="submit"
        
      >
        Submit
      </button>
    </form>
    </div>

    
  );
};

export default Suman;