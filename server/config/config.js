//================================================
//  Puerto
//================================================
<<<<<<< HEAD
process.env.PORT = process.env.PORT || 3000;
=======
process.env.PORT = process.env.PORT || 3000;
//================================================
//  Entorno
//================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//================================================
//  Base de datos
//================================================
let urlDB;
if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb: //localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB; 

>>>>>>> c32407a456402cf3630148d20e72a4283d0a5dd9
