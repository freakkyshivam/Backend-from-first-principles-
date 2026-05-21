import express from 'express';
import multer from 'multer';
 import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({dest : 'uploads/'})

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method === 'OPTIONS'){
        res.writeHead(204);
        res.end();
        return;
    }
    next();
});

 
app.post('/upload',upload.single('file'), (req ,res)=>{
     
    console.log(req.body);
    console.log(req.file);
    req.headers['content-range']
    res.status(201).json({
        msg : "File uploaded",
        file : req.file,
        body : req.body
    })
})


app.listen(3000, ()=>{
    console.log('Server listen at http://localhost:3000');
    
})