import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// import * as React from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  //   const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleMenuItemClick = (
  // event: React.MouseEvent<HTMLElement>,
  // index: number,
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // }

  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            // sx={{ bgcolor: 'background.paper' }}
            sx={{ "&:hover": { cursor: "pointer" }, p: "0", m: "0" }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ color: "#fff" }}
            >
              <ListItemText
                // primary="When device is locked"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "14px",
                    color: "#fff",
                    userSelect: "none",
                  },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "lock-button",
                role: "listbox",
              },
            }}
            sx={{ top: "4px", left: "10px" }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px", p: "3px 10px", minHeight: "11px" }}
                key={option}
                // disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon sx={{ fontSize: "16px", color: "#fff" }}></TwitterIcon>
          <FacebookIcon
            sx={{ fontSize: "16px", mx: 1, color: "#fff" }}
          ></FacebookIcon>
          <InstagramIcon
            sx={{ fontSize: "16px", color: "#fff" }}
          ></InstagramIcon>
        </Stack>
      </Container>

      <div></div>
    </Box>
  );
}
