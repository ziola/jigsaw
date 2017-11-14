import React, { Component } from 'react';

import Piece from './Piece';
import './RemainingPieces.css';
export default class RemainingPieces extends Component {

    renderPiece(piece, index) {
        return (
            <div
                key={index}
                className="remaining-piece">
                <Piece piece={piece} />
            </div>
        );
    }

    render() {
        const { pieces } = this.props;

        return (
            <div className="remaining-pieces">
                {pieces.map(this.renderPiece)}
            </div>
        );
    }
}
