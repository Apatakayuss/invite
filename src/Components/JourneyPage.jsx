// src/components/JourneyPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import './JourneyPage.css'; // Import custom styles

// Import local images
import Azeez from '../assets/azeez.jpeg';
import First from '../assets/first-text.jpeg'
import Date from '../assets/datee.jpeg'
import Story from '../assets/story.jpeg'
import Family from '../assets/family.jpeg'
import Wed from '../assets/wed.jpeg'
import Together from '../assets/together.jpeg'
import Outside from '../assets/outside.jpeg'
import OUT from '../assets/out.jpeg'
import LOVER from '../assets/lover.jpeg'
import LOVING from '../assets/loving.jpeg'

const JourneyPage = () => {




    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);







  const timelineItems = [
    {
      title: "How We Met",
      description:
        "It all started with a Snapchat text! December 8th 2021, we shared our first text, kicked off as acquintance then proceeded to knowing each other",
      image: First,
    },
    {
      title: "First Date",
      description:
        "Couple of weeks after we shared our first text, we decided to mwwt physically, this meeting gave us he confirmation and assurance we needed. A couple weeks after, we had oour first date then we decided to kick it off from then.",
      image: Date,
    },
    {
      title: "Building",
      description:
        "As time passed, our love deepened, and so did our understanding of what it meant to truly build a life together. It wasn’t just about the grand moments\n We built trust, patience, and a love that stood strong through every test.",
      image: Together,
    },
    {
      id: "presence",
      title: "Presence",
      description:
        "We learned that love isn’t just about finding someone to share the good times with, but having a partner to weather the storms with, knowing that no matter what, we would always have each other..",
      image: Outside,
    },
    {
      title: "Fun Time",
      description:
        "We tried our best to make memories, we engage in fun activities together to strengthen our bond. A little fun won't kill they say",
      image: LOVER,
    },
    {
      title: "Professional Development",
      description:
        "We both are very big on career. While we have different careers, we are invested in each others career and keep helping each other get better at what we do.",
      image: OUT,
    },
    {
      title: "Living",
      description:
        "We did our best to live, to celebrate our milestones and generally revel in the wonders of God in our lives                                                                                                              ",
      image: LOVING,
    },
    {
      title: "Family",
      description:
        "We were always certain we wanted to forever be in each others life, we have been building together ourselves. To add credibility to it fa,ilies met, we shared love, laughter and made plans for the future",
      image: Family,
    },
    {
      title: "Civil Wedding",
      description:
        "Shortly after our families met, we took one of the most of important decision of our lives, we committed to each other by sealing our bond in civil manner",
      image: Wed,
    },
  
    {
      title: "Our Wedding",
      description:
        "Here we are today, looking forward to celebrate this beautiful union with friends and family",
      image: Story,
      centered: true, 
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
                  <img src={item.image} alt={item.title} className="timeline-image" 
                   
                  />
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