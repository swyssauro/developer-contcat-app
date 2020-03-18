const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    url_cat: {
        type: String,
        required: true,
        min: 6
    },
    emoji_n: {
        type: String,
        required: true,
        min: 6
    }
});


module.exports = mongoose.model('cats', catSchema);