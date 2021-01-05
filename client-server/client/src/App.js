import './App.css';
import React, { useState, useEffect} from "react"; 
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieReviewList, setMovieList] = useState([])
  
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', 
    {movieName: movieName, movieReview: review,
    }).then((result)=> {
      alert("Successful insert");
    });
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)
        }}></input>
        <label>Review</label>
        <input type="text" name="review" onChange={(e) => {
          setReview(e.target.value)
        }}></input>
        <button onClick={submitReview}>Submit</button>
        {movieReviewList.map((val)=> {
          return <h1>MovieName: {val.movieName} | Movie Review: {val.movieReview}</h1>
        })}
      </div>
    
    </div>

  );
}

export default App;
