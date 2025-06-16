import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background-color: var(--surface);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-radius: 1px;
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    transform: translateY(-3px);
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--surface-light);
  color: var(--primary);
`

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>About Us</FooterTitle>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Frantz Enterprise is an independent affiliate marketing company specializing in promoting high-quality digital products and SaaS subscriptions.
            </p>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/subscriptions">Subscriptions</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <div>
                <p style={{ margin: 0 }}>Email</p>
                <a href="mailto:Robert@FrantzEnterprise.com" style={{ color: 'var(--primary)' }}>
                  Robert@FrantzEnterprise.com
                </a>
              </div>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <div>
                <p style={{ margin: 0 }}>Location</p>
                <p style={{ margin: 0 }}>West Sacramento, CA</p>
              </div>
            </ContactItem>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>
            &copy; {currentYear} Frantz Enterprise. All rights reserved. | 
            <span style={{ marginLeft: '0.5rem' }}>
              Frantz Enterprise is not affiliated with Facebook, Google, or any brand featured on this website.
            </span>
          </p>
        </FooterBottom>
      </div>
    </FooterContainer>
  )
}

export default Footer
