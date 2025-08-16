import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaServer, FaLaptopCode, FaChartLine, FaUsers, FaMobile } from 'react-icons/fa';

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
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Penetration Testing",
      description: "Comprehensive vulnerability assessment and penetration testing for web applications, networks, and cloud environments.",
      features: ["Web App Security", "Network Pentesting", "Cloud Security", "API Security"]
    },
    {
      icon: <FaServer />,
      title: "Security Operations",
      description: "SIEM/EDR management, incident response, threat detection, and SOC operations optimization.",
      features: ["Splunk/QRadar", "CrowdStrike", "Incident Response", "Threat Hunting"]
    },
    {
      icon: <FaLaptopCode />,
      title: "DevSecOps Security",
      description: "Secure CI/CD pipelines, container security, and infrastructure as code security assessments.",
      features: ["Kubernetes Security", "Docker Security", "Terraform", "Jenkins Security"]
    },
    {
      icon: <FaChartLine />,
      title: "Vulnerability Management",
      description: "Comprehensive vulnerability assessment, risk analysis, and remediation planning.",
      features: ["Qualys/Nessus", "Risk Assessment", "Remediation Planning", "Compliance"]
    },
    {
      icon: <FaUsers />,
      title: "Security Consulting",
      description: "Security policy development, compliance assessments, and third-party risk evaluations.",
      features: ["Policy Development", "ISO 27001", "NIST RMF", "Risk Assessment"]
    },
    {
      icon: <FaMobile />,
      title: "Security Automation",
      description: "Custom scripting and automation for security tasks, threat intelligence, and incident response.",
      features: ["Python Scripts", "Bash Automation", "Threat Intelligence", "Workflow Automation"]
    }
  ];

  return (
    <ServicesSection id="services" ref={servicesRef}>
      <ServicesContainer>
        <SectionTitle 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}
        >
          What I Do
        </SectionTitle>
        
        <SectionSubtitle 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}
        >
          Services I offer to help secure your digital assets
        </SectionSubtitle>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.8s ease ${0.3 + index * 0.1}s`
              }}
            >
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
