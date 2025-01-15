"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ModalComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    desc: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("clicked");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-2  border border-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="subject"
        name="subject"
        placeholder="Subject"
        required
        value={formData.subject}
        onChange={handleInputChange}
        className="w-full px-4 py-2  border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="desc"
        placeholder="Enter Description"
        required
        value={formData.desc}
        onChange={handleInputChange}
        className="w-full px-4 py-2  border border-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="w-full">
        <ReCAPTCHA size="normal" sitekey="Your client site key" />
      </div>

      <button className="border px-4 py-2 bg-blue-800 float-right  shadow-md font-semibold rounded-md transition-all duration-500 ease-in-out hover:bg-blue-900 hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default ModalComponent;
