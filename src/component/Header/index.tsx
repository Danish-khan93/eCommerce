import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";

const index = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Box>
          <Typography>logo</Typography>
        </Box>
        <Box className="flex gap-4">
          <Divider className="bg-white" orientation="vertical" flexItem />
          <Typography>SignUp</Typography>
          <Typography>LogIn</Typography>
          <Divider className="bg-white" orientation="vertical" flexItem />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default index;
