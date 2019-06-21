/**
 *  File: produto.js
 * Author: Carlos Farias
 * Description: É o arquivo responsável onde será tratado o modelo da classe 'Produto'.
 * Date: 20/06/2019 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Produto:
 * 
 * -> Id: int
 * -> Nome: String
 * -> Preco: Number
 * -> Descricao: String
 * 
 */

var ProdutoSchema = new Schema({
       nome: String,
       preco: Number,
       descricao: String
   });

module.exports = mongoose.model('Produto', ProdutoSchema);