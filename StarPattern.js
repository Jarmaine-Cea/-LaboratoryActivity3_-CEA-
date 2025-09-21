// Problem 2: Star Pattern

function showStars(base) {
    const rows = base + 2;
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

showStars(4);
