import React, { useEffect, useRef, useState } from "react";
import "./Share.css";
import { ImagePlus, X } from "lucide-react";
import avatar from "../assets/avatar.png";
import { useAuthStore } from "../stores/useAuthStore";
import { usePostStore } from "../stores/usePostStore";


const Share = () => {
  const { authUser } = useAuthStore();
  const desc = useRef();
  const fileInputRef = useRef(null);
  const { isCreatingPost, createPost } = usePostStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
    };
  };

  const handleCancel = () => {
    setSelectedImg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const shareHandler = async (e) => {
    e.preventDefault();
    if (!desc.current.value.trim() && !selectedImg) {
      alert("Please enter text or select an image to post.");
      return;
    }

    const newPost = {
      userId: authUser?._id,
      desc: desc.current.value,
      img: selectedImg || null,
    };

    const res = await createPost(newPost);
    
      // if (res) {
      //   setTimeout(()=> {
      //   window.location.reload()
      //   },1500)
      // }

    // Reset form
    desc.current.value = "";
    setSelectedImg(null);
  };
  

  return (
    <div className="share">
      <div className="shareWrapper">
        <span className="flex">
        <div className="shareTop flex">
          <img className="shareProfileImg hidden sm:block " src={authUser?.profilePic||avatar} alt="Profile" />
        </div>

        <form className="shareBottom w-full flex-col items-start" onSubmit={shareHandler}>
          <textarea
            className="shareInput h-full max-h-96 w-full resize-none overflow-y-scroll pl-5"
            ref={desc}
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height
              e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
            }}
            placeholder={`What's in your mind ${authUser?.fullName || ""}?`}
          ></textarea>

          {selectedImg && (
            <div className="shareImgContainer size-52 relative">
              <img className="shareImg" src={selectedImg} alt="Preview" />
              <X className="sharecancleimg absolute top-2 right-2 bg-gray-300 rounded-full opacity-70 text-red-700 size-4 cursor-pointer" onClick={handleCancel} />
            </div>
          )}

          <hr className="w-full my-2" />

          <div className="flex justify-between w-full">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption cursor-pointer flex items-center">
                <ImagePlus className="shareIcon text-red-500 mr-2" />
                <span className="shareOptionText">Photo </span>
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpg, .jpeg, .gif"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <button className="shareButton px-4 py-2 bg-green-500 text-white rounded-lg" type="submit" disabled={isCreatingPost}>
              {isCreatingPost ? "Posting..." : "Share"}
            </button>
          </div>
        </form>
        </span>
      </div>
    </div>
  );
};

export default Share;
