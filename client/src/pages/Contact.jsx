import { useState } from "react";
import regexEmailChecker from "../assets/regexEmailChecker";

const textareaStyle = {
  minHeight: "200px",
  minWidth: "300px",
  resize: "vertical",
  overflowY: "auto",
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  // savedContact is used to store the submitted contact form data and can be sent to a database or API
  const [savedContact, setSavedContact] = useState([]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const validateField = (e) => {
    // further validation logic can be added here
    const { name, value } = e.target;
    if (name === "name" && value.length < 3) {
      alert("Name must be at least 3 characters long");
      return false;
    } else if (name === "email" && !value.includes("@")) {
      alert("Email must contain an @ symbol");
      return false;
    } else if (name === "message" && value.length < 10) {
      alert("Message must be at least 10 characters long");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1) Validate
    const isValid = regexEmailChecker.isValidEmail(contact.email);
    if (!isValid) {
      alert("Please enter a valid email address");
      return;
    }

    // 2) Prepare FormData
    const formData = new FormData(e.target);

    try {
      // 3) POST to Formspree
      const response = await fetch("https://formspree.io/f/mzzdadok", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Formspree error: ${response.statusText}`);
      }

      // 4) On success -> show success state
      setIsSubmitted(true);
      setSavedContact(contact);
      setContact({ name: "", email: "", message: "" });
      alert("Thanks! Your message has been sent.");
    } catch (error) {
      alert("Oops! There was an error submitting the form.");
      console.error(error);
    }
  };

  return (
    <div className="alignment-class h-100 flex flex-col bg-sky-100">
      <h1 className="text-4xl font-bold tracking-widest mr-auto text-sky-950">
        Contact
      </h1>
      <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
        <p className="flex flex-row gap-4 justify-start items-center">
          <span>
            Fill in the contact form below to get in touch with me. Thanks!
          </span>
        </p>
      </section>
      <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl caret-sky-950"
            onBlur={validateField}
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter your name here"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl caret-sky-500"
            onBlur={validateField}
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Enter your email here"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            onBlur={validateField}
            style={textareaStyle}
            className="border-2 border-slate-500 p-4 rounded-xl shadow-xl caret-sky-500"
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
            placeholder="Enter your message here"
            required
          />
          <button
            type="submit"
            className="bg-sky-950 text-white font-bold p-4 rounded-xl"
          >
            Submit
          </button>
        </form>
      </section>
      {isSubmitted && (
        <section className="border-2 border-slate-500 p-4 rounded-xl w-full lg:w-3/4 bg-white shadow-xl">
          <p className="">
            Thanks for reaching out to me {savedContact.name}, your message has
            been submitted. I will get back to you ASAP at {savedContact.email}!
          </p>
        </section>
      )}
    </div>
  );
};
export default Contact;
