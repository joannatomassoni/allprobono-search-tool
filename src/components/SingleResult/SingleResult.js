import React from 'react'
import './SingleResult.css'

const SingleResult = ({ result }) => {
  return (
    <div className='result-container'>
      <div className='name result-item'><a href={result.url} target='_blank' rel='noopener noreferrer'>{result.name}</a></div>
      <div className='desc result-item'>{result.description}</div>
    </div>
  )
}

export default SingleResult