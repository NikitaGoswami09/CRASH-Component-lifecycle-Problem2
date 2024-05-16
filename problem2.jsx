import React, { useState, useEffect } from 'react';

const App = () => {
  // State for the timer
  const [seconds, setSeconds] = useState(0);
  // State for the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect for the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // useEffect for the scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>React useEffect Cleanup Demo</h1>

      <section>
        <h2>Timer</h2>
        <p>Seconds elapsed: {seconds}</p>
      </section>

      <section>
        <h2>Scroll Position</h2>
        <p>Scroll position: {scrollPosition}px</p>
      </section>
    </div>
  );
};

export default App;
