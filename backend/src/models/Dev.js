const mongoose = require('mongoose'); // informar para o banco de dados as caracteristicas do meu dado.
                                     // Schema é a estruturação de um dado dentro do banco de dados. 

const PointSchema = require('./utils/PointSchema');
const DevSchema = new mongoose.Schema({

    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
      type: PointSchema,
      index: '2dsphere'
    
    }
    
})

module.exports = mongoose.model('Dev', DevSchema);
