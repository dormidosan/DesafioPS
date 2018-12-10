const express = require('express');

module.exports.now = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var ss = today.getSeconds();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (hh < 10) {
        hh = '0' + hh;
    }
    if (min < 10) {
        min = '0' + min;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + min + ':' + ss;
}

module.exports.genericError = () => {
    return {
        headers:{
        service_code: "500",
        service_description: 'Server Error'
    }}
}

module.exports.genericResponse = (body) => {
    return {
        'data': body,
        'status': true
    }
}

module.exports.genericRequest = (url, method, body, ) => {
    return {
        url: url,
        method: method,
        json: true,
        body: body
    }
}