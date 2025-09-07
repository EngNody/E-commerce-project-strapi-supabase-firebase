import {
  alpha,
  Container,
  Badge,
  IconButton,
  InputBase,
  styled,
  MenuItem,
  Menu,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const options = ["All categories", "Clothes", "Electronics", "Accessories"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.5,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
      border: "1px solid #333",
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minwidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      minWidth: "20ch",
    },
  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack alignItems={"center"} sx={{userSelect: "none"}}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          width: "60%",
          height: "40px",
          justifyContent: "space-between",
          border: "1px solid #777",
          userSelect: "none",
          overflow: "hidden",

        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            //  bgcolor: 'background.paper' ,
            // @ts-ignore
            // bgcolor: theme.palette.mycolor.main,
            borderLeft: "1px solid #777",
            // @ts-ignore
            bgcolor:theme.palette.newcolor.main,

          }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{ borderRadius: "22px", padding: "0 9px",
              // @ts-ignore
              // bgcolor: theme.palette.mycolor.main,
              // "&:hover": {
              //   bgcolor: theme.palette.mycolor.main,
              // },
              // bgcolor:theme.palette.newcolor.main,
              color: theme.palette.text.secondary,
             }}
          >
            <ListItemText
              sx={{
                userSelect: "none",
                width: "100px",
                textAlign: "center",
                "&:hover": { cursor: "pointer" },
              }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore
              sx={{
                fontSize: "16px",
                // bgcolor:
                  // theme.palette.mycolor.main,
                }}
            />
          </ListItem>
        </List>
        <Menu
          sx={{ mt: "7px" }}
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
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{ fontSize: "13px" }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <PersonIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
