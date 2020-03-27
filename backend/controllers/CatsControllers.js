const Cat = require('../models/cat');

module.exports = {
    index(req, res) {
        Cat.find()
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('error' + err));
    },

    async create(req, res) {
        const cat = new Cat({
            post_name: req.body.post_name,
            url_cat: req.body.url_cat,
            tag_cat: req.body.tag_cat,
            post_p: req.body.post_p
        });

        try {
            await cat.save();
                res.send({ cat: cat._id });
            } catch (err) {
                res.status(400).send(err);
            }
    },

    find(req, res) {
        Cat.findById(req.params.id)
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('error' + err));
    },

    update(req, res) {
        Cat.findById(req.params.id)
        .then(cats => {
            cats.post_name = req.body.post_name;
            cats.url_cat = req.body.url_cat;
            cats.tag_cat = req.body.tag_cat;
            cats.post_p = req.body.post_p;
        
            cats.save()
                .then(() => res.json(cats))
                .catch(err => res.status(400).json('error' + err));
            })
                .catch(err => res.status(400).json('error' + err));
    },

    delete(req, res) {
        Cat.findByIdAndDelete(req.params.id)
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('error' + err));
    }
}