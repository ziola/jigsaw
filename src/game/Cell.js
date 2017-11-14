import React from 'react';
import { DropTarget } from 'react-dnd';

import { ItemTypes } from './../common/ItemTypes';
import Piece from './Piece';
import './Cell.css';

function Cell(props) {
    const { piece, connectDropTarget} = props;
    return connectDropTarget(
        <div
            className="cell"
        >
            {piece.inPlace ? <Piece piece={piece} /> : null}
        </div>
    );
}

const cellTarget = {
    canDrop(props, monitor) {
        return props.canDrop(monitor.getItem(), props.piece);
    },
    drop(props, monitor) {
        props.onDrop(monitor.getItem(), props.piece);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

export default DropTarget(ItemTypes.PIECE, cellTarget, collect)(Cell);
