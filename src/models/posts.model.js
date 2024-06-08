const mongoose = require('mongoose');

const modelName = 'posts'

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 150,
    },
    image: {
        type: String,
        required: false,
        validate: {
            validator: function(v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    body: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    created_at: {
        type: Date,
        default:Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports.model(modelName, schema);