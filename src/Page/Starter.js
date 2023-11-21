import React from 'react'
import { Link } from 'react-router-dom'

import a from './Pages.module.css'



function Starter() {
    return (
        <div>
            <div className={a.container}>
                <div className={a.right}>
                    <Link to="/">
                        <h2 className='title gradient-text'>Emoji finder</h2>
                    </Link> <br />
                    <div>
                        <b>Review, Search, Play Game with</b>
                        <span>Emojies</span>
                    </div>
                </div>

                <div className={a.center}>
                    <div>
                        <img src='https://emojicdn.elk.sh/%F0%9F%98%82' />
                    </div>
                </div>

                <div className={a.left}>
                    <Link to="/">
                        <h2 className='title gradient-text'>Emoji finder</h2>
                    </Link> <br />
                    <div>
                        <p>Review, Search, Play Game with</p>
                        <span>Emojies</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Starter