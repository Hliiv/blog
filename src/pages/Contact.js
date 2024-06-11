import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h2>
      If you'd like to work with me or you have a question or comment,
       you can contact me using the form below.
      </h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}