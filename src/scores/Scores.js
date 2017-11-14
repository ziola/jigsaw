import React, { Component } from 'react';

import ScoreApi from './../common/ScoreApi';
import { formatScore } from './../common/Utils';

import Loading from './../loading/Loading';

import './Scores.css';

export default class Scores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scores: [],
            isReady: false,
        };
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        ScoreApi
            .getScores()
            .then(scores => this.setState({
                isReady: true,
                scores,
            }));
    }

    handleBack() {
        this.props.onBack();
    }

    renderScore({ id, player, score }) {
        return (
            <li key={id} className="scores-list__item">
                <span>{player}</span>
                <span>{formatScore(score)}</span>
            </li>
        )
    }

    render() {
        const { isReady, scores } = this.state;
        return (
            isReady ? (
                <div className="scores">
                    <h4>JIGSAW</h4>
                    <h5>Hall of Fame</h5>
                    <ul className="scores-list">
                        {scores.map(this.renderScore)}
                    </ul>
                    <button
                        className="scores__back"
                        type="button"
                        onClick={this.handleBack}>
                        Back
                </button>
                </div>
            ) : <Loading />
        );
    }
}