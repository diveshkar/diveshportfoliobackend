const messageModal = require('../modals/messageModal');

const saveMessage = async (req, res) => {
    console.log(req);
    try {
        const {name , phone , email, messagetitle, message} = req.body
        const newMessage = await messageModal.create({
            name: name,
            phone: phone,
            email: email,
            messagetitle: messagetitle,
            message: message
        })
        res.status(200).json({message: "message send successfully", success:true});
    } catch (error) {
    //   console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  module.exports = {saveMessage};