const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const PORT =  3000;


//url to scrape

const url = 'https://www.theguardian.com/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        $('.fc-item__title', html).each(function (){
            const title = $(this).text()
            const link = $(this).find('a').attr('href');
            articles.push({
                title,
                link
            });
        });
        console.log(articles);
}).catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });