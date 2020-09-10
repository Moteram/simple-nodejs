const mongoose = require('mongoose');
const User = mongoose.model('Users');
const crypto = require('crypto');

function senhacripto(senha, salt){
  var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
  hash.update(senha);
  var hash = hash.digest('hex');
  return hash
};


module.exports = {

  async exibirTodos(req, res){
    const usuarios = await User.find();
    return res.json(usuarios);
  },
  async cadastro(req, res){    
    
    const usuario = await User.create({
      nome:req.body.nome,
      senha: senhacripto(req.body.senha, 'asdasd'),
      email: req.body.email,
    });
    return res.json(usuario);
  },

}