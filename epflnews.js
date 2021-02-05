const fetch = require('node-fetch')
const news = () => {
    fetch('https://actu.epfl.ch/api/v1/news/')
        .then(res => res.json())
        .then(json => console.log(json))
}

exports.news = news
