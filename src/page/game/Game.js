import React from 'react';
import EmojiGame from '../../components/game/Game';
import useLoader from '../../hooks/search/useLoader';
import Loader from '../../components/search/Loader';
import emojiData from './data.json'

function Game() {
  const loading = useLoader();

  return (
    <div>
      {loading && <Loader />}
      <EmojiGame emojiList={emojiData} />
    </div>
  )
}

export default Game