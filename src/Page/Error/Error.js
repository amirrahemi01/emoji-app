import React from 'react'
// import IMG from "../Assets/Images/404.png"
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error-container'>
        {/* <img src={IMG} /> */}
        <h2>Sorry</h2>
        <p>did not find the page.</p>
        <Link to="/" className='main-btn'>Go To Home</Link>
    </div>
  )
}