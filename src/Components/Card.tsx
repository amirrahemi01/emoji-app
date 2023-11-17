import React, { useEffect, useState } from 'react'
import { Emoji } from '../App'

import popUpSound from '../Assets/sound.mp3'
import axios from 'axios';
import OnePixel from '../Assets/1x1.png'


type Props = Emoji;

export default function Card({ symbol, keywords, title }: Props) {

  // copy emoji to clipboard
  const [isCopied, setIsCopied] = useState(false);
  const popUp = new Audio(popUpSound);
  popUp.volume = 0.5;

  const [active, setActive] = useState(true);

  function copyEmoji(e: string) {
    popUp.play();

    return navigator.clipboard.writeText(e)
      .then(() => {
        // If successful, update the isCopied state value
        setActive(true);
        setIsCopied(true);

        setTimeout(() => {
          setActive(false);
          // setIsCopied(false);

        }, 1500);

        setTimeout(() => {
          // setActive(false);
          setIsCopied(false);

        }, 1950);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  // check emoji exist in cdn server

  type CheckImageArgs = {
    imageSrc: string;
    good: () => void;
    bad: () => void;
  };

  async function CheckImage(path: string): Promise<boolean> {
    try {
      await axios.get(path);
      return true;
    } catch {
      return false;
    }
  }

  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    CheckImage(`https://emojicdn.elk.sh/${symbol}`).then(setImageExists);
  }, []);


  return (
    <>
      <div className='card-container'
        onClick={() => copyEmoji(symbol)}
      >
        {/* <p className='symbol'>https://emojicdn.elk.sh/{symbol}</p> */}
        {imageExists ? "" : <p style={{ fontSize: '2.5rem' }}>{symbol}</p>}
        <img
          // src={`https://emojicdn.elk.sh/${symbol}`}
          alt={symbol}

          src={imageExists ? `https://emojicdn.elk.sh/${symbol}` : OnePixel}  onError={(event) => (event.target as HTMLImageElement).style.display = 'none'}
        />
        <h2 className='title'>{title}</h2>
        <p className='keyword'>{keywords}</p>


        <span className="tooltiptext">Click To Copy emoji</span>


        <>
          {isCopied ?
            <div className={`copied-box ${active ? 'active' : 'notactive'}`}>
              <div className='copied-items'>
                {imageExists ? "" : <p style={{ fontSize: '2.5rem' }}>{symbol}</p>}
                <img
                  // src={`https://emojicdn.elk.sh/${symbol}`}
                  alt={symbol}

                  src={imageExists ? `https://emojicdn.elk.sh/${symbol}` : OnePixel}
                  onError={(event) => (event.target as HTMLImageElement).style.display = 'none'}
                />

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
