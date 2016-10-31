
var API = require('./controllers/api.js');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("I wanna be like KANYE!!!!");
    });

    app.get('/api/kanye/counter', API.counter);
    app.get('/api/kanye/album', API.album);
    app.get('/api/kanye/track', API.track);
}
