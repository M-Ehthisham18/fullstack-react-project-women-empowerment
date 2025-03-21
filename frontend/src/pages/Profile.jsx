import React, { useState } from 'react'
import { useAuthStore } from '../stores/useAuthStore'
import { LogOut, CircleUser ,Loader, Pencil, BedSingle, Trash2 } from "lucide-react";
import avatar from '../assets/avatar.png'
const Profile = () => {
  const {logout,authUser,deleteAccount,isAccountDeleting, updateProfile, isUpdatingProfile} = useAuthStore();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  
  const handleLogout = () => {
    logout();
  };
  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = async () => {
    if (!password) return;
  
    await deleteAccount(password);
    setIsDeleteModalOpen(false);
    setPassword("");
  };

  const handleEditProfile = async (e)=> {
    const file = e.target.files[0];
    if(!file) return;

    const reader= new FileReader();
    reader.readAsDataURL(file); 

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({profilePic : base64Image})
    }
  }
  return (
    <div className="p-6 text-center ">
      {/* Logout Button */}
      <button 
        onClick={handleLogout} 
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex gap-2 justify-self-end font-semibold"
      >
        Logout<LogOut className="size-5" />
      </button>
      <h2 className="text-2xl font-semibold my-4">Profile</h2>
      <div className='mt-6 md:flex max-w-3xl mx-auto border-b-2 border-black'>
      <div className="relative w-[260px] h-[312px] p-1 border-2 border-black rounded-md my-6 justify-self-center">
  {/* Profile Image */}
  {isUpdatingProfile ? (<div className='flex justify-center items-center h-full flex-col'><Loader className='animate-spin size-12'/><p className="text-sm text-zinc-700">
   Uploading...
</p></div>) : (
    <img
      src={authUser?.profilePic || avatar}
    alt="Profile"
    className="w-[260px] h-[300px] object-cover object-center rounded-md"
  />)}

  {/* Edit Icon */}
  <label htmlFor='avatar' className={`absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-75" ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}>
  <Pencil className="size-3.5 text-white" />
<input
  type='file'
  id='avatar'
  className='hidden'
  accept='image/*'
  onChange={handleEditProfile}
  disabled={isUpdatingProfile}
/>
  </label>
  
</div>
      <table className='w-full max-w-sm mx-auto border-collapse inline-block justify-self-center self-center'>
        <tr>
          <td className='text-left font-semibold capitalize py-2'>Full Name : </td>
          <td className='text-left pl-6'> {authUser.fullName || "N/A"}</td>
        </tr>
        <tr>
          <td className='text-left font-semibold capitalize py-2'>Email : </td>
          <td className='text-left pl-6'> {authUser.email || "N/A"}</td>
        </tr>
        <tr>
          <td className='text-left font-semibold capitalize py-2'>Gender : </td>
          <td className='text-left pl-6'> {authUser.gender || "N/A"}</td>
        </tr>
        <tr>
          <td className='text-left font-semibold capitalize py-2'>Age : </td>
          <td className='text-left pl-6'> {authUser.age || "N/A"}</td>
        </tr>
      </table>
      </div>
      <button
                className=" rounded bg-red-500 px-4 py-2 hover:bg-red-600 transition duration-200 mt-4 text-white font-semibold flex gap-2 items-center justify-self-center"
                onClick={handleDeleteAccount}
              >
                <Trash2 className='size-5'/>
                Delete Account
              </button>
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {
            isAccountDeleting ? <div><Loader className='animate-spin size-24 text-white mb-2 justify-self-center'/> <p className='text-white text-center text-xl'>Account Deleting</p></div> : <div className="bg-base-300 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Confirm Account Deletion</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your password to confirm account deletion.
            </p>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 border-2 rounded-lg hover:bg-gray-400 transition duration-200"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-white transition duration-200 ${
                  password ? "bg-red-500 hover:bg-red-600" : "bg-red-300 cursor-not-allowed"
                }`}
                onClick={confirmDeleteAccount}
                disabled={!password}
              >
                Confirm Delete
              </button>
            </div>
          </div>
          }
        </div>
      )}
      
      
    </div>
  )
}

export default Profile
