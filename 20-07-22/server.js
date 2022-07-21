const http = require('http');

const port = 3000;

const requestListener = (req, res) => {
    res.statusCode = 200;
    res.end("Initial server");
}

const requestListenerHTML = (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<h1>Hello world</h1>');
}

const books = JSON.stringify([
    {title: "Heading 1", author: "Author 1", year: 2022},
    {title: "Heading 2", author: "Author 2", year: 1999}
]);

const convertedBooks = JSON.parse(books);

const requestListenerJSON = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(convertedBooks);
    res.end(books);
}

const server = http.createServer(requestListenerJSON);

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})