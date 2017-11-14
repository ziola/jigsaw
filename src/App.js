import React, { Component } from 'react';

import './App.css';
import './common/base.css';

import ImgProcessor from './common/ImgProcessor';
import GameApi from './common/GameApi';
import States from './common/States';

import Loading from './loading/Loading';
import Intro from './intro/Intro';
import Game from './game/Game';
import Scores from './scores/Scores';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: States.LOADING,
      player: '',
      imageParts: [],
      pieces: [],
      startTime: null,
    };
    this.onStart = this.onStart.bind(this);
    this.onScores = this.onScores.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    ImgProcessor
      .prepare('kotel.jpg')
      .then((imageParts) => this.setState({
        state: States.INTRO,
        imageParts,
      }));
  }

  onStart(player) {
    this.setState({ state: States.LOADING });
    GameApi
      .prepareNewBoard(this.state.imageParts)
      .then(pieces => this.setState({
        state: States.GAME,
        player,
        pieces,
      }));
  }

  onScores() {
    this.setState({ state: States.SCORE });
  }

  onBack() {
    this.setState({ state: States.INTRO });
  }

  getCurrentView({ state, player, pieces }) {
    switch (state) {
      case States.LOADING:
        return <Loading />
      case States.INTRO:
        return <Intro
          onStart={this.onStart}
          onScores={this.onScores} />
      case States.GAME:
        return <Game
          player={player}
          pieces={pieces}
          onStartAgain={this.onStart}
          onScores={this.onScores}
          onStart={this.onGameStart}
        />
      case States.SCORE:
        return <Scores
          onBack={this.onBack} />
    }
  }

  render() {
    const currentView = this.getCurrentView(this.state);

    return (
      <div className="app">
        {currentView}
      </div>
    );
  }
}

export default App;
