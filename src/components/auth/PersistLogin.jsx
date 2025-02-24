import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import UseRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import backgroundImage from "../../assets/images/bg-img1.jpg";
import logo from "../../assets/images/favicon.svg";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // get access token
  const refresh = UseRefreshToken();
  const { auth } = useAuth();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(12, 19, 99, .7), rgba(12, 19, 99, .7)), url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            width: "100%",
            height: "100vh",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              style={{ color: "white", fontWeight: "bold" }}
            >
              REAL PROPERTY TAX MANAGEMENT SYSTEM
            </Typography>
          </Box>
          <img src={logo} alt="logo" width={"15%"} />
          <Box
            sx={{
              width: "45vw",
            }}
          >
            <Typography
              variant="h6"
              style={{
                color: "white",
              }}
            >
              Loading Please Wait...
            </Typography>
            <LinearProgress />
          </Box>
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
