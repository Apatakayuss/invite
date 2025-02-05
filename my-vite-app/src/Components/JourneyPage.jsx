// src/components/JourneyPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import './JourneyPage.css'; // Import custom styles

// Import local images
import Azeez from '../assets/azeez.jpeg';

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
    {
      title: "First Date",
      description:
        "Our first date was unforgettable. We went to a cozy Italian restaurant and laughed the night away.",
      image: Azeez,
    },
    {
      title: "Engagement",
      description:
        "The moment he got down on one knee was magical. Surrounded by family and friends, we said yes!",
      image: Azeez,
    },
    {
      title: "Planning Our Future",
      description:
        "Now, as we prepare for our wedding, we're excited to start this new chapter together.",
      image: Azeez,
    },
    {
      title: "Our Wedding Day",
      description:
        "This is the day we've been waiting for! Join us as we celebrate our love and commitment.",
      image: Azeez,
      centered: true, // Centered item at the end
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="JourneyPage">
      <header className="JourneyPage-header">
        <h1>🌟 Our Journey Together 🌟</h1>
        <p>This is the story of how we met, fell in love, and decided to spend the rest of our lives together.</p>
      </header>

      {/* Timeline Section */}
      <section className="timeline">
        {/* Timeline Header */}
        <div className="timeline-header">
          <h2>December 2021</h2>
        </div>

        {/* Wrapper for Non-Centered Items (Timeline Line Ends Here) */}
        <div className="timeline-wrapper">
          {timelineItems
            .filter((item) => !item.centered) // Exclude centered items
            .map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Text Side */}
                <div className={`timeline-text-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-text">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`timeline-image-container ${index % 2 === 0 ? 'right' : 'left'}`}>
                  <img src={item.image} alt={item.title} className="timeline-image" />
                </div>
              </div>
            ))}
        </div>

        {/* Centered Item (Outside the Timeline Wrapper) */}
        {timelineItems
          .filter((item) => item.centered) // Include only centered items
          .map((item, index) => (
            <div
              key={index}
              className="timeline-item centered"
              data-aos="fade-up"
              data-aos-delay={timelineItems.length * 100 + index * 100}
            >
              {/* Centered Text */}
              <div className="timeline-text-container centered">
                <div className="timeline-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>

              {/* Centered Image */}
              <div className="timeline-image-container centered">
                <img src={item.image} alt={item.title} className="timeline-image" />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default JourneyPage;