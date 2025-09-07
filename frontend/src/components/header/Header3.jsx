import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Close,
  ContentCut,
  Delete,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRight,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WindowIcon from "@mui/icons-material/Window";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        // @ts-ignore
        bgcolor: theme.palette.mycolor.main,
      }}
    >
      <Box sx={{ width: "222px", overflow: "hidden" }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.newcolor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
          sx={{
            ".css-1i98s5f-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
              width: "220px",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1121px)") && (
        //  <div style={{ display: "flex", gap: "20px" }}>
        <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
          <Links title={"Home"} />
          <Links title={"Mega menu"} />
          <Links title={"full screen menu"} />
          <Links title={"pages"} />
          <Links title={"user account"} />
          <Links title={"vendor account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1120px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
            }}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLink: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLink: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "vendor account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
