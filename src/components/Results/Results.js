import React from 'react';
import './Results.css'
import SingleResult from '../SingleResult';

const Results = ({ results }) => {
  return (
    <div className='results-container'>
      <h2>Results</h2>
      {results.map((result) => {
        return (
          <SingleResult result={result}/>
        )
      })}
    </div>
  )
}

export default Results