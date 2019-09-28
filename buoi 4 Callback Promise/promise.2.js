const callback1  = (number1, number2, cb) => {
    if ((number1 + number2) % 2 == 0)
        return cb('EVEN')
    return cb('ODD')
}

const convertCallBackToPromise = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback1(number1, number2, message => {
                if (Object.is( message, 'ODD'))
                    return reject({ message: 'CONVERT PROMISE ODD'});
                return resolve ({ message: 'CONVERT PROMISE EVEN'});
            })
        }, 1000)
    });
}
// console.log(convertCallBackToPromise(1, 3));

convertCallBackToPromise(1, 2)
    .then(result => console.log(`--RESOLVE ${result.message}`))
    .catch(resultErr => console.log(`--REJECT ${resultErr.message}`))

    
