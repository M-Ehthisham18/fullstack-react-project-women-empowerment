import React, { useEffect, useState } from "react";

import Post from "../Post";
import { useAuthStore } from "../../stores/useAuthStore";
import { usePostStore } from "../../stores/usePostStore";

const MyPosts = () => {
    const {
      authUser,
    } = useAuthStore();
  
    const { getAllPosts } = usePostStore();
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    let x = [];
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const data = await getAllPosts(); // Fetch posts from the store
          if (Array.isArray(data)) {
            data.map((d) => {
              if (d.userId === authUser._id) {
                x.push(d);
                setUserPosts(d);
              }
              setPosts(x);
            });
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
    <>
      {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available</p>
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />) // Pass post data as prop
        )}
    </>
  )
}

export default MyPosts
