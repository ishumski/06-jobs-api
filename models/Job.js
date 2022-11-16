const mongoose = require("mongoose")

const JobSchema = mongoose.Schema({
    company: {
        type: String,
        require: [true, 'Please, provide company name'],
        maxLength: 50
    },
    position: {
        type: String,
        require: [true, 'Please, provide company position'],
        maxLength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: [true, 'Please, provide user']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', JobSchema)