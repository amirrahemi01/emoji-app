import React from 'react'
import { Emoji } from '../../App'
import FooterNavigation from './FooterNavigation';

type Props = {
  pageChoose: (pageNumber: number) => void;
  emojiPerPage: number,
  allEmoji: Emoji[],
  selectPerPage: (perPage: number) => void;
  currentPage: number;
}

export default function Footer({
  pageChoose,
  emojiPerPage,
  allEmoji,
  selectPerPage,
  currentPage,
}: Props) {

  const maxIndex = Math.ceil(allEmoji.length / emojiPerPage);

  let startPage = 0;
  let endPage = 0;

  if (currentPage === 1 || currentPage === 2) {
    startPage = 0;
    endPage = 5;
  } else if (
    currentPage === maxIndex ||
    currentPage === maxIndex - 1 ||
    currentPage === maxIndex - 2
  ) {
    startPage = maxIndex - 5;
    endPage = maxIndex;
  } else if (currentPage > 2) {
    startPage = currentPage - 3;
    endPage = currentPage + 2;
  }

  return (
    <footer className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-nav'>
          <FooterNavigation
            maxIndex={maxIndex}
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            pageChoose={pageChoose}
            emojiPerPage={emojiPerPage}
            allEmoji={allEmoji}
            selectPerPage={selectPerPage}
          />
        </div>
      </div>
    </footer>
  )
}
