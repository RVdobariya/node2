const jwt = require("jsonwebtoken");
const { user } = require('/Users/dreamworld/Desktop/node/schema/userSchema.js');

module.exports.login = async (req, res) => {
    console.log("user name = " + req.body.title);
    const id = req.query.id;
    try {
        const doc = await user.findOne({ title: req.body.title });
        console.log("document == " + doc);
        if (doc == null) {
            return res.status(400).json({ "message": "User not found" });
        } else {
            var { title } = doc.title;
            const token = jwt.sign({ "id": doc.id, "title": doc.title },
                "DAx2a1hS/+WR3XUx98iuYlrecyqQkC0rGRT90JJynNE=", {
                expiresIn: 100000
            });
            return res.json({ title, token, msg: "Login Success" });
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ "message": e.message });
    }
}

module.exports.verifyToken = async (req, res) => {
    try {
        const decode = jwt.verify(req.body.token, 'DAx2a1hS/+WR3XUx98iuYlrecyqQkC0rGRT90JJynNE=');

        console.log("decode == " + decode.user);
        res.json({
            login: true,
            data: decode
        });

    } catch (e) {
        console.log(e);
        res.status(400).json({ "message": e.message });
    }
}