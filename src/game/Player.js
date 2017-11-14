import React from 'react';

import './Player.css';

export default function Player(props) {
    const { player } = props;
    return (
        <div className="player">
            Player: {player}
        </div>
    )
}