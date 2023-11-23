import React from 'react'

export default function Card({emojiDetails, clickEmoji}: any) {
    const {id, emojiName, emojiUrl} = emojiDetails;

    const onCLickCard = () => {
        clickEmoji(id);
    }

  return (
    <li className='emoji-item'>
        <button type="button" className='emoji-btn' onClick={onCLickCard}>
            <img className='emoji-icon' src={emojiUrl} alt={emojiName} />
        </button>
    </li>
  )
}