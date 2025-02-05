// src/components/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const personalizedMessages = {
    John: "Dear John, we are thrilled to have you at our special day!",
    Jane: "Dear Jane, your presence will make our wedding even more memorable!",
    Alex: "Dear Alex, we can't wait to celebrate with you!",
    Sarah: "Dear Sarah, thank you for being part of this joyous occasion!",
  };

  const fallbackMessage = (enteredName) =>
    `Dear ${enteredName}, we are excited to share our special day with you!`;

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = name.trim();

    if (!enteredName) {
      alert('Please enter your first name.');
      return;
    }

    const selectedMessage = personalizedMessages[enteredName] || fallbackMessage(enteredName);
    setMessage(selectedMessage);
    setShowMessage(true); // Show the message and enable the "View Our Journey" link
    setShowEmailForm(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    sendEmailInvite(email);
    alert(`Invitation sent to ${email}!`);
    setEmail('');
  };

  const sendEmailInvite = (recipientEmail) => {
    console.log(`Simulating email sent to: ${recipientEmail}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 Hello there! 🎉</h1>
        <p>I have a very important message to share</p>

        {/* Name Input Form */}
        <form onSubmit={handleNameSubmit}>
          <label>
            Enter your first name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your first name"
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {/* Display Personalized Message */}
        {showMessage && (
          <div className="message-box">
            <p>{message}</p>
          </div>
        )}

        {/* Email Invitation Form */}
        {showEmailForm && (
          <form className='invite' onSubmit={handleEmailSubmit}>
            <label>
              Enter your email to receive an invitation:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </label>
            <button type="submit">Send Invitation</button>
          </form>
        )}

        {/* Conditionally Render "View Our Journey" Link */}
        {showMessage && (
          <p>
            <Link to="/journey" className="view-journey-link">
              View Our Journey
            </Link>
          </p>
        )}
      </header>
    </div>
  );
};

export default HomePage;