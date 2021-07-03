const axios = require('axios');

function siteIsOnline(https) {
    axios.get(https).then((response) => {
        if (response.status == 200) {
            console.log('Site está online!');
        };
    }).catch((err) => {
        console.log('Site está off!\nError: ' + err);
    });
};

siteIsOnline('http://www.pudim.com.br/');
