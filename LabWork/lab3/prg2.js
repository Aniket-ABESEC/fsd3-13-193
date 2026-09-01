import http from 'http';
const server = http.createServer((req,res)=>{
    res.write("<h1>hello Client</h1>");
    res.end();
});
server.listen(4444,() => console.log("server is running on port 4444...")
);