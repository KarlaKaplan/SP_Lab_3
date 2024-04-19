function delay(n) {
    return new Promise(
        resolve => setTimeout(resolve, n * 1000)
     );
}
function counterViaDelay(n) {
    console.log(n);
    if (n > 0)
        delay(1).then(() => counterViaDelay(n - 1));
}

counterViaDelay(3);
