import express from 'express'
import router from './route.js';
import routerv1 from './route.v1.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    next()
})

app.use('/api', router)
app.use('/api/v1', routerv1)

app.listen(3000,()=>{
    console.log('Server listen at http://localhost:3000');
});