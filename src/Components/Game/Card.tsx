import React from 'react'

import click from '../../Assets/click.wav'

export default function Card({ emojiDetails, clickEmoji }: any) {
  const { id, emojiName, emojiUrl } = emojiDetails;

  const onCLickCard = () => {
    clickEmoji(id);

    const popUp = new Audio(click);
    popUp.volume = 0.5;
    popUp.play();
  }

  return (
    <li className='emoji-item'>
      <button type="button" className='emoji-btn' onClick={onCLickCard}>
        <img className='emoji-icon' src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}