function createCounter(n) {
    let current = n;
    let i;
    function start() {
        console.log(current--); if (current < 0) return;
        i = setInterval(() => {
            console.log(current--);
            if (current < 0) stop();
        }, 1000);
    }
    const pause = () => clearInterval(i);
    function stop() {
        pause();
        current = 0;
    }
    return { start, pause, stop };
}

const counter = createCounter(5);
counter.start();
setTimeout(counter.pause, 1000);
setTimeout(counter.start, 3000);
setTimeout(counter.stop, 4020);


