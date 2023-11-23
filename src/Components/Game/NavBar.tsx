import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-router-dom'

export default function NavBar({ currentScore, isGameInProgress, topScore }: any) {

    return (
        <nav className='navbar-container'>
            <div className='score-title'>
                <div className='logo-title'>
                    <Toggle />
                    <Link className="title" to='/' >Emoji Game</Link>
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