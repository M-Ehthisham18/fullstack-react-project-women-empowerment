import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Get `id` from URL
import { usePostStore } from "../stores/usePostStore";
import Post from "./Post.jsx"; // Reuse the Post component

const SinglePost = () => {
  const { id: postId } = useParams(); // Extract post ID from URL
  const { getSinglePost } = usePostStore();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getSinglePost(postId);
        if (postData) {
          setPost(postData);
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]); // Fetch post when `postId` changes

  if (!post) return <p className="text-center text-gray-500">Loading post...</p>;

  return (
    <div className="max-w-xl mx-auto p-2">
      <Post post={post} />
    </div>
  );
};

export default SinglePost;
