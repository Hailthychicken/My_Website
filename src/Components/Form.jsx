import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    let typedMessage = [name, subject, email, message];
    const emailRegex = /^\S+@\S+\.\S+$/;
    for (const x in typedMessage) {
      if (typedMessage[x] === "") {
        alert("Please fill in all fields");
        return;
      }
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    } else {
      let formData = {
        name,
        subject,
        email,
        message,
      };

      emailjs
        .send("service_0ejpmhd", "template_4nogxk9", formData, {
          publicKey: "BpT2NUDTF-y3EfEHM",
        })
        .then((response) => {
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });

      setName("");
      setSubject("");
      setEmail("");
      setMessage("");
    }
  }
  return (
    <div className="w-full h-full  justify-center">
      <form
        action=""
        method="post"
        className="flex justify-evenly flex-col h-[90%] p-8 "
      >
        <label className="h-[10%] " htmlFor="name">
          Name
        </label>
        <input
          className="h-[15%] border-2 border-blue-200 mb-4"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          placeholder="Dave Batista?"
          required
        />
        <label className="h-[10%]" htmlFor="subject">
          Subject
        </label>
        <input
          className="h-[15%] border-2 border-blue-200 mb-4"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          name="subject"
          placeholder="Subject"
          required
        />
        <label className="h-[10%]" htmlFor="email">
          Email
        </label>
        <input
          className="h-[15%] border-2 border-blue-200 mb-4"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="johncena@mail.com"
          required
        />
        <label className="h-[10%]" htmlFor="message">
          Message
        </label>
        <textarea
          className="h-[50%] border-2 border-blue-200 mb-4"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          placeholder="Write a messge"
          required
        ></textarea>
        <button
          className="bg-blue-500 p-2 rounded w-[10vw] border-2 border-blue-500 cursor-pointer active:bg-blue-600 hover:bg-blue-400"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
