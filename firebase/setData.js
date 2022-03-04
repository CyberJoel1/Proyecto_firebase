const firebase = require("./firebase_connect")
var nodemailer = require('nodemailer');
const details = require("./details.json");
const saveData= async (req,res)=>{
  const {name, email, cedula, persona, curso}= req;
 await firebase.firestore().collection('registro').doc().set({
      name: name,
      email: email,
      cedula: cedula,
      persona: persona,
      curso: curso,
      alumn_Accept: true,
      teacher_Accept: false
    });
  res(null, {"message": "exitoso"})
}
const getData= async (req,res)=>{
  const Ref = firebase.firestore().collection('registro');
  const query = await Ref.where('alumn_Accept', '==',true).where('teacher_Accept', '==',false).get()

  
  let final = [];
  query.forEach(doc => {
    //console.log(doc.data());
    //console.log(doc.id)
    const union = {
      id: doc.id 
    };
    const finalResult = Object.assign(union,doc.data());
    console.log(finalResult)
    final.push(finalResult)
  });
  res(null,final)
}
const AcceptData= async (req,res,next)=>{
  console.log("llegue")

  const {id,email}= req;
  await firebase.firestore().collection("registro").doc(id).update({teacher_Accept: true});
  const Ref = firebase.firestore().collection('registro');
  const query = await Ref.doc(id).get()
   console.log("aqui despues")
  console.log(query.data().email)
  sendMail(query.data(),"Aceptado", info => {
    console.log(`El correo se envió 😃 con el siguiente id ${info.messageId}`);
  });
  
}



const RetailData= async (req,res,next)=>{
  console.log("llegue")
  const {id}= req;
  firebase.firestore().collection("registro").doc(id).update({alumn_Accept: false});
  const Ref = firebase.firestore().collection('registro');
  const query = await Ref.doc(id).get()
   console.log("aqui despues")
  console.log(query.data().email)
  sendMail(query.data(),"Rechazado", info => {
    console.log(`El correo se envió 😃 con el siguiente id ${info.messageId}`);
    
  });
  
}
/*
const getData= async (req,res)=>{


  const {id}= req;
  console.log('No matching documents.');
  const Ref = firebase.firestore().collection('login');
  const query = await Ref.where('cedula', '==',id).where('password','==',password).get()
  if (query.empty) {
    console.log(name+" - "+password);
    res(null, {"message": "no exitoso"})
  }else{
    res(null, {"message": "exitoso"})
  }

}*/


async function sendMail(user, mensaje, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"👋¡REGISTRO Existoso!📩"<example.gimail.com>', 
    to: user.email, 
    subject: "Bienvenido a nuestra plataforma de cursos de la ESPE",
    html: `
    <div class="mensaje" style="
    width: 80%;
    margin: 10% auto;    
    padding: 15px;
    background-color: #8cd8968a;
    justify-content: center;
    border-radius: 3px;
    text-align: center;
    font-family: sans-serif;
    color: rgb(77, 77, 80);
">
    <div class="mensaje_img_logo">
        <img style="
        height: 50px;
        padding: 15px;
        " src="https://santodomingo.espe.edu.ec/wp-content/uploads/2019/12/SedeSantoDomingo.png">
    </div>
    <div class="mensaje_titulo" style="
    font-size: x-large;
    font-feature-settings: 'smcp';
    font-variant: small-caps;
    letter-spacing: 3px;
    background-color: #8adc87;
    padding: 10px;
    font-weight: 550;
    ">
        Curso de Angular.
    </div>
    <div class="mensaje_img">
        <img style="
        height: 50px;
        float: left;
        padding: 15px 15px 15px 0;
    </div>
    <div class="mensaje_contenido">
        <h1 style="
        font-size: larger;
        letter-spacing: 1px;
        padding: 20px;
        "> ¡Hola! ${user.name} has sido ${mensaje}👋</h1>
        <p class="contenido" style="
        line-height: 2;
        padding: 20px;
        "> Gracias por inscribirte a nuestro curso de <b>${user.curso}</p>
        <p class="agradecimiento" style="font-weight: 550;">¡Gracias por preferirnos! 🎅</p>
        <p class="contacto" style="font-weight: 550;">Si tienes dudas, contáctate con nosotros.</p>
    </div>
</div>`



    
  };

  let info = await transporter.sendMail(mailOptions);

  callback(info);
}


module.exports = {
    saveData,
    getData,AcceptData,RetailData
}
//export GOOGLE_APPLICATION_CREDENTIALS=

