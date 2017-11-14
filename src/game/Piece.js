import React from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from './../common/ItemTypes';
import './Piece.css';

function Piece(props) {
    const { piece: { image, inPlace }, connectDragSource, isDragging } = props;
    const style = {
        background: `url(${image})`,
        opacity: isDragging ? 0.2 : 1,
        cursor: inPlace ? 'default' : 'move',
    };

    return connectDragSource(
        <div
            className="piece"
            style={style}
        />
    );
}

const pieceSource = {
    beginDrag(props) {
        return props.piece;
    },
    canDrag(props) {
        return !props.piece.inPlace;
    },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

export default DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);