import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { LogOut } from "lucide-react";
import Share from "../components/Share";
import UserDetails from "../components/profile/UserDetails";
import DeleteAccount from "../components/profile/DeleteAccount";
import MyPosts from "../components/profile/MyPosts";
import SavedPosts from "../components/profile/SavedPosts"; // Assuming you have a SavedPosts component

const Profile = () => {
  const { logout } = useAuthStore();
  const [myPost, setMyPost] = useState(true);

  const showMyPosts = () => setMyPost(true);
  const showSavedPosts = () => {
    setMyPost(false);
  };

  return (
    <div className="p-6 text-center">
      {/* Logout Button */}
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex gap-2 justify-self-end font-semibold"
      >
        Logout
        <LogOut className="size-5" />
      </button>

      <h2 className="text-2xl font-semibold my-4">Profile</h2>

      {/* User Details */}
      <UserDetails />

      <div className="max-w-3xl mx-auto sm:p-[2.5rem]">
        <Share />
        <div className="w-full border-2 mt-2 flex justify-evenly font-extrabold border-b-0">
          <button
            className={`w-full h-full py-4 ${
              myPost ? "border-b-2 border-b-blue-600" : "bg-gray-200 text-gray-600"
            }`}
            onClick={showMyPosts}
          >
            My Posts
          </button>
          <button
            className={`w-full h-full py-4 ${
              !myPost ? "border-b-2 border-b-blue-600" : "bg-gray-200 text-gray-600"
            }`}
            onClick={showSavedPosts}
          >
            Saved Posts
          </button>
        </div>

        {/* Conditionally Render MyPosts or SavedPosts */}
        {myPost ? <MyPosts /> : <SavedPosts/> || "No Post Saved"}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteAccount />
    </div>
  );
};

export default Profile;
