import { faMagnifyingGlass, faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react'

type Props = {
  search: (text: string) => void;
  pageChoose: (number: number) => void;
}

export default function Search({ search, pageChoose }: Props) {

  // clear input field
  const ref = useRef<HTMLInputElement>(null);

  const onClear = () => {
    if (ref.current) {
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className='search-container'>
        <div className='search-bar'>

          <input
            ref={ref}
            type="text"
            className='search-bar'
            placeholder='&#128269; Search Emoji'
            onChange={({ target }) => {
              pageChoose(1);
              search(target.value);
            }}
          />

          <button
            type="button"
            className='clear-btn'
            onClick={({ target }) => {
              search((target as HTMLInputElement).value = "");
              onClear();
            }}

            // onClick={() => { function1(); function2(); }}
            >

            <FontAwesomeIcon icon={faXmark} />

          </button>
        </div>
      </div>
    </>
  )
}