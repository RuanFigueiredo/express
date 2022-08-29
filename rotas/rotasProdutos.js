const express = require("express");

const router = express.Router();
//const ContatoController = require("../controllers/ContatoController");

/*router.get('/', function(req,res){
    res.render("index",{ title:"express"}); 
})*/

router.get('/criar',(req,res)=>{res.send("oi, criando produto...")})
router.get('/deletar',(req,res)=>{res.send("oi, deletando produto...")})
router.get('/alterar', (req,res)=>{res.send("alterando meu produto!")})

//router.get("/contato", ContatoController.index);

module.exports = router;