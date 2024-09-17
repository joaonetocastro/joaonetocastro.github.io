import React from 'react';
import './App.css';
import linkedinLogo from './imgs/linkedin.svg';
import githubLogo from './imgs/github.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>João Neto Castro</h1>
        <p className="description">
          Sou desenvolvedor Full Stack com experiência em JavaScript, Node, TypeScript, Python, Django, FastAPI, MySQL, Postgres, Docker, CI, CD.
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/joaonetoc/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="logo" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/joaonetocastro" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="logo" />
            <span>GitHub</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
