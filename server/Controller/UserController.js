const AuthModel =require("../Model/AuthModel");
const Admin =require("../Model/Admin");



exports.getUsername = async (req, res) => {
    try {
        const { email, role } = req;

        let userData;

        if (role === "user") {
            userData = await AuthModel.findOne({ email }).select("username");
        } else if (role === "admin") {
            userData = await Admin.findOne({ email }).select("username");
        }

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ username: userData.username });

    } catch (err) {
        console.error("Error in getUsername controller:", err);
        return res.status(500).json({ message: "Server error" });
    }
};



exports.getProfileData = async (req, res) => {
    try {
        const { email, role } = req;

        let userData;

        if (role === "user") {
            userData = await AuthModel.findOne({ email }).select("username number email");
        } else if (role === "admin") {
            userData = await Admin.findOne({ email }).select("username number email");
        }

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            username: userData.username,
            number: userData.number,
            email: userData.email
        });

    } catch (err) {
        console.error("Error in getUserData controller:", err);
        return res.status(500).json({ message: "Server error" });
    }
};
