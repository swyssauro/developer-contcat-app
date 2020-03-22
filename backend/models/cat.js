const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    post_name: { type: String, required: true, min: 6 },
    url_cat: { type: String, required: true, min: 6 },
    tag_cat: { type: String, required: true, min: 6 },
    post_p: { type: String, required: true, min: 6 }
});


module.exports = mongoose.model('cats', catSchema);