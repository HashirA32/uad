import React from 'react';


function App() {
  const feedbacks = [
    {
      name: "Guy Hawkins",
      feedback: "At Present, There Are Five Departments Within The Faculty: Department Of Geography And Environment."
    },
    {
      name: "Wade Warren",
      feedback: "At Present, There Are Five Departments Within The Faculty: Department Of Geography And Environment."
    },
    {
      name: "Guy Hawkins",
      feedback: "At Present, There Are Five Departments Within The Faculty: Department Of Geography And Environment."
    },
  ];

  return (
    <div className="App">
      <div className="feedback-container">
        <h1>Students Feedback</h1>
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
