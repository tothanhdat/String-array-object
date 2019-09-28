const fakePromise1 = a => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return a % 2 == 0 ? resolve('TRUE') : reject('FALSE');
        }, 1000);
    })
}
const fakePromise2 = a => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('Hello fake Promise 2');
        }, 2000);
    })
}

const runAllWithParAsyncAwait = async () => {
    try {
        let asyncFakePromise1 = fakePromise1(1);
        let asyncFakePromise2 = fakePromise2(2);
        let [resultFakePromise1, resultFakePromise2] = await Promise.all([asyncFakePromise1, asyncFakePromise2]);
        console.log({ resultFakePromise1, resultFakePromise2 });
    } catch (error) {
        console.log({ error });
    }
}
runAllWithParAsyncAwait(); //undefinded

const runAll = () => {
    fakePromise2()
        .then(message2 => console.log(`${message2}`))
        .catch(err => console.log(`${err}`))
    fakePromise1().then(message1 => console.log(`${message1}`));
}
//runAll();

const runAllWithAsyncAwait = async () => {
    try {
        let resultPromise1 = await fakePromise1(4);
        console.log({ resultPromise1 });
    } catch (error) {
        console.log({ error });
    }
}
//runAllWithAsyncAwait();