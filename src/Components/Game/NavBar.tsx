import React from 'react'

export default function NavBar({currentScore, isGameInProgress, topScore}: any) {

  return (
    <nav className='navbar-container'>
        <div className='score-title'>
            <div className='logo-title'>
                <h1 className="title">Emoji Game</h1>
            </div>
            {isGameInProgress && (
                <div className='scores-container'>
                    <p className='score'>Score: {currentScore}</p>
                    <p className='score'>Top Score: {topScore}</p>
                </div>
            )}
        </div>
    </nav>
  )
}