import React from 'react'
import Gif from './Gif'
import { useEffect, useState } from 'react';
import GetGifs from '../service/getGifs'

function ListOfGift({params}) {
  //console.log(keyword)
  const keyword = params.keyword
  const [gifs, setGifs] = useState([])

  useEffect(function(){
    GetGifs({keyword}).then(gifs => setGifs(gifs))
  },[keyword])
  return (
  gifs.map(gifAlone =>
        <Gif
          key={gifAlone.id}
          id={gifAlone.id}
          title={gifAlone.title}
          url={gifAlone.url}
        />
        )
  )
}

export default ListOfGift