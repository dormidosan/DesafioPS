const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');
const util = require('../common/util');

router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let getUser = config.URL_SERVICE.USER.concat('?email='+email+'&password='+password);
    request(util.genericRequest(getUser, "GET", {}), (error, respose, body) => {
        if(!error) {
            delete(body[0].password);
            res.json(util.genericResponse(body));

        } else {
            res.json(util.genericError())
        }
    });
});

module.exports = router;