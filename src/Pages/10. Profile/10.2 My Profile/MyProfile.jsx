import React, { useState, useEffect } from 'react';

export default function MyProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('english');
  const [avatar, setAvatar] = useState('');

  const [facebookLink, setFacebookLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem('loggedInUser');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setFirstName(parsedUserData.firstName || '');
      setLastName(parsedUserData.lastName || '');
      setEmail(parsedUserData.email || '');
      setUserName(parsedUserData.userName || ''); 
      setDescription(parsedUserData.description || '');
      setLanguage(parsedUserData.language || 'english');
      setAvatar(parsedUserData.avatar || '');
      setFacebookLink(parsedUserData.facebookLink || '');
      setLinkedinLink(parsedUserData.linkedinLink || '');
      setYoutubeLink(parsedUserData.youtubeLink || '');
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserData = {
      firstName,
      lastName,
      email,
      userName,
      description,
      language,
      avatar,
      facebookLink,
      linkedinLink,
      youtubeLink,
    };

    localStorage.setItem('loggedInUser', JSON.stringify(updatedUserData));
    const existingUserData = JSON.parse(localStorage.getItem('userDetails')) || [];
    const userIndex = existingUserData.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      existingUserData[userIndex] = { ...existingUserData[userIndex], ...updatedUserData };
    } else {
      existingUserData.push(updatedUserData);
    }

    localStorage.setItem('userDetails', JSON.stringify(existingUserData));

    alert('Profile updated successfully!');
    window.location.reload();
  };

  return (
    <div>
      <div className='border rounded-xl pb-2 w-3/4'>
        <form className="flex flex-col justify-around h-[900px]" onSubmit={handleSubmit}>
          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Full Name</p>
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-md pl-4 w-1/3 h-9 mx-5"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-md pl-4 w-1/3 h-9"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md pl-4 h-9 mx-5 w-1/3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Username</p>
            <input
              type="text"
              placeholder="Username"
              className="border rounded-md w-1/2 pl-4 h-9 mx-5"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Description</p>
            <textarea
              placeholder="Description"
              className="border rounded-md w-11/12 pl-4 h-20 mx-5"
              style={{ resize: "none", wordWrap: "break-word" }}
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Language</p>
            <select
              className="border rounded-md w-1/4 pl-4 h-9 mx-5"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="vietnamese">Vietnamese</option>
            </select>
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Avatar</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border mx-5"
            />
            {avatar && (
              <img src={avatar} alt="Avatar Preview" className="mt-2 w-24 h-24 rounded-full border mx-5" />
            )}
          </div>
          <div>
            <p className="text-gray-950 font-medium text-xl my-2 mx-5">Social Media Links</p>
            <input
              type="url"
              placeholder="Facebook Link"
              className="border rounded-md pl-4 w-1/2 h-9 mx-5"
              value={facebookLink}
              onChange={(e) => setFacebookLink(e.target.value)}
            />
            <input
              type="url"
              placeholder="LinkedIn Link"
              className="border rounded-md pl-4 w-1/2 h-9 mx-5 my-2"
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />
            <input
              type="url"
              placeholder="YouTube Link"
              className="border rounded-md pl-4 w-1/2 h-9 mx-5"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
          </div>

          <div className='flex w-full justify-end'>
            <button type="submit" className="bg-black text-white mt-4 text-xl w-1/3 h-10 mx-4 rounded-lg">Update your Information</button>
          </div>
        </form>
      </div>
    </div>
  )
}
