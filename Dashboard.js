import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [accountWorth, setAccountWorth] = useState(null);

  useEffect(() => {
    async function fetchAccountWorth() {
      const response = await axios.get('/api/valuation');
      setAccountWorth(response.data.worth);
    }
    fetchAccountWorth();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {accountWorth !== null ? (
        <p>Your account is worth ${accountWorth}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
