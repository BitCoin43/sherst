const hosturl = 'https://woolenterritory.ru/'
//const hosturl = 'http://localhost:3000/'
//const hosturl = 'http://31.128.41.41:3000/'

function load_data(url, send, cb){
    let xhr = new XMLHttpRequest()
    xhr.open('POST', hosturl + url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        cb(xhr);
    }
    xhr.send(send); 
}