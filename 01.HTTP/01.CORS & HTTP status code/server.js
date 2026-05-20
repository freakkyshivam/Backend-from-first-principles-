
import http from 'node:http';

const server = http.createServer((req, res)=>{

   res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === "OPTIONS" && req.url === '/api/data'){
        res.writeHead(204);
        res.end();
        return;
    }

   else if(req.method === 'GET' && req.url === '/api/data'){
         
        res.writeHead(200);
        res.end(JSON.stringify({
             id : 123,
            name : "Shivam",
            age : 20
        }));
        return;
    }
    else if(req.method === 'PUT' && req.url === '/api/data'){
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', ()=>{
            const data = JSON.parse(body);
            res.writeHead(200);
            res.end(JSON.stringify({
                msg : "Data updated successfully"
            }));
        });
    }
    else if(req.method === 'POST' && req.url === '/api/data'){
         
        let body = "";

        req.on('data' , chunk =>{
            body += chunk.toString();
        });

        req.on('end',()=>{
            const data = JSON.parse(body);
            res.writeHead(201);
            res.end(JSON.stringify({
                 msg : "Data created successfully"
            }))
        })
    }
    else if(req.method === 'GET' && req.url === 'unknown'){
        res.writeHead(404);
        res.end();
    }else{
        res.writeHead(500);
        res.end();
    }
});



server.listen(3000, ()=>{
    console.log(`🚀 Server listen at http://localhost:3000`);
})