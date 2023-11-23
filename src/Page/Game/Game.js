import React from 'react';
import EmojiGame from '../../Components/Game/Game';
import Toggle from '../../Components/Toggle/Toggle';

const emojiList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://emojicdn.elk.sh/😂',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://emojicdn.elk.sh/❤️',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://emojicdn.elk.sh/👽',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://emojicdn.elk.sh/🧲',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://emojicdn.elk.sh/🌵',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://emojicdn.elk.sh/⚡',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://emojicdn.elk.sh/💔',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://emojicdn.elk.sh/🔞',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://emojicdn.elk.sh/🐢',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://emojicdn.elk.sh/🐣',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://emojicdn.elk.sh/😊',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://emojicdn.elk.sh/💣',
  },
  // {
  //   id: 12,
  //   emojiName: 'Grinning face with sweat',
  //   emojiUrl:
  //     'https://emojicdn.elk.sh/🐢',
  // },
  // {
  //   id: 13,
  //   emojiName: 'Smiling face with heart eyes',
  //   emojiUrl:
  //     'https://emojicdn.elk.sh/🐣',
  // },
  // {
  //   id: 14,
  //   emojiName: 'Grinning face',
  //   emojiUrl: 'https://emojicdn.elk.sh/😊',
  // },
  // {
  //   id: 15,
  //   emojiName: 'Smiling face with star eyes',
  //   emojiUrl:
  //     'https://emojicdn.elk.sh/💣',
  // },
]

function Game() {
  return (
    <div>
      <EmojiGame emojiList={emojiList} />
    </div>
  )
}

export default Game