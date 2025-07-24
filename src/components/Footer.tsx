import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  return (
    <>
      <Box pt={2} pb={2}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            pb={1}
          >
            <IconButton
              onClick={() => window.open("https://github.com/Barle265-dev")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.facebook.com/oliveira.joel.barle")
              }
            >
              <FacebookIcon />
            </IconButton>
            <IconButton href="mailto:oliverjoel01@outlook.com">
              <EmailIcon />
            </IconButton>
          </Box>
          <Typography textAlign="center">
            © {new Date().getFullYear()} Joel Oliveira - All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
