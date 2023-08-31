const express = require('express');
const collectionSchema = require('../modules/collection');
const mcqSchema = require('../modules/mcq')
const router = express.Router();



router.get('/collections', (req, res) => {
    console.log('I am /collections');
    res.send("collection")
})

router.get('/collections/:id', (req, res) => {
    console.log(req.params);
    res.send(`collection ${req.params.id}`)
})


router.post('/collection/insert', async (req, res) => {
    //console.log(req.body.mcq[2]);

    try {
        const { title, author, mcqs} = req.body; 
        const  nQs = mcqs.length;
        
        const mcqIds = [];
        for(const mcq of mcqs  ){
            const mcqS = new mcqSchema({...mcq});
            const savedMcq = await mcqS.save();
            mcqIds.push(savedMcq._id);
        }


        const collection = new collectionSchema({
            collectionId: 5,
            title: title,
            author: author,
            nQs: nQs,
            qIds: mcqIds
        });

        await collection.save(); 
        res.status(201).json({ message: 'Data received and saved successfully', mcqIds });
    }catch(err) {
        res.status(500).json({ error: 'Internal server error' });
    }

    
    
})
module.exports = router