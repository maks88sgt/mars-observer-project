import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userName = useSelector((state) => state.auth.currentUserName);
  const apiKey = useSelector((state) => state.auth.currentApiKey);

  const { t, i18n } = useTranslation("translation", { keyPrefix: "Common" });

  const navigate = useNavigate();

  const [userMenuIsOpen, setUserMenuIsOpen] = React.useState(null);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"rovers"}
              onClick={() => navigate(`/rovers`)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("Rovers")}
            </Button>
            <Button
              key={"search"}
              onClick={() => navigate(`/search`)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("Search")}
            </Button>
            <Button
              key={"about"}
              onClick={() => navigate(`/about`)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("About")}
            </Button>
          </Box>
          <Box
            sx={{
              my: 2,
              mr: 2,
              color: "white",
              display: "block",
              fontSize: "16px",
            }}
          >
            {apiKey ? userName : t("Demo")}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => setUserMenuIsOpen(true)} sx={{ p: 0 }}>
                <Avatar alt={userName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userMenuIsOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userMenuIsOpen)}
            >
              <MenuItem
                key={"profile"}
                onClick={() => {
                  setUserMenuIsOpen(null);
                  navigate(`/profile`);
                }}
              >
                <Typography textAlign="center">{t("Profile")}</Typography>
              </MenuItem>
              <MenuItem
                key={"logout"}
                onClick={() => {
                  setUserMenuIsOpen(null);
                  navigate(`/login`);
                }}
              >
                <Typography textAlign="center">{t("Logout")}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Current language">
              <IconButton
                onClick={() => {
                  if (i18n.language === "en") {
                    i18n.changeLanguage("ru");
                  } else {
                    i18n.changeLanguage("en");
                  }
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "14px",
                }}
              >
                {i18n.language}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
