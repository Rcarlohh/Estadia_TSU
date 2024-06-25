// src/components/ProfileScreen.jsx

import React, { useState, useEffect } from 'react';


const ProfileScreen = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile(); // Función para obtener el perfil del usuario
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Otros campos de perfil, como imagen, información personal, etc. */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfileScreen;
