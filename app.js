//importando o express
const express = require('express');

//const req = require('express/lib/request');

let app = express();


//routing response ou resposta da rota
app.get('/', (req,res)=>res.send("Olá mundo"));
app.get('/contatos', (req,res)=>res.send("página de contatos"));

//rotas parametrizadas ou rotas dinâmicas
app.get('/produtos/:id?', (req,res)=>{
    let {id} = req.params;
    res.send("eu tenho o produto com o id: " +   id)
});

//criando servidor usando express   
app.listen(2000,()=> console.log("servidor rodando na porta 2000...")
)