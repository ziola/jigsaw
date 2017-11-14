function saveScore(player, score) {
    const body = {
        player,
        score,
    };
    return fetch('http://localhost:3004/api/scores', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

function getScores(sortBy = 'score', limit = 10, page = 1) {
    return fetch(`http://localhost:3004/api/scores?_page=${page}&_limit=${limit}&_sort=${sortBy}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(res => res.json());
}

export default {
    saveScore,
    getScores
};