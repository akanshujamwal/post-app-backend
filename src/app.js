const express = require('express')
const postModel = require('./models/post.model')

const app = express()
app.use(express.json())
app.post('/addPost', async (req, res) => {
    const data = req.body
    await postModel.create({

        image: data.image,
        caption: data.caption

    })

    res.status(201).json({
        message: "Post created sucessfully"
    })
})

// get notes list
app.get('/getPosts', async (req, res) => {

    const notes = await postModel.find() // find always sends array  and findone it give me one object 
    res.status(200).json({
        message: "Post feched sucessfully",
        notes: notes

    })
})

module.exports = app;