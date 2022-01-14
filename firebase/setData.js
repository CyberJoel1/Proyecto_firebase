const firebase = require("./firebase_connect")

module.exports = {
    saveData: (req,res)=>{
        const name= req.nombre;
        const correo= req.email;
        firebase.firestore().collection('pruebas').doc().set({
            nombre: name,
            email: correo
          });
        res(null, {"message": "exitoso"})
    }
}
