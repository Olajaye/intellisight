'use client';
import { ChangeEvent,  useState } from 'react';
import { RiUser3Line, RiMailLine, RiLockLine, RiEdit2Line } from 'react-icons/ri';
import Image from 'next/image';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Engineer | Tech Enthusiast | Lifelong Learner',
    profilePicture: '/profilepicture.jpg', 
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save updated user data (e.g., API call)
    console.log('User data saved:', user);
  };

  return (
    <div className=" dark:bg-white ">
      <div className="overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-20 bg-gradient-to-r from-yellow to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden">
              <Image
                src={user.profilePicture}
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover"
              />
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-2 right-2 p-2  rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <RiEdit2Line className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8 pt-24">
          <h1 className="text-3xl font-bold text-white dark:text-black mb-2">{user.name}</h1>
          <p className="text-white dark:text-black mb-6">{user.bio}</p>

          {/* Editable Fields */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="flex items-center space-x-4">
              <RiUser3Line className="w-6 h-6 text-white dark:text-black" />
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-white dark:text-black">{user.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex items-center space-x-4">
              <RiMailLine className="w-6 h-6 text-white dark:text-black" />
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-white dark:text-black">{user.email}</span>
              )}
            </div>

            {/* Bio Field */}
            <div className="flex items-start space-x-4">
              <RiLockLine className="w-6 h-6 text-white dark:text-black mt-2" />
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={(e)=> setUser({...user, bio: e.target.value })}
                  rows={3}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-white dark:text-black">{user.bio}</span>
              )}
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="mt-8">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}