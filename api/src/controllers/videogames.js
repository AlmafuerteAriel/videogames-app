const axios = require('axios');
//const { all } = require('../routes');
const API_KEY = process.env;


// const videogames = (req, res) => {
//     res.send('hola')
// }
const videogames = async (req, res) => {
    try{
        const name = req.query.name;
        const allVideogames = await axios.get(API_KEY);
        res.json(allVideogames.data);
    } catch (error) {
        res.status(400).json({ msg: 'Server error'});
    }
}

module.exports = {
    videogames
}