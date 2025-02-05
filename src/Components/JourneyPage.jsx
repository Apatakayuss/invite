// src/components/JourneyPage.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
// import './JourneyPage.css'; // Import custom styles

// Import local images
import Azeez from '../assets/azeez.jpeg';
// import firstDate from '../assets/images/first-date.jpg';
// import engagement from '../assets/images/engagement.jpg';
// import planningFuture from '../assets/images/planning-future.jpg';

const JourneyPage = () => {
  const timelineItems = [
    {
      title: "How We Met",
      description:
        "It all started on a sunny afternoon when we bumped into each other at a coffee shop. Love was in the air!",
      image: Azeez,
    },
    {
      title: "First Date",
      description:
        "Our first date was unforgettable. We went to a cozy Italian restaurant and laughed the night away.",
      image: Azeez,
    },
    {
      title: "First Date",
      description:
        "Our first date was unforgettable. We went to a cozy Italian restaurant and laughed the night away.",
      image: Azeez,
    },
    {
      title: "First Date",
      description:
        "Our first date was unforgettable. We went to a cozy Italian restaurant and laughed the night away.",
      image: Azeez,
    },
  ];

  return (
    <div className="JourneyPage">
      <header className="JourneyPage-header">
        <h1>🌟 Our Journey Together 🌟</h1>
        <p>This is the story of how we met, fell in love, and decided to spend the rest of our lives together.</p>
      </header>

      {/* Timeline Section */}
      <section className="timeline">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt={item.title} className="timeline-image" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};


export default JourneyPage;