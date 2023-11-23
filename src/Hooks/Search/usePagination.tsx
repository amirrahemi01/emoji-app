import React, { useState } from 'react'
import { Emoji } from '../../App'


export default function usePagination(filteredEmoji: Emoji[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const [emojiPerPage, setEmojiPerPage] = useState(12);

  const lastEmojiPageIndex = currentPage * emojiPerPage;
  const firstEmojiPageIndex = lastEmojiPageIndex - emojiPerPage;
  const emojiList = filteredEmoji.slice(
    firstEmojiPageIndex,
    lastEmojiPageIndex,
  );

  return {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    emojiPerPage: emojiPerPage,
    setEmojiPerPage: setEmojiPerPage,
    emojiList: emojiList,
  }
}