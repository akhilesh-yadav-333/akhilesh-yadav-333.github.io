import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 0;
  background: #121212;
  position: relative;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #8B0000;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.2s;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1.2s ease 0.4s;

  &.animate {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(139, 0, 0, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(139, 0, 0, 0.2);
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #8B0000;
  min-width: 40px;
`;

const ContactText = styled.div`
  h4 {
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  p {
    color: #9e9e9e;
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #8B0000;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid rgba(139, 0, 0, 0.3);

  &:hover {
    color: #660000;
    border-color: #8B0000;
    transform: translateY(-2px);
  }
`;

const ContactForm = styled.div`
  opacity: 0;
  transform: translateX(50px);
  transition: all 1.2s ease 0.6s;

  &.animate {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  padding: 1rem;
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8B0000;
    box-shadow: 0 0 0 2px rgba(139, 0, 0, 0.1);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #8B0000;
    box-shadow: 0 0 0 2px rgba(139, 0, 0, 0.1);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

const SubmitButton = styled.button`
  background: #8B0000;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: #660000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection id="contact" ref={contactRef}>
      <ContactContainer>
        <SectionTitle 
          className={isVisible ? 'animate' : ''}
        >
          Get In Touch
        </SectionTitle>
        
        <SectionSubtitle 
          className={isVisible ? 'animate' : ''}
        >
          Let's discuss your security needs
        </SectionSubtitle>

        <ContactContent>
          <ContactInfo 
            className={isVisible ? 'animate' : ''}
          >
            <ContactItem>
              <ContactIcon><FaEnvelope /></ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>akhileshyadav333@gmail.com</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon><FaPhone /></ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p>+91 7236970898</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon><FaMapMarkerAlt /></ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </ContactText>
            </ContactItem>
            
            <SocialLinks>
              <SocialLink href="https://github.com/akhilesh-yadav-333" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm 
            className={isVisible ? 'animate' : ''}
          >
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">
                Send Message
              </SubmitButton>
            </form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
