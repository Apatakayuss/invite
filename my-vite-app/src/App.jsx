import React, { useState } from 'react';
import './App.css'; // Ensure the correct relative path

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Personalized messages for specific names
  const personalizedMessages = {
    John: "Dear John, we are thrilled to have you at our special day!",
    Jane: "Dear Jane, your presence will make our wedding even more memorable!",
    Alex: "Dear Alex, we can't wait to celebrate with you!",
    Sarah: "Dear Sarah, thank you for being part of this joyous occasion!",
  };

  // Fallback message template for names not in the list
  const fallbackMessage = (enteredName) =>
    `Dear ${enteredName}, we are excited to share our special day with you!`;

  // Handle name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = name.trim();

    if (!enteredName) {
      alert('Please enter your first name.');
      return;
    }

    // Check if the name has a recorded message
    const selectedMessage = personalizedMessages[enteredName] || fallbackMessage(enteredName);

    // Set the personalized or fallback message
    setMessage(selectedMessage);
    setShowMessage(true);
    setShowEmailForm(true); // Show the email form after displaying the message
  };

  // Handle email submission
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

  // Simulate sending an email invite
  const sendEmailInvite = (recipientEmail) => {
    console.log(`Simulating email sent to: ${recipientEmail}`);
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

        {/* Email Invitation Form (Only shown after the message is displayed) */}
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
}

export default App;