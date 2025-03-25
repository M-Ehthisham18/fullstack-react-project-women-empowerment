import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userId : {
      type : String,
      required : true,
    },
    desc : {
      type : String,
      max : 1200
    },
    image : {
      type : String,
    },
    likes : {
      type : Array,
      default : []
    },
    dislikes : {
      type : Array,
      debugger : []
    }
  },
  {
    timestamps : true,
  }
)

const Post = mongoose.model('Post', PostSchema);
export default Post;