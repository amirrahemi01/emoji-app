import React from 'react'
import { Emoji } from '../App'


type Props = Emoji;

export default function Card({ symbol, keywords, title }: Props) {
  // copy emoji to clipboard

  // check emoji exist in cdn server
  
  return (
    <>
      <div className='card-container'
        onClick={() => console.log(symbol)}
      >
        {/* <p className='symbol'>https://emojicdn.elk.sh/{symbol}</p> */}
        <img src={`https://emojicdn.elk.sh/${symbol}`} />
        <h2 className='title'>{title}</h2>
        <p className='keyword'>{keywords}</p>
      </div>
    </>
  )
}
