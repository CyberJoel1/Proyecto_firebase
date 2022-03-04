const firebase = require("./firebase_connect")
const saveData= async (req,res)=>{
  const {name, email, cedula, persona, curso}= req;
 await firebase.firestore().collection('registro').doc().set({
      name: name,
      email: email,
      cedula: cedula,
      persona: persona,
      curso: curso,
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
const AcceptData= async (req,res)=>{
  console.log("llegue")

  const {id}= req;
  firebase.firestore().collection("registro").doc(id).update({teacher_Accept: true});
}

const RetailData= async (req,res)=>{
  console.log("llegue")
  const {id}= req;
  firebase.firestore().collection("registro").doc(id).update({alumn_Accept: false});
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
module.exports = {
    saveData,
    getData,AcceptData,RetailData
}
//export GOOGLE_APPLICATION_CREDENTIALS=

