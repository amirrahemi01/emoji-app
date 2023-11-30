import React from 'react'
import { Emoji } from '../../App'
import Card from './Card';

type Props = {
  emojiList: Emoji[];
}

export default function Main({ emojiList }: Props) {
  return (

    <ul className='emoji-list-container'>
      {emojiList.map((e) => (
        <Card {...e} key={e.title} />
      ))}
    </ul>
  )
}