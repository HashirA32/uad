import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [counters, setCounters] = useState([
    { id: 1, label: 'Student', targetNumber: 2759, count: 0 },
    { id: 2, label: 'Teacher', targetNumber: 283, count: 0 },
    { id: 3, label: 'Faculty', targetNumber: 25, count: 0 }
  ]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const duration = 4000;
          const id = parseInt(entry.target.id, 10);
          const counterIndex = counters.findIndex(counter => counter.id === id);
          const targetNumber = counters[counterIndex].targetNumber;
          const increment = Math.ceil(targetNumber / (duration / 10));

          const interval = setInterval(() => {
            setCounters(prevCounters => {
              const updatedCounters = prevCounters.map(counter =>
                counter.id === id
                  ? {
                      ...counter,
                      count: Math.min(counter.count + increment, targetNumber)
                    }
                  : counter
              );

              if (updatedCounters[counterIndex].count >= targetNumber) {
                clearInterval(interval);
              }

              return updatedCounters;
            });
          }, 10);

          observerInstance.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    document.querySelectorAll('.counter-element').forEach(element => observer.current.observe(element));

    return () => {
      observer.current.disconnect();
    };
  }, [counters]);

  return (
    <div className='CounterMain'>
      {counters.map(counter => (
        <div key={counter.id} id={counter.id} className="counter-element Counter">
          <div>{counter.label}: {counter.count}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
