import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if (req.url === "/" && req.method === "POST") {
    //console.log("Request:",req);

    res.end("POST Request");
  } else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("update product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID;
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "product updated", product }));
    });
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  } else {
    res.statusCode = 404;
    res.end("request Not Found");
  }
});
server.listen(5001, () => console.log("prg6 is running 5001"));
