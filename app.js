const express = require('express');
const rotasProdutos = require('../express/rotas/rotasProduto');
let app = express();

//console.log(app)

//routing response
app.get('/', (req,res)=>res.send("Olá mundo"));
app.get('./contato', (req,res)=>res.send("página de contatos"));

app.use('/produtos', rotasProdutos);

//criando servidor usando express   
app.listen(2000,()=> console.log("servidor rodando na porta 2000...")
)