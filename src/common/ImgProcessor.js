const width = 130;
const height = 130;
const pieces = Array(9).fill(null);

function crop (canvas, offsetX, offsetY, width, height) {
    const buffer = document.createElement('canvas');
    const b_ctx = buffer.getContext('2d');
    buffer.width = width;
    buffer.height = height;
    b_ctx.drawImage(canvas, offsetX, offsetY, width, height,
        0, 0, buffer.width, buffer.height);
    return buffer.toDataURL();
};


function prepare(image) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = function () {
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.getContext('2d').drawImage(this, 0, 0);

            const imagePieces = pieces
                .map((piece, index) =>
                crop(canvas, width * (index % 3), height * Math.floor(index / 3), width, height)
            );
            resolve(imagePieces);
        }
        img.src = image;
    });
}

export default {
    prepare,
};