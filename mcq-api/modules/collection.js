const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    nQs: {
        type: Number,
        required: true
    },
    qIds: {
        type: [mongoose.Types.ObjectId],
        required: true,
        ref: 'MCQ'
    }

})

module.exports = mongoose.model('Collection', collectionSchema );