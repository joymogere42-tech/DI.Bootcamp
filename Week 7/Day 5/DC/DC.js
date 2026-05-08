import React, { useState } from "react";

function DC() {

  // =========================
  // STATE (LANGUAGES)
  // =========================

  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // =========================
  // VOTE FUNCTION
  // =========================

  const vote = (index) => {
    const updated = [...languages];
    updated[index].votes += 1;
    setLanguages(updated);
  };

  // =========================
  // UI
  // =========================

  return (
    <div style={containerStyle}>

      <h1>React Voting App</h1>

      {languages.map((lang, index) => (
        <div key={index} style={cardStyle}>

          {/* VOTES */}
          <div style={voteStyle}>
            {lang.votes}
          </div>

          {/* NAME */}
          <div style={nameStyle}>
            <h2>{lang.name}</h2>
          </div>

          {/* BUTTON */}
          <button
            style={buttonStyle}
            onClick={() => vote(index)}
          >
            Vote
          </button>

        </div>
      ))}

    </div>
  );
}

// =========================
// STYLES
// =========================

const containerStyle = {
  width: "400px",
  margin: "50px auto",
  fontFamily: "Arial",
  textAlign: "center"
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#f4f4f4",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "10px"
};

const voteStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  width: "50px"
};

const nameStyle = {
  flex: 1
};

const buttonStyle = {
  backgroundColor: "#ff9800",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default DC;