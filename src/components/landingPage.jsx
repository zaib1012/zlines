import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const LandingPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FAF9FE",
        height: "700px",
      }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 5,
                display: { xs: "none", md: "flex" },
                fontFamily: "montesorat",
                fontWeight: "bold",
                letterSpacing: "1px",
                color: "#2D323B",
                textDecoration: "none",
              }}
            >
              ANSWEAR
            </Typography>
            <TextField
              id="filled-basic"
              label="Search for items, brands, inspiration..."
              variant="filled"
              sx={{
                ml: 5,
                fontFamily: "montesorat",
                fontWeight: "bold",
              }}
              style={{ width: "40%", borderRadius: "10px" }}
              InputProps={{ disableUnderline: true }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default LandingPage;
