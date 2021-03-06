const express = require('express');
const router = express.Router();
const Comment = require('../../models/comments')
const Post = require('../../models/posts')

router.post('/:id/comment', (req, res) => {
    const comment = new Comment(req.body);
    comment
    .save()
    .then(some => {
        return Post.findById(req.params.id)
    })
    .then(post => {
        post.comments.push(comment)
        return post.save()
    })
    .catch(err => {
        console.log(err)
    })
})
router.route('/all/comment').get(function (req, res) {
    Comment.find(function(err, comment){
    if(err){
      res.json(err);
    }
    else {
      res.json(comment);
    }
  });
});


module.exports = router;
