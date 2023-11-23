import React from 'react'

import WinnerIMG from '../../Assets/winner.jpg'
import LoserIMG from '../../Assets/lose.jpg'
import { all } from 'axios';

function WinOrLose({ isWon, onClickPlayAgain, score }: any) {
    const imgUrl = isWon ? WinnerIMG : LoserIMG;
    const gameStatus = isWon ? "Winner" : "Loser";
    const scoreLable = isWon ? "Best Score" : "Score";

    return (
        <div className='winner-loser'>
            <div className='win-lose-con'>
                <h1 className='game-status'>{gameStatus}</h1>
                <p>{scoreLable}</p>
                <p>{score}/12</p>

                <button
                    type="button"
                    className='play-again-btn'
                    onClick={onClickPlayAgain}
                >
                    Play Again
                </button>
            </div>
            <div className='win-lose-img-con'>
                <img src={imgUrl} alt={isWon ? "winner" : "loser"} />
            </div>
        </div>
    )
}

export default WinOrLose