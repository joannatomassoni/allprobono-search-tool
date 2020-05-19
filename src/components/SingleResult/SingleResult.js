import React from 'react'
import './SingleResult.css'

const SingleResult = ({ result }) => {
  let rowClass;
  if (result.id % 2 === 0) {
    rowClass = 'even'
  } else {
    rowClass = 'odd'
  }

  rowClass = rowClass + ' result-container'
  return (
    <div className={rowClass}>
      <a href={result.url} target='_blank' rel='noopener noreferrer'>
      <div className='name result-item'>{result.name}</div>
      <div className='desc result-item'>{result.description}</div>
      </a>
    </div>
  )
}

export default SingleResult