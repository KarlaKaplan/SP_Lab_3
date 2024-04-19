function counter0(n) {
    console.log(n);
    if (n > 0) setTimeout(counter0, 1000, n - 1)
}
function counter1(n) {
    console.log(n--); if (n < 0) return;
    const i = setInterval(() => {
        console.log(n--);
        if (n < 0) clearInterval(i);
    }, 1000);
}

counter0(3);