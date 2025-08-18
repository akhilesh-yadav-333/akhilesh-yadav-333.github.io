import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  font-size: clamp(3rem, 6vw, 4rem);
  font-weight: 800;
  color: #8B0000;
  text-align: center;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;
  text-transform: uppercase;
  letter-spacing: 2px;

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
  padding: 3rem 2.5rem;
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
  padding: 0;
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

const ContactMessage = styled.div`
  margin-bottom: 3rem;
  text-align: left;
`;

const MessageTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
`;

const MessageText = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const SecurityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #8B0000;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #9e9e9e;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  padding: 3rem 2.5rem;
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
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  padding: 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(139, 0, 0, 0.3);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 400;

  &:focus {
    outline: none;
    border-bottom-color: #8B0000;
    border-bottom-width: 2px;
  }

  &::placeholder {
    color: #9e9e9e;
    font-weight: 400;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(139, 0, 0, 0.3);
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  font-weight: 400;

  &:focus {
    outline: none;
    border-bottom-color: #8B0000;
    border-bottom-width: 2px;
  }

  &::placeholder {
    color: #9e9e9e;
    font-weight: 400;
  }
`;

const SubmitButton = styled.button`
  background: #8B0000;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);

  &:hover {
    background: #ffffff;
    color: #8B0000;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 0, 0, 0.4);
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

const SuccessMessage = styled.div`
  background: rgba(0, 128, 0, 0.1);
  color: #00ff00;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(0, 128, 0, 0.3);
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.1);
  color: #ff6b6b;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 0.3);
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const StatusMessageText = styled.span`
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
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

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            <ContactMessage>
              <MessageTitle>Ready to Secure Your Digital Assets?</MessageTitle>
              <MessageText>
                Let's collaborate to identify vulnerabilities, strengthen your defenses, and build a robust security posture. Whether you need penetration testing, security assessments, or consultation, I'm here to help protect what matters most.
              </MessageText>

            </ContactMessage>
            
            <SocialLinks>
              <SocialLink href="mailto:akhileshyadav333@gmail.com" title="Send me an email">
                <FaEnvelope />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/akhilesh--yadav" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm 
            className={isVisible ? 'animate' : ''}
          >
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormTextarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'PING ME'}
              </SubmitButton>
              
              {submitStatus === 'success' && (
                <SuccessMessage>
                  <MessageContent>
                    <StatusMessageText>Message sent successfully! I'll get back to you soon.</StatusMessageText>
                    <CloseButton onClick={resetForm}>×</CloseButton>
                  </MessageContent>
                </SuccessMessage>
              )}
              
              {submitStatus === 'error' && (
                <ErrorMessage>
                  <MessageContent>
                    <StatusMessageText>Failed to send message. Please try again or contact me directly.</StatusMessageText>
                    <CloseButton onClick={resetForm}>×</CloseButton>
                  </MessageContent>
                </ErrorMessage>
              )}
            </form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
