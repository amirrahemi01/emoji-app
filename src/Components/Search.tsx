import React from 'react'

type Props = {
  search: (text: string) => void;
  pageChoose: (number: number) => void;
}

export default function Search({ search, pageChoose }: Props) {

  return (
    <>
      <div className='search-container'>
        <input
          className='search-bar'
          placeholder='Search Emoji'
          onChange={({ target }) => {
            pageChoose(1);
            search(target.value);
          }}
        />
      </div>
    </>
  )
}
