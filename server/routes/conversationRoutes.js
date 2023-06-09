const router = require("express").Router(); 
const Conversation = require("../models/conversationModel"); 


router.post('/', async (req, res) => { 
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.recieverId], 
    }); 

    try {
        const savedConversation = await newConversation.save(); 
        res.status(200).json(savedConversation);

    }catch (err) { 
        res.status(500).json(err)
    }
})

router.get('/:userId', async (req, res) => { 
    try {
        const conversation = await Conversation.find({
            members: {$in:[req.params.userId]}
        })
        res.status(200).json(conversation); 
        
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router; 