import React, { useEffect, useState } from "react";
import { Loader, Pencil } from "lucide-react";
import avatar from "../../assets/avatar.png";
import { useAuthStore } from "../../stores/useAuthStore";
import { usePostStore } from "../../stores/usePostStore.js";

const UserDetails = () => {
  const { authUser, isUpdatingProfile,updateProfile, } = useAuthStore();
  const { getAllPosts } = usePostStore();
  const [userPosts, setUserPosts] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        if (Array.isArray(data)) {
          setUserPosts(data.filter((post) => post.userId === authUser._id));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [getAllPosts, authUser._id]);

  const handleEditProfile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="mt-6 md:flex max-w-3xl mx-auto border-b-2 border-black">
      <div className="relative w-[260px] h-[312px] p-1 border-2 border-black rounded-md my-6">
        {isUpdatingProfile ? (
          <div className="flex justify-center items-center h-full flex-col">
            <Loader className="animate-spin size-12" />
            <p className="text-sm text-zinc-700">Uploading...</p>
          </div>
        ) : (
          <img
            src={authUser?.profilePic || avatar}
            alt="Profile"
            className="w-[260px] h-[300px] object-cover object-center rounded-md"
          />
        )}

        <label
          htmlFor="avatar"
          className={`absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-75 ${
            isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
          }`}
        >
          <Pencil className="size-3.5 text-white" />
          <input type="file" id="avatar" className="hidden" accept="image/*"onChange={handleEditProfile} disabled={isUpdatingProfile} />
        </label>
      </div>
      <table className="w-full max-w-sm mx-auto border-collapse inline-block self-center">
        <tbody>
          <tr>
            <td className="text-left font-semibold capitalize py-2">Full Name:</td>
            <td className="text-left pl-6">{authUser.fullName || "N/A"}</td>
          </tr>
          <tr>
            <td className="text-left font-semibold capitalize py-2">Email:</td>
            <td className="text-left pl-6">{authUser.email || "N/A"}</td>
          </tr>
          <tr>
            <td className="text-left font-semibold capitalize py-2">Gender:</td>
            <td className="text-left pl-6">{authUser.gender || "N/A"}</td>
          </tr>
          <tr>
            <td className="text-left font-semibold capitalize py-2">Age:</td>
            <td className="text-left pl-6">{authUser.age || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
