const axios = require('axios');
//const { all } = require('../routes');
const API_KEY = process.env;


// const videogames = (req, res) => {
//     res.send('hola')
// }
const videogames = async (req, res) => {
    try{
        const name = req.query.name;
        const allVideogames = await axios.get(`https://api.rawg.io/api/games?key=c6f6a20e5c7847bd88e95f0e3fcc07d5`);
        res.json(allVideogames.data);
    } catch (error) {
        res.status(400).json({ msg: 'Server error'});
    }
}

module.exports = {
    videogames
}