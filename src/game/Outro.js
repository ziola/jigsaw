import React from 'react';

import { formatScore } from './../common/Utils';

import './Outro.css';

export default function Outro(props) {
    const { score, onStart, onScores } = props;
    return (
        <div className="outro">
            <h3>You've done it!</h3>
            <p>Your time is: {formatScore(score)}.</p>
            <button
                type="button"
                onClick={onStart}>
                Play again
            </button>
            <button
                type="button"
                onClick={onScores}>
                Save and see others scores
            </button>
        </div>
    )
}