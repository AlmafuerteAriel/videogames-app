const videogames = async (req, res) => {
    res.status(200).json({ msg: '/videogames'});
}

module.exports = {
    videogames
}