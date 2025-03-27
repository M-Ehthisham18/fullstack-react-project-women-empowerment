import React, {  useState } from "react";
import {
  Loader,
  Trash2,
} from "lucide-react";
import { useAuthStore } from "../../stores/useAuthStore";

const DeleteAccount = () => {
  const {
      deleteAccount,
      isAccountDeleting,
    } = useAuthStore();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [password, setPassword] = useState("");

    const handleDeleteAccount = () => {
      setIsDeleteModalOpen(true);
    };
  
    const confirmDeleteAccount = async () => {
      if (!password) return;
  
      await deleteAccount(password);
      setIsDeleteModalOpen(false);
      setPassword("");
    };

  return (
    <div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {isAccountDeleting ? (
            <div>
              <Loader className="animate-spin size-24 text-white mb-2 justify-self-center" />{" "}
              <p className="text-white text-center text-xl">Account Deleting</p>
            </div>
          ) : (
            <div className="bg-base-300 p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">
                Confirm Account Deletion
              </h2>
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
                    password
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-red-300 cursor-not-allowed"
                  }`}
                  onClick={confirmDeleteAccount}
                  disabled={!password}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <button
              className=" rounded bg-red-500 px-4 py-2 hover:bg-red-600 transition duration-200 mt-4 text-white font-semibold flex gap-2 items-center justify-self-center"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="size-5" />
              Delete Account
            </button>
    </div>
  )
}

export default DeleteAccount
