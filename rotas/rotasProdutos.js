const express = require("express");

const router = express.Router();

router.get('/criar',(req,res)=>{res.send("oi, criando produto...")})
router.get('/deletar',(req,res)=>{res.send("oi, deletando produto...")})
router.get('/alterar', (req,res)=>{res.send("alterando meu produto!")})

module.exports = router;