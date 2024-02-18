const http = require("http");
const PORT = 3001;

const url = require("url");

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl == "/") {
    res.setHeader(`Content-Type`, `text/plain`);
    res.writeHead(200);
    res.write("Olet hakemistossa /");
    res.end();
  } else if (reqUrl == "/hello") {
    res.setHeader(`Content-Type`, `text/html`);
    res.writeHead(200);
    res.write("<h1>olet hakemistossa /hello</h1>");
    res.end(`<h6> ...and there's nothing you can do about BEYOOOTCH...</h6>`);
  } else {
    res.write("Hakemaasi sivua ei löydy - 404 Not Found");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
