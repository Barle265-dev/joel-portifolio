import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <div>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Project</MenuItem>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));
