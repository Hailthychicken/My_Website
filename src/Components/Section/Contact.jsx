import React from "react";
import Form from "../Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="  w-[100%] flex items-center justify-center mt-10 mb-10"
    >
      <div className="w-[90vw] h-full border border-gray-300 rounded-lg ">
        <div className="h-[10] w-full flex item-center justify-center">
          <h1 className="text-[3vw] font-bold ">Contact me</h1>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
