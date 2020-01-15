const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const devSchema = new mongoose.Schema({
    nome: String,
    gh_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }

})

module.exports = mongoose.model('dev', devSchema)