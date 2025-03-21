import {create} from 'zustand';
import axiosInstance from '../lib/axios.js'
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8080" : "/";

export const useAuthStore = create ( (set,get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isAccountDeleting : false,
  isCheckingAuth: true,

  checkAuth : async() => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({authUser : res.data})
    } catch (error) {
      set({authUser : null});
    } finally {
      set({ isCheckingAuth : false});
    }
  },

  signup : async (data) => {
    set( { isSigningUp : true}) ;
    try {
      const res = await axiosInstance.post('/auth/signup', data);
      // console.log(res.data?.userData);
      set({ authUser: res.data?.userData})
      toast.success(res.data?.message);
    } catch (error) {
      console.log("error in signup : ", error.response?.data) ;
      toast.error(error.response?.data?.message || "Error in creating Account.");
    } finally{
      set( {isSigningUp : false});
    }
  },

  login : async (data) => {
    set({isLoggingIn : true});
    try {
      const res = await axiosInstance.post('/auth/login', data);
      set({authUser : res.data?.userData});
      toast.success(res.data?.message);
    } catch (error) {
      console.log("error in login : ", error.response?.data);
      toast.error(error.response?.data?.message || "Error in logging in.");
    } finally {
      set ( { isLoggingIn : false });
    }

  },

  logout : async () => {
    try {
      await axiosInstance.post('/auth/logout');
      set({ authUser : null});
      toast.success("Logged out successfully.");
    } catch (error) {
      log("error in logout : ", error.response?.data);
      toast.error(error.response?.data?.message || "Error in logging out.")
    }
  },

  updateProfile : async (profilePic) => {
    set({ isUpdatingProfile : true });
    try {      
      const res = await axiosInstance.put('/auth/update-profile', profilePic);
      set( { authUser : res.data});
      
      if (res) {
        toast.success("Profile updated successfully.");
      }
    } catch (error) {
      console.log("error in updating profile.");
      toast.error(error?.response?.data?.message || "failed to update profile");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  deleteAccount : async (password) => {
    set({ isAccountDeleting : true});
    try {
      await axiosInstance.post('/auth/delete-account',{password},{withCredentials:true});
      set({authUser : null});
      toast.success("Account deleted successfully.")
    } catch (error) {
      console.error("Error in deleting account:", error);
      toast.error(error?.response?.data?.message || "Failed to delete account");
    } finally {
      set({ isAccountDeleting: false });
    }
  },
}))