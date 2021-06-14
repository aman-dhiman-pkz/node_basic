const app = require('express')();

const bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.json())


app.use(bodyParser.json());

app.get('/status', (req, res, next) => {
    return res.json({ status: 'online' });
});

app.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    if (email === "abc@abc.com" && password === '12345') {
        res.setHeader('token', 'nnnnnnnnnn');
        return res.json({ 'status': 'Login Done' });
    } else {
        res.setHeader('code', 404);
        return res.json({ 'status': 'Login Failed' })
    }

});

app.listen(8080, () => {
    console.log("Server Up");
})