import React, {Fragment} from 'react';
import './App.css';
import {Container, Grid, ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import Header from './components/Header';
import MySkills from './components/MySkills';
import ProjectsGrid from './components/ProjectsGrid';
import AboutMe from './components/AboutMe';
import DownloadMyCV from './components/DownloadMyCV';
import LetsWorkTogether from './components/LetsWorkTogether';
function App() {
  const theme = createMuiTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 12,
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={theme}>

      <Header />
      <Container id="main-container" maxWidth="md">
        <ProjectsGrid />
        <MySkills />
        <Grid container style={{margin: '1em', paddingRight: 10}}>
          <Grid item sm>
            <AboutMe />
          </Grid>
          <Grid item sm>
            <DownloadMyCV />
          </Grid>
        </Grid>
        <LetsWorkTogether/>
        
      </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
