import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    fullName: "",
    email: "",
    mobile: "",
    profilePhoto: null,
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    setProfile(savedProfile);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setProfile({ ...profile, profilePhoto: URL.createObjectURL(file) });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile updated successfully!");
  };

  return (
    <div className="container" style={{ backgroundColor: "#D4A49C", minHeight: "100vh", padding: "20px", borderRadius: "8px", color: "#fff" }}>
      <h2 className="mb-4 text-light">User Profile</h2>
      <form className="card p-4 shadow-sm" style={{ backgroundColor: "#CCDCDB", color: "#000" }} onSubmit={handleSave}>
        {profile.profilePhoto && (
          <div className="text-center mb-3">
            <img src={profile.profilePhoto} alt="Profile" className="img-thumbnail" width="100" />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={profile.username} onChange={handleChange} placeholder="Enter Username" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Enter Full Name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} placeholder="Enter Email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="text" className="form-control" name="mobile" value={profile.mobile} onChange={handleChange} placeholder="Enter Mobile Number" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Photo</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;