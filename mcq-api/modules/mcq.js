const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({ 
    question:{
        type: String,
        required: true
    },
    selections:{
        type: [String],
        required: true
    },
    answers: {
        type: [Number],
        required: true
    }

})

module.exports = mongoose.model('MCQ', mcqSchema );