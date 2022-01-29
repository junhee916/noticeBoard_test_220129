const mongoose = require('mongoose')
const modelSchema = mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user',
            required : true
        },
        board : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'board',
            required : true
        },
        commend : {
            type : String,
            requried : true
        }
    },
    {
        timestamps : true
    }
)
module.exports = mongoose.model('commend', modelSchema)