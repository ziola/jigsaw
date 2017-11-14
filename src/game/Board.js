import React, { Component } from 'react';

import Cell from './Cell';
import './Board.css';
export default class Board extends Component {

    renderPiece(piece, index) {
        return (
            <div
                key={index}
                className="board-cell">
                <Cell
                    piece={piece}
                    canDrop={this.props.canDrop}
                    onDrop={this.props.onDrop}
                />
            </div>
        );
    }

    render() {
        const { pieces } = this.props;
        return (
            <div className="board">
                {pieces.map(this.renderPiece, this)}
            </div>
        );
    }
}

