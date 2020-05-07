import React from 'react';
import './Results.css'
import SingleResult from '../SingleResult';

const Results = ({ results }) => {
  if (results.length) {
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
  else {
    return (
      <div className='results-container'>
      <h2>Results</h2>
      <p>Sorry, there don't appear to have any organizations that meet your needs at this time.</p>
    </div>
    )
  }
}

export default Results