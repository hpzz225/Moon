const User = require('../models/User');

const authController = {
    register: async (req, res, next) => {
        const { username, email, phone, password } = req.body;
        if (!username || !email || !phone || !password) {
            return next(createError(400, 'All fields are required'));
        }
        const userExists = await User.findOne({
            phone,
        });
        if (userExists) {
            return next(createError(400, 'User already exists'));
        }
    },
};

module.exports = authController;
