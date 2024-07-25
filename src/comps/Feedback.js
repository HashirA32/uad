import React,{useEffect} from 'react';


function App() {
  const feedbacks = [
    {
      name: "Farhan Ahmad",
      feedback: "Great professors, but campus facilities need improvement."
    },
    {
      name: "Ehsan Baloach",
      feedback: "Disappointing resources and poor communication from admin."
    },
    {
      name: "Alina Ali",
      feedback: "Great community, but the registration process is a hassle."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const sections = document.querySelectorAll('.App');

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className="App">
      <div className="feedback-container">
        <h1>Students <br />Feedback</h1>
        <div className="feedback-grid">
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback-card">
              <p>{item.feedback}</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
