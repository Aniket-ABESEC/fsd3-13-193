import http from 'http';
const server = http.createServer((req,res)=>{
    res.write("<h1>Aniket</h1>");
    res.write("<h2>SIWAN</h2>")
    res.end();
});
server.listen(4444,() => console.log("server is running on port 4444...")
);