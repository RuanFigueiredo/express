const express = require('express');
const ProdutoController = require('../controllers/ProdutoController')

const router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar', (req, res)=>res.send("deletando um produto"));


module.exports = router;
