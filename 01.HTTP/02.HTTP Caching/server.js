
import http from "node:http"

const server = http.createServer((req, res)=>{

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, if-none-match');

  if(req.method === 'OPTIONS'){
    res.writeHead(204);
    res.end();
    return;
}

    if(req.url === '/api/data'  && req.method === 'GET'){

        
         const etag = '123abc';

        if(req.headers['if-none-match'] === etag){
            res.writeHead(304);
            res.end();
            return;
        }

        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Cache-Control', 'max-age=60');
        res.setHeader('ETag', etag);
        res.writeHead(200);
       
       
        const data = { 
            name: "Shivam", 
            age: 20,
            etag, 
            statusCode : 200
         };
        res.end(JSON.stringify(data))

    }else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
}
})

server.listen(3000,()=>{
    console.log(`Server is running at http://localhost:3000`);
    
})