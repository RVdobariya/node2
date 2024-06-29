const { user } = require('/Users/dreamworld/Desktop/flutterfire/schema/userSchema.js');
const express = require('express');
const routes = express.Router();


routes.post('/adduser', async (req, res) => {
    console.log(req.body);
    if (req.query.name == undefined) {
        res.json({ Message: "Please define any name in quary param" });
    } else {
        const newUser = new user({
            title: req.body.title ?? ""
        });
        newUser.save()
            .then(doc => console.log('User inserted:', doc))
            .catch(err => console.error('Error inserting user:', err));
        res.json({ "message": "Success", "data": newUser });
        // fs.appendFile("users.json", JSON.stringify(newUser), (err) => {
        //     console.log(err);
        // });
    }
});

routes.get('/getUser', async (req, res) => {
    console.log(req.query.name == undefined ? "hello null" : "hii null");
    console.error(req.query.name);
    const newUser = new user({
        title: req.body.title
    });
    if (req.query.name != undefined) {
        var a = await user.find().where({ title: req.query.name }).sort({ title: +1 }).limit(req.query.limit);
        res.json(a);

    } else {
        var a = await user.find().sort({ title: +1 }).limit(req.query.limit);
        res.json(a);
    }
});

routes.put('/updateUser?:id', async (req, res) => {
    const id = req.query.id;
    try {
        if (id == null || id == undefined) {
            res.status(400).json({ message: "Please define ID as query params" });
        } else {
            const doc = await user.findOne({ _id: id });
            console.log("document == " + doc);
            if (doc == null) {
                res.status(400).json({ "message": "Document not found" });
            } else {
                const update = await doc.updateOne({ title: req.body.title, __v: req.body.__v });
                if (!update) {
                    res.status(400).json({ message: "Something went wrong" });
                } else {
                    const docs = await user.findOne({ _id: id });
                    res.status(201).json({ message: "success", data: docs });
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ "message": e.message });
    }

});

routes.delete('/deleteUser?:id', async (req, res) => {

    const id = req.query.id;
    console.log(id);
    const delet = await user.deleteOne({ _id: id });
    console.log("document == " + delet);
    if (!delet) {
        res.status(404).json({ message: "Something went wrong" });
    } else {

        res.status(201).json({ message: "delete successfully", });
    }
});


module.exports = routes;
