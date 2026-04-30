const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ========= DATA ========= */
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐱", name: "Cat" }
];

let score = 0;
let leaderboard = [];

/* ========= HELPER ========= */
function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  let options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  // shuffle options
  options.sort(() => Math.random() - 0.5);

  return { emoji: correct.emoji, correctAnswer: correct.name, options };
}

let currentQuestion = getRandomQuestion();

/* ========= ROUTES ========= */

// Frontend
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Emoji Game</title>
    </head>
    <body style="font-family:Arial; text-align:center;">
      <h1>🎮 Emoji Guessing Game</h1>
      <h2 style="font-size:60px;">${currentQuestion.emoji}</h2>

      <form id="gameForm">
        ${currentQuestion.options
          .map(
            (opt) => `
          <div>
            <input type="radio" name="answer" value="${opt}" required />
            <label>${opt}</label>
          </div>
        `
          )
          .join("")}

        <br/>
        <button type="submit">Submit</button>
      </form>

      <h3 id="result"></h3>
      <h3>Score: <span id="score">${score}</span></h3>

      <script>
        const form = document.getElementById("gameForm");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();

          const formData = new FormData(form);
          const answer = formData.get("answer");

          const res = await fetch("/guess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answer })
          });

          const data = await res.json();

          document.getElementById("result").innerText = data.message;
          document.getElementById("score").innerText = data.score;

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      </script>
    </body>
    </html>
  `);
});

// Handle guess
app.post("/guess", (req, res) => {
  const { answer } = req.body;

  if (answer === currentQuestion.correctAnswer) {
    score++;
    currentQuestion = getRandomQuestion();
    return res.json({ message: "✅ Correct!", score });
  } else {
    leaderboard.push(score);
    score = 0;
    currentQuestion = getRandomQuestion();
    return res.json({ message: "❌ Wrong! Score reset.", score });
  }
});

// Leaderboard
app.get("/leaderboard", (req, res) => {
  const top = leaderboard.sort((a, b) => b - a).slice(0, 5);
  res.json(top);
});

/* ========= START ========= */
app.listen(PORT, () => {
  console.log(`🚀 Game running at http://localhost:${PORT}`);
});