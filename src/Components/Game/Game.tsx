import React, { Component } from 'react'

import WinOrLose from './WinOrLose';
import Card from './Card';
import NavBar from './NavBar';

interface EmojiGameProps  {
    emojiList: any[]; // replace any with the actual type of the emojis
  }

  interface EmojiGameState  {
    clickedEmojiList: number[];
    isGameInProgress: boolean;
    topScore: number;
  }

  class EmojiGame extends Component<EmojiGameProps, EmojiGameState> {
    state = {
        clickedEmojiList: [] as number[],
        isGameInProgress: true,
        topScore: 0,
    }

    resetGame = () => {
        this.setState({clickedEmojiList: [], isGameInProgress: true});
    }

    renderScoreCard = () => {
        const {emojiList} = this.props;
        const {clickedEmojiList} = this.state;
        const isWon = clickedEmojiList.length === emojiList.length;

        return (
            <WinOrLose 
                isWon={isWon}
                onClickPlayAgain={this.resetGame}
                score={clickedEmojiList.length}
            />
        )
    }

    finishGameAndSetTopScore = (currentScore: any) => {
        const {topScore} = this.state;
        let newTopScore = topScore;

        if (currentScore > topScore) {
            newTopScore = currentScore
        }

        this.setState({topScore: newTopScore, isGameInProgress: false});
    }

    clickEmoji = (id: any) => {
        const {emojiList} = this.props;
        const {clickedEmojiList} = this.state;
        const isEmojiPresent = clickedEmojiList.includes(id);
        const clickedEmojiLength = clickedEmojiList.length;

        if (isEmojiPresent) {
            this.finishGameAndSetTopScore(clickedEmojiLength)
        } else {
            if (emojiList.length - 1 === clickedEmojiLength) {
                this.finishGameAndSetTopScore(emojiList.length)
            }
            this.setState(previousState => ({
                clickedEmojiList: [...previousState.clickedEmojiList, id]
            }))
        }
    }

    getRandomEmojiList = () => {
        const {emojiList} = this.props
        return emojiList.sort(() => Math.random() - 0.5)
    }

    renderEmojiList= () => {
        const randomEmoji = this.getRandomEmojiList()

        return (
            <ul className='emoji-list-container'>
                {randomEmoji.map(e => (
                    <Card 
                        key={e.id}
                        emojiDetails={e}
                        clickEmoji={this.clickEmoji}
                    />
                ))}
            </ul>
        )
    }

  render() {
    const {clickedEmojiList, isGameInProgress, topScore} = this.state;

    return (
      <div className='game-container'>
        <NavBar 
            currentScore={clickedEmojiList.length}
            isGameInProgress={isGameInProgress}
            topScore={topScore}
        />
        <div className='emoji-game-container'>
            {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame