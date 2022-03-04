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
    try{
        ofirebase.saveData(req.body,(err,data)=>{
            res.send(data);
        })
    }  catch (err) {
        console.log(err)
      }
});

app.get('/listar',(req,res)=>{
    try{
        ofirebase.getData(req.body,(err,data)=>{
            res.send(data);
        })
    }  catch (err) {
        console.log(err)
      }
});

app.post('/rechazar',(req,res)=>{
    try{
        ofirebase.RetailData(req.body,(err,data)=>{
            console.log("exito")
            res.send()
        })
    }  catch (err) {
        console.log(err)
      }
});
app.post('/aceptar',(req,res)=>{
    try{
        ofirebase.AcceptData(req.body,(err,data)=>{
            console.log("exito")
            res.send()
        })
    }  catch (err) {
        console.log(err)
      }

});


app.listen(3001,()=>{
    console.log("servidor corriendo");
});

