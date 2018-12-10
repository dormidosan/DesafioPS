const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');
const util = require('../common/util');

router.get('/user', (req, res) => {
    request(config.URL_SERVICE.USER, "GET", (error, response, body) => {
        if(!error){
            res.json(util.genericResponse(JSON.parse(body)));
        } else {
            res.json(util.genericError())
        }
    });
});

router.get('/user/:id', (req, res) => {
    var toGet = config.URL_SERVICE.USER.concat('/' + req.params.id);
    request(util.genericRequest(toGet, "GET", {}), (error, respose, body) => {
        if(!error){
            res.json(util.genericResponse(body));

        } else {
            res.json(util.genericError())
        }
    });
});

router.post('/user', (req, res) => {
    request(util.genericRequest(config.URL_SERVICE.USER, "POST", req.body), (error, respose, body) => {
        if(!error){
            res.json(util.genericResponse(body));
        } else {
            res.json(util.genericError())
        }
    });
});

router.patch('/user/:id', (req, res) => {
    var toUpdate = config.URL_SERVICE.USER.concat('/' + req.params.id);
    request(util.genericRequest(toUpdate, "PATCH", req.body), (error, respose, body) => {
        if(!error){
            res.json(util.genericResponse(body));
        } else {
            res.json(util.genericError())
        }
    });
});

router.delete('/user/:id', (req, res) => {
    var toDelete = config.URL_SERVICE.USER.concat('/' + req.params.id);
    request(util.genericRequest(toDelete, "DELETE", {}), (error, respose, body) => {
        if(!error){
            res.json(util.genericResponse(body));
        } else {
            res.json(util.genericError())
        }
    });
}); 

module.exports = router;