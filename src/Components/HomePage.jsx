// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import messagesData from '../data/messages.json'; // Import the JSON file

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const fallbackMessage = (enteredName) =>
    `Dear ${enteredName},
With hearts overflowing with love and gratitude, we invite you to be part of the most special moments of our lives. As much as we are excited to embark on this new phase of our lives, we would be more fulfilled and our day more memorable with you gracing us with you presence. We invite you to share in our joy and milestone. \n
Your presence would be the greatest gift as we come together to celebrate not just our union, but the friendships, laughter, and love that make life truly meaningful.

We hope you will join us for a day filled with love, joy, and cherished memories.!
  
  
  
  
`;

  useEffect(() => {
    // Optional: Preload messages into memory if needed
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = name.trim();

    if (!enteredName) {
      alert('Please enter your first name.');
      return;
    }

    // Retrieve the personalized message from the JSON file
    const selectedMessage = messagesData[enteredName] || fallbackMessage(enteredName);
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
        <h1>🎉 We have a message to share 🎉</h1>
        <p>We're getting married on May 3rd, and we'd love for you to join us!</p>

        {/* Name Input Form */}
        <form onSubmit={handleNameSubmit}>
          <label>
            <div className='first-name'>
            Enter your first name:
              </div> 
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