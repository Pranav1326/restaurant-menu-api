exports.login = async (req, res) => {
    try {
        res.status(200).json("login");
    } catch (error) {
        res.status(500).json(error);
    }
}