import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GameApi from './../common/GameApi';
import ScoreApi from './../common/ScoreApi';

import Board from './Board';
import RemainingPieces from './RemainingPieces';
import Player from './Player';
import Outro from './Outro';

import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: props.pieces,
            remaining: GameApi.shuffle(props.pieces),
            finished: GameApi.isFinished(props.pieces),
            startTime: null,
            time: null,
        };
        this.canDrop = this.canDrop.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleScores = this.handleScores.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        const startTime = GameApi.start();
        this.setState({ startTime });
    }

    canDrop(what, where) {
        return GameApi.canDrop(what, where);
    }

    onDrop(what, where) {
        const dropped = GameApi.drop(what);
        const pieces = this.state.pieces.map(piece => {
            return piece === where ? dropped : piece;
        })
        const remaining = this.state.remaining.filter(piece => piece !== what)
        const isFinished = GameApi.isFinished(pieces);
        const time = isFinished ? GameApi.finish(this.state.startTime) : null;
        this.setState({
            pieces,
            remaining,
            isFinished,
            time,
        });
    }

    handleStart() {
        this.props.onStartAgain(this.props.player);
    }

    handleScores() {
        ScoreApi
            .saveScore(this.props.player, this.state.time)
            .then(this.props.onScores);
    }

    render() {
        const { player } = this.props;
        const { pieces, remaining, isFinished, time } = this.state;
        return (
            isFinished ? (
                <Outro
                    score={time}
                    onStart={this.handleStart}
                    onScores={this.handleScores}
                />
            ) : (
                    <div className="game">
                        <div className="game__header">
                            <Player player={player} />
                            <button
                                type="button"
                                onClick={this.handleStart}>
                                Play again
                            </button>
                        </div>
                        <div className="game__body">
                            <Board
                                pieces={pieces}
                                canDrop={this.canDrop}
                                onDrop={this.onDrop} />
                            <RemainingPieces
                                pieces={remaining} />
                        </div>
                    </div>
                )
        )
    }
}


export default DragDropContext(HTML5Backend)(Game);