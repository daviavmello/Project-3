const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    budgetItem: [
        {
            type:  Schema.Types.ObjectId,
            ref: "Budget"
        }
    ]
});

module.exports = User = mongoose.model("User", UserSchema);