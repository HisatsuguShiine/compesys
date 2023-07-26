require('dotenv').config()
const fs = require('fs');
const { execSync } = require('child_process')
const express = require('express');
const app = express();

const { STATE, TEMP_DIR } = require('./constants');

const hello = require('./routes/hello');
const snap = require('./routes/snap');
const train = require('./routes/train');
const matchmaker = require('./routes/matchmaker');

app.use('/', hello);  
app.use('/snap', snap);   
app.use('/train', train);
app.use('/matchmaker', matchmaker);
app.set('state', STATE.UNDEFINDED);
app.set('allowOpReqToTrain', true);

(() => {
    if(fs.existsSync(TEMP_DIR)){
        const stdout = execSync(`rm -rf ${TEMP_DIR}/*`);
    } else {
        fs.mkdir(TEMP_DIR, { mode: 0o777 }, (err) => {
            if (err) { throw err; }
            fs.chmodSync(TEMP_DIR, 0o777,  (err) => {
                if (err) { throw err; }
            });
        });
    }
})

const server = app.listen(process.env.LISTEN_PORT, () => {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

