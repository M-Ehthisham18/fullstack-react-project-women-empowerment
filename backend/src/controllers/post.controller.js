import Post from "../models/post.model.js";
import User from "../models/user.model.js";
// get all posts (timeline posts)
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Fetch all posts, sorted by newest first

    if (!posts.length) {
      return res.status(404).json({ message: "No posts found" });
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const postDetails = async (req, res) => {
  try {
    const { userId } = req.params; // Extract userId properly

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId).select("-password -__v");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user); // Send response to frontend
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// get user:id post

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// create a post
const createPost = async (req, res) => {
  try {
    const { desc, userId, img } = req.body;

    if (!desc) {
      return res.status(400).json({ message: "Description is required!" });
    }

    if (!userId) {
      return res.status(400).json({ message: "User not found!" });
    }

    const newPost = new Post({
      userId,
      desc,
      image: img,
    });

    await newPost.save();
    return res
      .status(201)
      .json({ message: "Post created successfully!", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    //const { id } = req.params; // Get ID from params
    const { userId, id } = req.body;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    if (post.userId.toString() !== userId || post.userId !== userId) {
      return res
        .status(404)
        .json({ message: "You can delete only your post!" });
    }
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const savePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found!" });

    const isPostSaved = user.savedPost.includes(postId);

    await User.findByIdAndUpdate(
      userId,
      {
        [isPostSaved ? "$pull" : "$push"]: { savedPost: postId },
      },
      { new: true } // Return the updated user document
    );

    res.status(200).json({
      message: isPostSaved
        ? "Post removed from saved!" 
        : "Post saved successfully!",
        value: isPostSaved
        ? false
        : true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const savedPosts = async (req, res) => {
  try {
    const { postId ,userId  } = req.query; // Extract postId from query params
    
    if (!postId) {
      return res.status(400).json({ message: "Post ID is required!" });
    }

    const post = await Post.findById(postId);
    
    if (!post) {
      console.log(userId);
      if (userId) {
        
        await User.findByIdAndUpdate(userId, {
          $pull: { savedPost: postId },
        });
      }
      return res.status(200).json(null); // Return success response
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching saved post:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};


export {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  postDetails,
  savePost,
  savedPosts,
};
