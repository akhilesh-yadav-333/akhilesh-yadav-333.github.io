import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import Contact from './components/Contact';
import './App.css';

const AppContainer = styled.div`
  background: linear-gradient(135deg, #121212 0%, #1e1e1e 100%);
  min-height: 100vh;
  color: #e6f1ff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const MainContent = styled.main`
  padding-top: 80px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Awards />
        <Contact />
      </MainContent>
    </AppContainer>
  );
}

export default App;
