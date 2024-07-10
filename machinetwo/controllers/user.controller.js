const UserModal = require("../modal/user.modal");

const registerUser = async (req,res)=> {
    try {
        const {name, email} = req.body;

        if(!email || !name){
            return res.status(400).send({"msg": "some fields are missing."})
        }

        const userAlreadyExist = await UserModal.findOne({email: email});
        if(userAlreadyExist && userAlreadyExist?._id){
            return res.status(400).send({"msg": "registration failed, user already exist."})
        }
        const user = new UserModal(req?.body);
        await user;
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send({"msg": "something went wrong."})
    }
}

module.exports = {registerUser}