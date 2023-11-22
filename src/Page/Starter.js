import React from 'react'
import { Link } from 'react-router-dom'

import a from './Pages.module.css'

import Image5 from '../Assets/6.png'
import Image6 from '../Assets/7.png'
import Image7 from '../Assets/8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



function Starter() {
    return (
        <div className={a.container}>
            <div className={a.right}>
                <Link to="/" className='title gradient-text'>
                    Emoji finder
                </Link>

                <div className={a.text}>
                    <b>Review, Search, Play Game with Emojies</b>
                </div>
                <br />
                <div className={a.btn_box}>
                    <Link to="Emoji" className={a.link_btn}>
                        <button className={a.btn}>
                            Search
                        </button>
                    </Link>

                    <span className={a.span}>OR</span>

                        <Link to="Emoji" className={a.link_btn}>                    
                        <button className={a.btn}>
                            Play Game
                    </button></Link>
                </div>
            </div>

            <div className={a.center}>
                <div>
                    <img src={Image7} className={a.third} />
                </div>
            </div>

            <div className={a.left} style={{ alignItems: "flex-end", paddingRight: "5rem" }}>

                <img className={a.first} src={Image5} />
                <img className={a.second} src={Image6} />

            </div>

            <div className={a.fixed_footer}>
                <FontAwesomeIcon icon={faGithub} />
                <a className={a.atag} href='https://github.com/amirrahemi01/emoji-app' target='_blank'>GitHub</a>
            </div>

        </div>
    )
}

export default Starter