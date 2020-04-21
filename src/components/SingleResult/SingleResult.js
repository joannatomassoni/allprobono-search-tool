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
      <div className='name result-item'><a href={result.url} target='_blank' rel='noopener noreferrer'>{result.name}</a></div>
      <div className='desc result-item'>{result.description}</div>
    </div>
  )
}

export default SingleResult