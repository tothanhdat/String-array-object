const prinStringPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if ((a + b) % 2 == 0) {
            console.log('EVEN NUMBER');
            return resolve('EVEN NUMBER')
        }
        console.log('ODD NUMBER');
        return reject('ODD NUMBER')

    });
}

//Note .. hỏi lại
const callAllPrintString = () => {
    prinStringPromise(3, 1)
        .then(() => prinStringPromise(2, 3))
        .then(() => prinStringPromise(2, 2))
        .then(() => prinStringPromise(1, 2))
        .then(() => prinStringPromise(3, 4))
        .catch(err => console.log({ err }))
}
callAllPrintString();
