const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
    username: { required: true, type: string, unique: true },
    password: { required: true, type: string },
    email: { required: true, type: string, unique: true },
    phone: { required: true, type: string },
    role: {
        required: true,
        type: string,
        enum: ['customer', 'admin'],
        default: 'customer',
    },
});
module.exports = mongoose.model('User', userSchema);
