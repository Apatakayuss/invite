import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import messagesData from '../data/messages.json';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const fallbackMessage = (enteredName) =>
    `Dear ${enteredName},

With immense joy and gratitude, we wholeheartedly invite you to share in our truly special moment as we begin this new chapter. Your presence would be a cherished blessing, and we're praying that Allah guides your steps to join us. We can't wait to celebrate the love, joy, and friendships that make life beautiful with you. ❤️

We look forward to seeing you and making unforgettable memories together.

With love and prayers,
TheBrain'25 ❤️
`;

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = name.trim();

    if (!enteredName) {
      alert('Please enter your first name.');
      return;
    }

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

    const emailParams = {
      to_name: name,
      to_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_y6o5cfq', 
        'template_1gf6ff4', 
        emailParams, 
        'ts1AVmGdpwZ0Dlcvl' 
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
        <h1>🎉 TheBrain's 2025 🎉</h1>
        <p>This has been a beautiful journey in the making, and we’re overjoyed to finally share this special moment with you because you're so special to us.

Grab a seat and hold your heart because Adam & Ganiyat are stepping out of life’s kitchen to serve a love story that’s been simmering with warmth, laughter, joy and deep connection.

We’re getting married, and we can’t wait for you to witness the next chapter of our forever. 💍❤️</p>

        <form onSubmit={handleNameSubmit}>
          <label>
            <div className='first-name'>Enter your first name:</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your first name"
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {showMessage && (
          <div className="message-box">
            {message.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}

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

        {showMessage && (
          <p>
            <a href='https://withjoy.com/GaniyatandAdam'>
              View Our Wedding Website
            </a>
          </p> 


        // <p>
        //    <Link to="/journey" className="view-journey-link">
        //      View Our Journey
        //    </Link>
        //  </p>

        
        )}
      </header>
    </div>
  );
};

export default HomePage;
