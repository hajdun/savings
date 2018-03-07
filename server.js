const express = require('express');
const spdy = require('spdy');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');
const compression = require('compression');
const api = require('./server/routes/api');


// gzip
app.use(compression());

// cache
app.set('view cache', true);

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set port
const port = process.env.PORT || '3000';
app.set('port', port);

// server http2, https self-signed
const options = {
    key: fs.readFileSync(__dirname + '/server/http2-express/server.key'),
    cert: fs.readFileSync(__dirname + '/server/http2-express/server.crt')
}

spdy
    .createServer(options, app)
    .listen(port, (error) => {
        if (error) {
            console.error(error)
            return process.exit(1)
        } else {
            console.log('Listening on port: ' + port + '.')
        }
    });
