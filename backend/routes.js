const router = require('express').Router();

const CatsControllers = require('./controllers/CatsControllers');

router.get('/', CatsControllers.index);
router.post('/add', CatsControllers.create);
router.get('/:id', CatsControllers.find);
router.post('/update/:id', CatsControllers.update);
router.delete('/:id', CatsControllers.delete);

module.exports = router;