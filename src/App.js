import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import Contact from './components/Contact';
import PageLoader from './components/PageLoader';
import './App.css';

const AppContainer = styled.div`
  background: #121212;
  min-height: 100vh;
  color: #e6f1ff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const MainContent = styled.main`
  padding-top: 80px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Awards />
        <Contact />
      </MainContent>
    </AppContainer>
  );
}

export default App;
