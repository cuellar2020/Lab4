const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas

app.get("/", (req, res) => {

    return res.send("Bienvenido usuario");

});
app.get("/clientes", (req, res) => {


  res.json([{ Cliente: 'Flavio' ,DNI: '7589658'},
  {Cliente:'Martin',DNI : '7849658'},
  { Cliente: 'Laura', DNI: '47859658'}])
 

});
app.get("/productos", (req, res) => {

  res.json([{ Producto: 'Leche' ,Precio: '3.50'},
  {Producto:'Lentejas', Precio: '8.00'},
  { Producto: 'Arroz', Precio:'15'}])
 

});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).render("404");
});



//iniciamos el servidor
const port = 3000;
app.listen(port, () => {
  console.info(`Servidor escuchando en puerto: ${port}`);
});