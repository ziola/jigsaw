function shuffle(array) {
    const shuffled = array.slice(0);
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function prepareNewBoard(images) {
    return new Promise((resolve, reject) => {
        const pieces = images.map((image, index) => ({
            id: index,
            inPlace: false,
            image,
        }));
        resolve(pieces);
    });
}

function canDrop(what, where) {
    return !where.inPlace && what.id === where.id;
}

function drop(what) {
    return Object.assign({}, what, { inPlace: true });
}

function isFinished(board) {
    return !board.some(piece => !piece.inPlace);
}

function start() {
    return Date.now();
}

function finish(startTime) {
    const endTime = Date.now();
    return (endTime - startTime) / 1000;
}

export default {
    prepareNewBoard,
    shuffle,
    canDrop,
    drop,
    isFinished,
    start,
    finish,
};