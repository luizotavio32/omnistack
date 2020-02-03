const axios = require('axios')
const Dev = require('../models/dev')
const ParseStringAsArray = require('../utils/ParseStringAsArray')


module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs)
    },

    async store(request, response) {
        const { gh_username, techs } = request.body

        let dev = await Dev.findone({gh_username})

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${gh_username}`)
            const {name = login, avatar_url, bio} = apiResponse.data

            
        
            const techsArray = ParseStringAsArray(techs)
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                gh_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
        
            })

        }

        
        
        
    
        return response.json(dev)
    },

    async update() {

    },

    async delete() {

    }
}