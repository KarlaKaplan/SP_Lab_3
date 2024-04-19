function delay(n) {
    return new Promise(
        resolve => setTimeout(resolve, n * 1000)
    );
}
const resolve = () => console.log("Hello, world!");

delay(3).then(resolve);