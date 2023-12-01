import React, { useEffect, useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('dataKey');

    if (storedUserData) {
      // Parse the JSON string stored in local storage
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
    // If no user data (not authenticated), you might want to redirect to the login page
  }, []);

  return (
    <div>
      {userData && userData.email && (
        <div>
          <h1>Name: {userData.email.name || 'N/A'}</h1>
          <p>Email: {userData.email.email || 'N/A'}</p>
          <p>Number: {userData.mobile.number || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
