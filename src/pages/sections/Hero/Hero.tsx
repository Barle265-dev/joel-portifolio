import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/eu.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { StyledButton } from "../../../components/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground";
import CV from "../../../assets/pdf/CV_Joel.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV_Joel.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative" pb={3}>
                <Box width={"150%"} position="absolute" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Joel Oliveira
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                I'm a Software Engineer
              </Typography>
              <Grid
                container
                spacing={3}
                display="flex"
                justifyContent="center"
                pt={2}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={handleDownload}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() =>
                      (window.location.href = "mailto:oliverjoel01@outlook.com")
                    }
                  >
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    display: "block",
    padding: "20px",
    paddingTop: "100px",
    paddingBottom: "40px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    height: "100vh",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  position: "relative",
}));
