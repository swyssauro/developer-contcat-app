const router = require('express').Router();
const Cat = require('../models/cat');

router.post('/add', async (req, res) => {
    const cat = new Cat({
        url_cat: req.body.url_cat,
        emoji_n: req.body.emoji_n
    });
    try {
        const saveUser = await cat.save();
        res.send({ cat: cat._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    User.find()
    .then(cat => res.json(cat))
    .catch(err => res.status(400).json('It error' + err));
});

module.exports = router;