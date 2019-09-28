const fakePromise1 = a => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return a % 2 == 0 ? resolve('TRUE') : reject('FALSE');
        }, 4000);
    })
}
const fakePromise2 = a => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('Hello fake Promise 2');
        }, 2000);
    })
}
const runAllWithPromiseRace = async () => {
    try {
        let asyncFakePromise1 = fakePromise1(2);
        let asyncFakePromise2 = fakePromise2(2);
        let  resultBestSaveTime  = await Promise.all([ asyncFakePromise1, asyncFakePromise2]);
        console.log({ resultBestSaveTime });
    } catch (error) {
        console.log({ error });
    }
}
runAllWithPromiseRace();