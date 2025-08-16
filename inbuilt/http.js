let http = require('http');

//req > what we send to server(params,queryParams,body)
//res > what we get from server(statusCode,headers,body)

let server = http.createServer((req, res) => {
    res.write('<h1>This is node js app code server</h1>');
    res.end();
});

server.listen(7600, () => {
    console.log('Server is running on port 7600');
});
