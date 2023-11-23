import React from 'react'
import { Emoji } from '../../App';

type Props = {
  maxIndex: number,
  currentPage: number,
  startPage: number,
  endPage: number,
  emojiPerPage: number;
  allEmoji: Emoji[];
  pageChoose: (PageNumber: number) => void,
  selectPerPage: (perPage: number) => void,
}

export default function FooterNavigation({
  maxIndex,
  currentPage,
  startPage,
  endPage,
  pageChoose,
  selectPerPage,
}: Props) {

  const pageNumbers: number[] = [];
  const selectItems: number[] = [12, 24, 48];

  for (let i = 1; i <= maxIndex; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className='footer-navigation'>
        {currentPage === 1 ? (
          <button
            disabled={true}
            className='button inactive'
            onClick={() => pageChoose(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
        ) : (
          <button
            className='button inactive hover'
            onClick={() => pageChoose(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
        )
        }

        <div className='page-numbers'>
          {pageNumbers.slice(startPage, endPage).map((num) => (
            <button
              className={
                currentPage === num
                  ? 'button hover active'
                  : 'button hover'
              }
              key={num}
              onClick={() => pageChoose(num)}
            >
              {num}
            </button>
          ))}
        </div>

        {currentPage === maxIndex ? (
          <button
            disabled={true}
            className="button inactive"
            onClick={() => pageChoose(pageNumbers.length)}
          >
            Last
          </button>
        ) : (
          <button
            className='button inactive hover'
            onClick={() => pageChoose(pageNumbers.length)}
          >
            Last
          </button>
        )}
      </div>

      <div className='dropdown'>
        <p>Per Page</p>
        <select
          className='select-container'
          onChange={({ target }) => {
            selectPerPage(+target.value);
            pageChoose(1);
          }}
        >
          {selectItems.map((num, index) => (
            <option key={index} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
