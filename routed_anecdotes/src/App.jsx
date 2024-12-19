import { useState } from "react";
import About from "./components/About";
import Menu from "./components/Menu";
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Footer from "./components/Footer";
import Anecdote from "./components/Anecdote";
import Notification from "./components/Notification";
import { Routes, Route, useMatch, Navigate } from "react-router-dom";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState(null);

  const match = useMatch("/anecdotes/:id");
  const matchedAnecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`${anecdote.content}`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      <h1>Software anecdotes</h1>

      <Menu />
      {notification && <Notification message={notification} />}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={
            !notification ? (
              <AnecdoteForm addNew={addNew} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={matchedAnecdote} />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
