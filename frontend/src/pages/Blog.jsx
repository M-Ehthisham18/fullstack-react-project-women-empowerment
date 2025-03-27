import React, { useEffect, useState } from "react";
import Share from "../components/Share";
import { useAuthStore } from "../stores/useAuthStore";
import { usePostStore } from "../stores/usePostStore";
import Post from "../components/Post.jsx";

const Blog = () => {
  const { authUser } = useAuthStore();
  const {createPost}= usePostStore()
  const { getAllPosts } = usePostStore();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts(); // Fetch posts from the store
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [getAllPosts,posts]);

  return (
    <div className="max-w-3xl mx-auto p-2 sm:p-[2.5rem]">
      <Share />
      <hr className="w-full mt-2 border-1 border-black" />
      <h3 className="pl-4 font-extrabold pt-4">All Posts :</h3>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available</p>
      ) : (
        posts.map((post) => <Post key={post._id} post={post} />) // Pass post data as prop
      )}
    </div>
  );
};

export default Blog;
