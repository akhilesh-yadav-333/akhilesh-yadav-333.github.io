import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(18, 18, 18, 0.2);
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #8B0000;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #8B0000;
  }
`;

const AppointmentButton = styled.button`
  background: transparent;
  border: 2px solid #8B0000;
  color: #8B0000;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #8B0000;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(18, 18, 18, 0.98);
  backdrop-filter: blur(10px);
  padding: 2rem;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const MobileNavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #2d2d2d;
  cursor: pointer;

  &:hover {
    color: #8B0000;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo>Portfolio</Logo>
          
          <NavLinks>
            <AppointmentButton>Appointment</AppointmentButton>
          </NavLinks>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <AppointmentButton style={{ marginTop: '1rem', width: '100%' }}>
          Appointment
        </AppointmentButton>
      </MobileMenu>
    </>
  );
};

export default Header;
