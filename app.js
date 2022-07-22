const express = require('express');

let app = express();

//console.log(app)


//routing response
app.get('/', (req,res)=>res.send("Olá mundo"));
app.get('./contato', (req,res)=>res.send(["contato12","contato526"]));

//criando servidor usando express   
app.listen(2000,()=> console.log("servidor rodando na porta 2000...")
)