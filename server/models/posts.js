const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema for Post
const Post = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  img: String,
  price: Number,
  postType: String,
  avgRating: {type: Number, default: 0},
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, rating: Schema.Types.rating, ref: 'Comment' }]
},{
    collection: 'posts'
});


module.exports = mongoose.model('Post', Post);