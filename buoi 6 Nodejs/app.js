const express = require('express');
const calcuClass = require('./Calcu');
const listUser = require('./data');
const bodyParser = require('body-parser'); 
const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded()); // MIDDLEWARE GET BODY

// app.get('/', (req, res) => {
//     res.render('home');
// })

// app.get('/hello-world', (req, res ) => {
//     res.json({
//         message: 'Hello world'
//     })
// })
// app.get('/cal/:cal/:numA/:numB', (req, res) => {
//     const { cal, numA, numB } = req.params;
//     if (isNaN(numA) || isNaN(numB))
//         return res.json({
//             message: 'numA or numB is not number'
//         })
//     let cal1 = new calcuClass(cal.toUpperCase(), numA, numB);
//     let resultCal = cal1._getResultCal();
//     res.json({ resultCal })
// })

// app.get('/list-user', (req, res) => {
//     const { userId, id, title, body } = req.params;
//     res.json({ listUser })
// })
// app.get('/list-user/:userID', (req, res) => {
//     const { userID } = req.params;
//     const filterUser = listUser.filter(user => Object.is(user.userId.toString(), userID.toString()))
//     res.json({ filterUser })
// })

// app.get('/post/:postID', (req, res) => {
//     const { postID } = req.params;
//     const postUser = listUser.find((user => Object.is(user.id.toString(), postID.toString())))
//     res.json({ postUser })
// })
app.get('/', (req, res) => {
    res.render('login')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    //console.log({ email, password })
    res.render('info-login', { email, password })
});

app.listen(PORT, () => {
    console.log((`Server at port ${PORT}`));
})