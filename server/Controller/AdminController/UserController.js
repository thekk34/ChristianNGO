const AuthModel = require('../../Model/AuthModel');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await AuthModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single user by email
exports.getUserByEmail = async (req, res) => {
    try {
        const user = await AuthModel.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await AuthModel.findOneAndUpdate(
            { email: req.params.email },
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        await AuthModel.findOneAndDelete({ email: req.params.email });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
