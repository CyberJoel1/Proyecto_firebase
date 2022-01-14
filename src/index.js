const express=require('express');
const app = express();
const cors= require('cors');
const ofirebase = require("../firebase/setData");
//const { initializeApp, admin } = require('firebase-admin/app');
/*
const firebase = require('firebase');
const firestore = firebase.firestore();
*/
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

/*initializeApp({
    credential: admin.applicationDefault(),
    databaseURL: 'https://laboratorioavanzada.firebaseio.com'
});
*/
/*
  const db = firebase.initializeApp({
    apiKey: "AIzaSyDhI9i997U-15_u58RisME7m9JQUHq3seI",
    authDomain: "laboratorio2p.firebaseapp.com",
    projectId: "laboratorio2p",
    storageBucket: "laboratorio2p.appspot.com",
    messagingSenderId: "377719234887",
    appId: "1:377719234887:web:ac34609b917e6014862c62",
    measurementId: "G-PK06RKR6RE"
  });

  const app = getFirestore(db);
  */
app.get('/',(req,res)=>{
    res.send("Hola mundo")
});
app.post('/guardar',(req,res)=>{
    ofirebase.saveData(req.body,(err,data)=>{
        res.send(data);
    })
});
/*
*/



app.listen(3000,()=>{
    console.log("servidor corriendo");
});