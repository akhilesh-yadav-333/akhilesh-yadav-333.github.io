import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaMobile, FaServer, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: #121212;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #8B0000;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 4rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: #8B0000;
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #8B0000;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #9e9e9e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  color: #bdbdbd;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  
  &::before {
    content: '✓';
    color: #8B0000;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Cross-platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture.",
      features: ["API Development", "Database Design", "Cloud Deployment"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Solutions",
      description: "Comprehensive security measures to protect your applications.",
      features: ["Security Audits", "Penetration Testing", "Compliance"]
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Data-driven insights to help you make informed decisions.",
      features: ["Data Visualization", "Reporting", "Predictive Analytics"]
    },
    {
      icon: <FaUsers />,
      title: "Consulting",
      description: "Expert guidance to help you achieve your technical goals.",
      features: ["Technical Strategy", "Architecture Review", "Team Training"]
    }
  ];

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <SectionTitle>Services</SectionTitle>
        <SectionSubtitle>What I can do for you</SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
