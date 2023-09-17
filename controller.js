const TaskModel = require("./model");

module.exports.getSites = async (req, res) => {
    const userdata = await TaskModel.find();
    res.send(userdata);
};

module.exports.saveSite = (req, res) => {
    const { email,username } = req.body;
  
    TaskModel.create({ email,username })
      .then((data) => {
        console.log("Saved Successfully...");
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
    });
};
