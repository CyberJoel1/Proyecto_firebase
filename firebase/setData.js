const firebase = require("./firebase_connect")

module.exports = {
    saveData: (req,res)=>{
        const {name, email, cedula, persona, curso}= req;
        firebase.firestore().collection('registro').doc().set({
            name: name,
            email: email,
            cedula: cedula,
            persona: persona,
            curso: curso,
          });
        res(null, {"message": "exitoso"})
    }
}
