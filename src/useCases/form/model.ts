import mongoose from 'mongoose';

const Schema: any = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
});
const MyModel = mongoose.model('BlogPost', BlogPost);

export default MyModel;
