// Create web server
// 1. Install express
// 2. Create server
// 3. Create route
// 4. Run server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = require('./comments');

app.get('/comments', (req, res) => {
    const commentsList = comments.getComments();
    res.json(commentsList);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.addComment(newComment);
    res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.deleteComment(id);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running');
}); 