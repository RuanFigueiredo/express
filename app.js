//importando o express
const express = require('express');
const rotasProdutos = require('./rotas/rotasProdutos'); 
let app = express();


//routing response ou resposta da rota
app.get('/', (req,res)=>res.send("Olá mundo"));
//app.get('/contatos', (req,res)=>res.send("página de contatos"));

app.use('/produtos', rotasProdutos);

/*app.get('/produtos/:id?', (req,res)=>{
    let {id} = req.params;
    res.send("eu tenho o produto com o id: " +   id)
});*/

  
app.listen(2000,()=> console.log("servidor rodando na porta 2000...")
)