import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const UserProfile = () => {
  const navigate=useNavigate();
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    mobile: "",
    profilePhoto: null,
  });


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/verify", { withCredentials: true })
      .then(res => {
        if (!res.data.login) {
          navigate("/login");
        }
      })
      .catch(err => {
        console.error("Authentication error:", err);
        navigate("/login");
      });
  }, [navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getProfileData", {
          withCredentials: true
        });
        const { username, email, number } = response.data;
        setProfile((prev) => ({
          ...prev,
          username,
          email,
          mobile: number
        }));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const updatedProfile = { ...profile, profilePhoto: URL.createObjectURL(file) };
      setProfile(updatedProfile);
      localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
      alert("Profile photo updated successfully!");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center px-3"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <div
        className="card w-100 shadow-sm p-4"
        style={{
          maxWidth: "500px",
          borderRadius: "12px",
          backgroundColor: "#fff",
        }}
      >
        <div className="text-center mb-4">
          {profile.profilePhoto ? (
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white"
              style={{ width: "120px", height: "120px", margin: "auto" }}
            >
              No Image
            </div>
          )}
          <input
            type="file"
            className="form-control mt-3"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Username:</label>
          <p className="form-control-plaintext">{profile.username || "Loading....."}</p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email:</label>
          <p className="form-control-plaintext">{profile.email || "Loading....."}</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Mobile:</label>
          <p className="form-control-plaintext">{profile.mobile || "Loading....."}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
