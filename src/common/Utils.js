export function formatScore(score) {
    const minutes = Math.floor(score / 60);
    const seconds = Math.floor(score % 60);
    return [
        minutes < 10 ? '0' : '',
        minutes,
        ':',
        seconds < 10 ? '0' : '',
        seconds
    ].join('');
}