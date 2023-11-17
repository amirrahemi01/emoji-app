import React, { useState } from 'react'
import { Emoji } from '../App'

import popUpSound from '../Assets/popup-effect.mp3'


type Props = Emoji;

export default function Card({ symbol, keywords, title }: Props) {

  // copy emoji to clipboard
  const [isCopied, setIsCopied] = useState(false);
  const popUp = new Audio(popUpSound);
  popUp.volume = 0.5;

  function copyEmoji(e: string) {
    popUp.play();

    return navigator.clipboard.writeText(symbol)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }



  // check emoji exist in cdn server

  return (
    <>
      <div className='card-container'
        // onClick={() => console.log(symbol)}
        onClick={() => copyEmoji(symbol)}
      >
        {/* <p className='symbol'>https://emojicdn.elk.sh/{symbol}</p> */}
        <img src={`https://emojicdn.elk.sh/${symbol}`} />
        <h2 className='title'>{title}</h2>
        <p className='keyword'>{keywords}</p>

        <>
          {isCopied ?
            <div className='copied-box'>
              <div className='copied-items'>
                <img src={`https://emojicdn.elk.sh/${symbol}`} />
                <p>Copied!</p>
              </div>
            </div>
            :
            ''}
        </>
      </div>
    </>
  )
}
