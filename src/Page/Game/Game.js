import React from 'react';
import EmojiGame from '../../Components/Game/Game';
import useLoader from '../../Hooks/Search/useLoader';
import Loader from '../../Components/Search/Loader';
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