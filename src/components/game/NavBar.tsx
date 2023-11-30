import React from 'react'
import Toggle from '../toggle/Toggle'
import { Link } from 'react-router-dom'

export default function NavBar({ currentScore, isGameInProgress, topScore }: any) {

    return (
        <>
            <div className="title-mobile  responsive" style={{ margin: '10px 0' }}>
                <Link to='/' style={{ display: "flex", alignItems: 'center', padding: '0 7px', fontSize: "18px", color: 'var(--main-colort)', fontWeight: 900 }} >Emoji Game</Link>
                <img src='http://emojicdn.elk.sh/🎮' width="35" />
            </div>

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
        </>
    )
}