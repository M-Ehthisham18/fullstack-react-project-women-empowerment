import { create } from "zustand";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore.js";
import axiosInstance from "../lib/axios.js";

export const usePostStore = create((set, get) => ({
  isCreatingPost: false,
  isAllPostGetting: false,
  isUserGetting: false,
  isPostDeleting: false,
  authUser: null,
  createPost: async (data) => {
    set({ isCreatingPost: true });
    try {
      const res = await axiosInstance.post("/post", data);
      toast.success(res.data?.message);
      return (res.data);
    } catch (error) {
      console.log("error in createPost : ", error.response?.data);
      toast.error(error.response?.data?.message || "Error in creating Post.");
    } finally {
      set({ isCreatingPost: false });
    }
  },

  getAllPosts: async () => {
    set({ isAllPostGetting: true });
    try {
      const res = await axiosInstance.get("/posts");
      // console.log(res.data[0]?.userId);

      return res.data;
    } catch (error) {
      console.log("error in getting all post : ", error);
    } finally {
      set({ isAllPostGetting: false });
    }
  },

  getUser: async (userId) => {
    set({ isUserGetting: true });
    try {
      const res = await axiosInstance.get(`/post-details/${userId}`);
      return res.data; // Return the user data
    } catch (error) {
      console.log("Error fetching user:", error.response?.data || error);
      return null;
    } finally {
      set({ isUserGetting: false });
    }
  },

  getSinglePost: async (id) => {
    try {
      const res = await axiosInstance.get(`/post/${id}`);
      console.log("Fetched Post:", res.data);
      return res.data; // Return the post data
    } catch (error) {
      console.error("Error fetching post:", error);
      return null; // Handle errors gracefully
    }
  },

  deletePost: async (id, userId) => {
    set({ isPostDeleting: true });
    try {
      const res = await axiosInstance.post("/delete-post", { id, userId });
      toast.success("Post deleted successfully");
      return res.data;
    } catch (error) {
      console.log("Error in deleting post:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to delete post");
      return null;
    } finally {
      set({ isPostDeleting: false });
    }
  },

  savePost: async (postId, userId) => {
    try {
      const res = await axiosInstance.post(`/save-post/${postId}`, { userId });      
      toast.success(res.data?.message )
      return res.data?.value;
    } catch (error) {
      toast.success(error.response?.data?.message || error.data )
      console.error("Error saving post:", error);
    }
  },

  getSavedPost : async (postId,userId) => {
    try {
      const res = await axiosInstance.get(`/saved-posts?postId=${postId}&userId=${userId}`);
      return res.data; // Return the fetched post
    } catch (error) {
      console.error("Error fetching saved post:", error);
      return null; // Return null if an error occurs
    }
  },
  
}));
