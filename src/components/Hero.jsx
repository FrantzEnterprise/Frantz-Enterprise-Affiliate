import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
    z-index: -1;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  border: 2px solid var(--primary);
  border-radius: 0.375rem;
  color: var(--primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: white;
  }
`

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;
  z-index: -1;
`

const Hero = () => {
  return (
    <HeroSection>
      <FloatingCircle
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, 50, -100],
          y: [-100, 50, -100],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
        style={{ 
          width: '300px', 
          height: '300px',
          top: '20%',
          left: '10%'
        }}
      />
      
      <FloatingCircle
        initial={{ x: 100, y: 100 }}
        animate={{ 
          x: [100, -50, 100],
          y: [100, -50, 100],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
        style={{ 
          width: '400px', 
          height: '400px',
          bottom: '10%',
          right: '5%'
        }}
      />
      
      <div className="container">
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Elevate Your Digital Success</span> with Premium Affiliate Products
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frantz Enterprise curates the best digital tools and services to help you grow your business. As an independent affiliate marketer, we provide honest recommendations for software that delivers real results.
          </HeroSubtitle>
          
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton to="/products">
              Explore Products <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/about">
              Learn More
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </div>
    </HeroSection>
  )
}

export default Hero
