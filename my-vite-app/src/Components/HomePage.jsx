// src/components/HomePage.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import './HomePage.css'; 

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
    setShowMessage(true);
    setShowEmailForm(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        'service_y6o5cfq', // Replace with your EmailJS service ID
        'template_1gf6ff4', // Replace with your EmailJS template ID
        { to_name: name, to_email: email, message }, // Email parameters
        'ts1AVmGdpwZ0Dlcvl' // Replace with your EmailJS public key
      )
      .then(() => {
        alert(`Invitation sent to ${email}!`);
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send invitation. Please try again later.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 You're Invited! 🎉</h1>
        <p>We're getting married on May 3rd, and we'd love for you to join us!</p>

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
          <form onSubmit={handleEmailSubmit}>
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
      </header>
    </div>
  );
};

export default HomePage;