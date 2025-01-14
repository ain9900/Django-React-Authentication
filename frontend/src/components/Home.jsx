import AxiosInstance from "./AxiosInstance";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Home = () => {
  const [myData, setMyData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const GetData = async () => {
    try {
      const res = await AxiosInstance.get(`users/`);
      setMyData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      {/* Display loading spinner */}
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      )}

      {/* Display error message */}
      {error && (
        <Box textAlign="center" mt={4}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}

      {/* Render data if available */}
      {!loading && !error && (
        <div>
          {myData.map((item, index) => (
            <Box key={index} sx={{ p: 2, m: 2, boxShadow: 3 }}>
              <div>ID: {item.id}</div>
              <div>Email: {item.email}</div>
            </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
