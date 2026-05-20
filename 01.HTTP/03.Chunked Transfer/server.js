import http from 'node:http'

const data = [
"HTTP is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes, such as machine-to-machine communication, programmatic access to APIs, and more.",

"HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response from the server. HTTP is a stateless protocol, meaning that the server does not keep any session data between two requests, although the later addition of cookies adds state to some client-server interactions.",

"HTTP is an extensible protocol that relies on concepts like resources and Uniform Resource Identifiers (URIs), a basic message structure, and client-server communication model. On top of these concepts, numerous extensions have been developed over the years that add functionality and updated semantics, including additional HTTP methods and headers.",

"HTTP was created in the early 1990s and has been extended several times. This article goes through its history and describes HTTP/0.9, HTTP/1.0, HTTP/1.1, through HTTP/2 and HTTP/3, as well as novelties introduced over the years.",

"Although HTTP is a stateless protocol, a server can send a Set-Cookie header with the response. The client then returns the cookie's value with every subsequent request to the server in the form of a Cookie request header. This adds the ability to store and exchange a small amount of data which effectively adds state to some client-server interactions.",

"URL redirection, also known as URL forwarding, is a technique to give more than one URL address to a page, a form, a whole website, or a web application. HTTP has a special kind of response, called a HTTP redirect, for this operation.",

"In conditional requests, the outcome of a request depends on the value of a validator in the request. This method is used heavily in caching and use cases such as resuming a download, preventing lost updates when modifying a document on the server, and more.",

"A range request asks the server to send a specific part (or parts) of a resource back to a client instead of the full resource. Range requests are useful for cases when a client knows they need only part of a large file, or for cases where an application allows the user to pause and resume a download.",

"HTTP defines a set of message headers, starting with Accept as a way for a browser to announce the format, language, or encoding it prefers. This article explains how this advertisement happens, how the server is expected to react, and how it chooses the most adequate response to a request.",

"The HTTP guides are listed in order from general overviews to specialized, use-case-driven topics. Beginners are encouraged to start with the foundational guides before exploring more focused articles.",

"Caching is a highly important mechanism for delivering fast experiences on the Web and for efficient use of resources. This article describes different methods of caching and how to use HTTP headers to control them.",

"<h2 id='he'>Finished Chunk data..! Source of Data : MDN</h2>"
]

const n = data.length;

const server = http.createServer((req ,res)=>{

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
        res.setHeader("Access-Control-Allow-Headers","Content-Type")
        

        if(req.method === "OPTIONS"){
            res.writeHead(204);
            res.end();
            return;
        }

        if(req.url === '/stream' && req.method === 'GET'){

            res.setHeader('Content-Type', 'text/plain')
            res.setHeader('Transfer-Encoding', 'chunked');

            res.writeHead(200)

            let i = 0;
            const interval = setInterval(() => {
             if (i < n) {
            res.write(data[i]);
            i++;
         } else {
            clearInterval(interval);
            res.end();
         }

          }, 1000);
            
        }else{
            res.writeHead(404);
            res.end("Not found")
        }
})

server.listen(3000, ()=>{
    console.log(`Server listen at http://localhost:3000`);
    
})