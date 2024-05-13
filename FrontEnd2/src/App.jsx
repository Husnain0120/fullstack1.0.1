import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/joke')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Added empty dependency array to useEffect to run once on component mount

  // Function to handle joke deletion
  const handleDelete = (id) => {
    axios.delete(`/api/joke/${id}`)
      .then((res) => {
        // Remove the deleted joke from the state
        setJokes(jokes.filter(joke => joke.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center mb-4">Backend Now</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              
              <td>{<h5>{joke.tittle}</h5>}</td>
              <td>{joke.content}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(joke.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
