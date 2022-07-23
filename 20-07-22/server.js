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

const authors = JSON.stringify([
    {name: "Briknal Grendalhoven", birthplace: "Kiev", born: 1922},
    {name: "Barry Smits", birthplace: "Soho", born: 2000},

]);

const convertedBooks = JSON.parse(books);

const requestListenerJSON = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(convertedBooks);
    res.end(books);
}

const requestListenerRouting = (req, res) => {

    switch(req.url){
        case "/home":
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end(`
            <h1>Authors and Books</h1>
            <a href="/authors">Authors</a>
            <a href="/books">Books</a>
            `);
            break;
        case "/books":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(books);
            break;
        case "/authors":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(authors);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1>404 - no page</h1>');
    }

}

const server = http.createServer(requestListenerRouting);

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})