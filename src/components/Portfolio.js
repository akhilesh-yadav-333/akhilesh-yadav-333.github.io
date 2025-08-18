import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 100px 0;
  background: #121212;
  position: relative;
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;



const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when element goes out of view
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PortfolioSection id="portfolio" ref={portfolioRef}>
      <PortfolioContainer>
        {/* Portfolio content removed */}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
