const firebase = require("firebase-admin");
const app= firebase.initializeApp({
    "type": "service_account",
    "project_id": "laboratorioavanzada",
    "databaseURL": "https://laboratorioavanzada-default-rtdb.firebaseio.com",
    "private_key_id": "c82caaa0258c9b32318524417fccc2b8ae5e3b04",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2+E5yjvMRsyS0\nsSgXJ50whMr/IPYuIOMEg/9hatSNXth2xVetKqbOY0r07Urz+aUKrlRv3Hhx1PJR\n0YssaeGWTr1qHaBV0THZ0gNK2IzT9sct7r6reyUys8lk+KrhDx2pD8UI2hL3h9I+\nJHyiLKWxc45wC6CIHuUdN/3lJDXyL+vdkGwJPGHnmemVm0xm8KIMHeTCtH1XZC4K\n1waJErWVaMPphD+tQF6+lgWFv40vzPLS0PpyX3kD4AMRpq1AbGmvlGO6nU0j1T9T\nGuHgw5L4hU0nxvOzK6YXD2I3+cYTBtOLeD0nC7ihL4bSJlt58BtRRuH8SLp+tbYY\nGD/3JgARAgMBAAECggEAHbVJf35IZzpQHmqZWNEcy7D0COLANhMu6R/Jina/Fkkt\nGnPGXZ6MQPyMQiJ5Rg3lx0sw+IyyncD2q2Q7lbWHZFFane07iFOUJYrc7/0jOJNc\nGdAm807mZkoczCE4FZzPsxCVbG+EHt7VuzNPbUGUkbBykyzAHvntN4ZM2jS78Zuh\n9pAKRBWfSrYp3lIw1E0ZiCiboPPRqY6EeTzAIwYJ18rnGCGP2od1Xwu5YPWz+KK1\nR7NsBTDnMpHvl4O6k41427UkpkaUdGSMIseWBFfbKNzLyhtHEA7aTHaCpe5naK/F\nyJp/MKIkwagdZjBm9nQy3N2c1gU/7mtwA4RXPf7p9QKBgQDh+R7nrw9Z2cKBaXVO\n8RKFP0jC6tSDj0DxOC7zEj9yFz90lXT/SGNLmlqolBEs/eCYWrcDFFE6FJff2Uqz\ne5PKBXAO53gpnqapP5d/vm6WU8qfmVWbTVA4p/MzSs8SVeXk/vLVc9+TabcLbz4e\nhc9C2MeGJAdAEt843DSQ/b9MwwKBgQDPSFsTOqOB7F2vIa6J/qmZIAV4OL7I+7zM\nYdf9h19zwctRhE3Na023WTqnuT1IAjljh3Ug2j6Lc5KqPwonECuW5zmQ3Pqu3Tva\nfS6h3Xs6Ee3VWbr1V+392I93TlXakOfnQBUbmgYf4XFV32+DD9CnLK39eXczXLh6\nhDkSG9MCmwKBgQCBZNwsgFKC+a1l2xRAIsyfHhC1BDCyMJpYRfqkVyObWfKM+HPp\nJfMtvHIDK9317F3p/6/iBIVKg7Y/iLY8tht3R8vVzPdCpcT7Dx3aGRpL3CkfYHbj\nmc7A0nLxQPn3ntYoXVCBp3szdwpIcueYJLj8pxMBHapFJ0lIztcO2y3qbwKBgDKF\n6l0Hf+8dE8CqLwbHocMHAQ5KloYahewzNRhAtM1cQRh/bQ9SxkCYaSmUhxFUKXTP\nAYeeanxHEUqZzvmygU1o0qkyk4+nsP0SYhlmCLEgyZ2lH2LJqeKjtGRaHacGht/g\nyMRPiIqgwqUxrtZ9NlhpFYeg4aMNSJHkRJzbV1VdAoGBALWaoScThyzXDx0S3Yv/\n9jBqUe2JlAJTRmFjQSi1IRBjbcdWuV5GG2Ixu1CGkqe7NH0U095mmpiuS2fCD72v\nVC4xduevTrIFrkxNpGEFkTzFwxnB2+BDtkUAcXxYyBFRdqHtobeEr/T9d6hKu3A9\nZ3MILVDkmcYjsyP3iA/eT0Y/\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-5vjwf@laboratorioavanzada.iam.gserviceaccount.com",
    "client_id": "100329951821697826187",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5vjwf%40laboratorioavanzada.iam.gserviceaccount.com"
});

module.exports= app;

