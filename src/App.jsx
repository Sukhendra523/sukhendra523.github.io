import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import NavBar from "./components/NavBar";
import BodyWrapper from "./components/BodyWrapper";
import BannerSection from "./components/Sections/BannerSection";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Education from "./components/Sections/Education";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import ProgressScrollButton from "./components/ProgressScrollButton";
import ProjectDetails from "./components/ProjectDetails";

const AppWrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const SectionWrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppWrapper>
        <BrowserRouter>
          <NavBar />
          <BodyWrapper>
            <BannerSection />
            <SectionWrapper>
              <Skills />
              <Experience />
            </SectionWrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <SectionWrapper>
              <Education />
              <Contact />
            </SectionWrapper>
            <Footer />
            <ProgressScrollButton />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </BodyWrapper>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
