import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import Post from "../Post";
import { usePostStore } from "../../stores/usePostStore";

const SavedPosts = () => {
  const { authUser } = useAuthStore();
  const { getSavedPost } = usePostStore();
  const [savedPosts, setSavedPosts] = useState([]); // State to store fetched posts

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const fetchedPosts = await Promise.all(authUser.savedPost.map((postId) => getSavedPost(postId,authUser._id)));
        setSavedPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching saved posts:", error);
      }
    };

    if (authUser?.savedPost?.length) {
      fetchSavedPosts();
    }
  }, [authUser, getSavedPost,savedPosts]); // Runs when authUser or getSavedPost changes
  

  return (
    <div className="hello">
  <h2 className="text-xl font-semibold mb-4">Saved Posts</h2>
  {savedPosts.length === 0 ? (
    <p className="text-center text-gray-500">No posts available</p>
  ) : (
    [...savedPosts].reverse().map((post) => <Post key={post?._id} post={post} />) // Reverse order
  )}
</div>

  );
};

export default SavedPosts;
