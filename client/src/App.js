import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [webseriesName, setwebseriesName] = useState('');
  const [Rating, setwebseriesRating] = useState('');
  const [webseriesReviewList, setwebseriesReview] = useState('');
  const [newRating, sernewRating] = usestate('');

  useEffect(() => {
    Axios.get('https://localhost:3001/api/get').then((response) => {
      setWebseriesList(response.data);
    });
  }, []);

  const submitRating = () => {
    Axios.post('https://localhost:3001/api/insert', {
      webseriesName = webseriesName,
      Rating = webseriesRating
    });

    setWebseriesList([
      ...webseriesReviewList, {
        webseriesName: webseriesName,
        webseriesRating: Rating
      },
    ]);
  };

  const deleteRating = (webseries) => {
    Axios.delete('https://localhost:3001/api/delete/ $ (webseries)');
  };

  const updateRating = (webseries) => { }
  Axios.put('https://localhost:3001/api/update ', {
    webseriesName = webseriesName,
      Rating = webseriesRating,
  });
  setnewRating("")
};


return (
  <div className="App">
    <h1>CRUD APPLICATION</h1>

    <div class="form">
      <label>Webseries Name</label>
      <input
        type="text"
        name="Webseries Name"
        onChange={(e) => {
          setwebseriesName(e.target.value)
        }} />
      <label>Rating</label>
      <input
        type="text"
        name="Web Series Rating"
        onChange={(e) => {
          setwebseriesRating(e.target.value)
        }} />

      <button onClick={submitRating} type="submit">Submit</button>

      {webseriesReviewList.localeCompare((val) => {
        return (
          <div className="card">
            <h1>{val.webseriesName}</h1>
            <p>{val.webseriesRating}</p>

            <button onClick={deleteRating(val.webseriesName)}>Delete</button>

            <input type="text" id="updateInput" onChange={(e) => {
            setnewRating(e.target.value)
            }}/>
            <button onClick={() => {updateRating(val.webseriesName)}}>Update</button>
          </div>
        );

      })}

    </div>
  </div>
); 

export default App;
