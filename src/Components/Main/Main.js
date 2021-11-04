import React, { useEffect, useState } from "react";

function Main() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/recommendations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <section>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1> <h2>({movie.rating}/10)</h2>
            <img src={movie.imageURL} alt="obrazek tytułowy"/>
            <div>
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Main;
