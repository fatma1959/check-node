const http = require("http");

const server = http.createServer((req, res) => {
  //  res.end("<h1>hello</h1>")
  //   console.log(req),
  console.log(req.url), console.log(req.method);
  switch (req.url) {
    case "/":
      res.end("<h1>this a home page</h1>");
      break;
    case "/about":
      res.end("<h1>this a node workshop</h1>");
      break;
    default:
      res.end("something is wrong");
      break;
  }
});

server.listen(5000, () => console.log("server running on port", 5000));
