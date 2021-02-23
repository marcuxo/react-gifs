import React from 'react'

function Gif({title,id,url}) {
  return (
      <div key={id}>
        <label>{title}</label>
        <img src={url} 
          className="imgifs" 
        />
      </div>
  )
}

export default Gif
