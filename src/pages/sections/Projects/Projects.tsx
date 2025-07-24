import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../components/AnimationComponent";
import type { ProjectCardProps } from "../../../components/ProjectCard";
import ProjectCard from "../../../components/ProjectCard";
import Lifesmemos from "../../../assets/images/lifesmemos.png";
import Brevemente from "../../../assets/images/brevemente.png";
import Arquivo from "../../../assets/images/brevearvivo.png";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Lifes Memos",
      subtitle: "Junho 2025",
      srcImg: Lifesmemos,
      description:
        "Life’s Memos é uma plataforma digital criada para preservar memórias e trajetórias de vida de forma pessoal e significativa. O website permite aos usuários escreverem suas biografias, registrarem preferências, criarem árvores genealógicas interativas, manterem álbuns de memórias e armazenarem documentos importantes. Também oferece recursos para partilhar pensamentos públicos com comentários, descrever diários pessoais e controlar com quem cada conteúdo é partilhado. É um espaço único para eternizar histórias e experiências de vida.",
      technologies: "Technologies: Typescript, Ant-Design, Fastify, Prisma ORM",
      websiteURL: "https://memorial.wisetourist.net/",
    },
    {
      title: "Boleia CV",
      subtitle: "Brevemente",
      srcImg: Brevemente,
      description:
        "Um app dedicado a serviços de boleia em Cabo Verde. Será brevemente feito e publicado",
      technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
      /*  websiteURL: "https://trello.com/",
      codeURL: "https://github.com/", */
    },
    {
      title: "Arquivo Digital",
      subtitle: "Brevemente",
      srcImg: Arquivo,
      description:
        "Sistema de arquivo digital a ser desenvolvido a priori para a loja Samsung, com o objetivo de armazenar documentos assinados e digitalizados de forma segura e organizada. A iniciativa visa reduzir o uso excessivo de papel, facilitar o acesso a documentos e promover práticas mais sustentáveis no ambiente empresarial",
      technologies: "Technologies: Brevemente",
      /*  websiteURL:
        "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
      codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze", */
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projects
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid size={{ md: 6 }} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
