import React, { useState } from "react";

export default function Contact() {
  // Setting default state to empty strings
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputErrors, setInputErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    let hasError = false;
    const updatedInputErrors = {};
    Object.entries(inputValues).forEach(([key, value]) => {
      if (value.trim() === "") {
        updatedInputErrors[key] = "You need to fill out this field.";
        hasError = true;
      } else {
        updatedInputErrors[key] = "";
      }
    });

    // Display error messages if any field is empty
    setInputErrors(updatedInputErrors);

    if (!hasError) {
      // If no error, proceed with form submission
      alert("Form submitted successfully!");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value
    setInputValues((prevState) => ({
      // Spread operator to copy the previous state
      ...prevState,
      // Update the field with the new value
      [name]: value,
    }));

    // Checking if the input feiled is empty or invalid
    if (value.trim() === "") {
      setInputErrors((prevState) => ({
        ...prevState,
        [name]: "You need to fill out this field.",
      }));
    } else if (name === "email") {
      if (!validateEmail(value)) {
        setInputErrors((prevState) => ({
          ...prevState,
          [name]: "Please enter a valid email address.",
        }));
      } else {
        setInputErrors((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      }
    } else {
      setInputErrors((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="contact-header">Contact Me</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleInputChange}
            required
          />
          {/* if there is no name entered after user clicks away from the ox then it will throw an error on screen */}
          {inputErrors.name && <p>{inputErrors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleInputChange}
            required
          />
          {/* if there is no email entered after user clicks away from the ox then it will throw an error on screen */}
          {inputErrors.email && <p>{inputErrors.email}</p>}
          <textarea
            name="message"
            placeholder="Message"
            onBlur={handleInputChange}
            required
          ></textarea>
          {/* if there is no message entered after user clicks away from the ox then it will throw an error on screen */}
          {inputErrors.message && <p>{inputErrors.message}</p>}
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
