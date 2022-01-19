const express=require('express');
const app = express();
const cors= require('cors');
const ofirebase = require("../firebase/setData");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors({
    origin: '*'
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/',(req,res)=>{
    res.send("Hola mundo")
});
app.post('/guardar',(req,res)=>{
    ofirebase.saveData(req.body,(err,data)=>{
        res.send(data);
    })
});

app.listen(3001,()=>{
    console.log("servidor corriendo");
});