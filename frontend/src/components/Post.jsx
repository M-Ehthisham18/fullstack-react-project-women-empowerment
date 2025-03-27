import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { MoreVert } from "@mui/icons-material";
import {
  format,
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
  differenceInYears,
} from "date-fns";
import { usePostStore } from "../stores/usePostStore";
import { Heart, Bookmark } from "lucide-react";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuthStore } from "../stores/useAuthStore.js";

const Post = ({ post }) => {
  const { authUser } = useAuthStore();
  const [userPost, setUserPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getUser, deletePost, savePost } = usePostStore();
  const [value, setValue] = useState(false);

  if (!post) return null;
  const { _id, userId, desc, image, createdAt } = post;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId);
        if (userData) {
          setUserPost(userData);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [_id, getUser, userId, value, authUser._id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const savePostHandler = async () => {
    const userId = authUser._id;
    await savePost(_id, userId);
    setValue((prev) => !prev);
  };

  useEffect(() => {
    // Check if the post is already saved by the user
    if (authUser?.savedPost?.includes(_id)) {
      setValue((prev) => !prev);
    }
  }, [authUser, _id]);

  const shareHandler = () => {
    const postURL = `${window.location.href}`;
    navigator.clipboard
      .writeText(postURL)
      .then(() => alert("Link copied to clipboard"))
      .catch((err) => console.log(err));
  };

  const deletePostHandler = async () => {
    try {
      const userId = authUser._id;
      await deletePost(_id, userId);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="w-full rounded-lg shadow-none p-4 my-6 bg-white drop-shadow-[0px_0px_8px_rgba(0,0,0,0.18)]">
      <div className="flex justify-between items-center sm:px-4 ">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={userPost?.profilePic || avatar}
            alt="Profile"
          />
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900">
              {userPost?.fullName || "Unknown User"}
            </span>
            <span className="block text-sm text-gray-500">
              {(() => {
                const postDate = new Date(createdAt);
                const now = new Date();
                const hoursDiff = differenceInHours(now, postDate);
                const minutesDiff = differenceInMinutes(now, postDate);
                const daysDiff = differenceInDays(now, postDate);
                if (hoursDiff < 24) {
                  return hoursDiff > 0
                    ? `${hoursDiff} hr ago`
                    : minutesDiff > 0
                    ? `${minutesDiff} min ago`
                    : "just now";
                }
                if (daysDiff < 7) {
                  return `${daysDiff}d`;
                }
                return format(postDate, "dd-MMM-yyyy");
              })()}
            </span>
          </div>
        </div>
        <div className="relative menu-container">
          <MoreVert
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-5 top-0 mt-2 w-36 bg-white border rounded-lg shadow-lg">
              <ul className="text-left text-gray-800">
                <li
                  className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={shareHandler}
                >
                  <ShareIcon className="w-4 h-4 mr-2 text-gray-700" /> Share
                </li>
                <li
                  className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={savePostHandler}
                >
                  <Bookmark
                    className={`size-6 mr-2 text-gray-700 ${
                      value ? "fill-gray-600" : "fill-none"
                    }`}
                  />
                  {value ? "Saved" : "Save"}
                </li>
                {authUser?._id === userId && (
                  <li
                    className="flex px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer"
                    onClick={deletePostHandler}
                  >
                    <DeleteIcon className="w-4 h-4 mr-2 text-red-500" /> Delete
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <span className="text-gray-800 text-sm flex text-start sm:px-4">
          {desc || "No description available"}
        </span>
        {image && (
          <img
            className="mt-4 w-full max-h-96 object-contain rounded-lg"
            src={image}
            alt="Post"
          />
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2 sm:px-4">
          <Heart className="w-5 h-5 text-red-500 cursor-pointer" />
          <span className="text-sm text-gray-600 ">People like it</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
