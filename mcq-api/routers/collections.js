const express = require('express');
const collectionSchema = require('../modules/collection');
const mcqSchema = require('../modules/mcq')
const router = express.Router();



router.get('/collections', (req, res) => {
    collectionSchema.find()
        .then(collections => {
            res.status(200).json(collections);
            // console.log(res);
        }).catch(err => {
            // console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        })

})

router.get('/collections/:id', async (req, res) => {

    try {
        const collectionId = req.params.id;

        // receive the collection by id 
        const collection = await collectionSchema.findById(collectionId);

        if (!collection) {
            return res.status(404).json({ error: 'Collection not found' });
        }

        const mcqIds = collection.qIds;

        const mcqs = await mcqSchema.find({ _id: { $in: mcqIds } });

        const collectionWithMCQs = {
            _id: collection._id,
            title: collection.title,
            author: collection.author,
            mcqs: mcqs,
        };

        res.status(200).json(collectionWithMCQs);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }

})



router.post('/collection/insert', async (req, res) => {

    try {
        const { title, author, mcqs } = req.body;
        const nQs = mcqs.length;

        const mcqIds = [];
        for (const mcq of mcqs) {
            const mcqS = new mcqSchema({ ...mcq });
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
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})
module.exports = router