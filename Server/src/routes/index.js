const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const getAllChars = require('../controllers/getAllChars')

const router = require('express').Router();

router.get('allCharacters', async (req, res) => {
    try {
        const allCharacters = await getAllChars();
        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(404).send('Hubo un error en /allCharacters')    
    }

})
router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

router.get('/login', (req, res) => {
    login(req, res);
});

router.post('/fav', (req, res) => {
    postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
});

module.exports = router;

