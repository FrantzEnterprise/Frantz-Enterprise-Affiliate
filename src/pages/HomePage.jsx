import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import { FaRocket, FaUserShield, FaThumbsUp, FaHeadset } from 'react-icons/fa'

const Section = styled.section`
  padding: 5rem 0;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const FeatureCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: white;
`

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
`

const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 1rem;
  margin: 5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(15, 23, 42, 0) 70%);
    z-index: 0;
  }
`

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CTADescription = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`

const CTAButton = styled.a`
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <FeaturedProducts />
      
      <Section>
        <div className="container">
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>
                Why Choose <span className="gradient-text">Frantz Enterprise</span>
              </SectionTitle>
              <SectionSubtitle>
                As an independent affiliate marketer, we're committed to providing honest recommendations and exceptional service.
              </SectionSubtitle>
            </motion.div>
          </SectionHeader>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeaturesGrid>
              <FeatureCard variants={itemVariants}>
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
                <FeatureTitle>Premium Selection</FeatureTitle>
                <FeatureDescription>
                  We carefully curate only the highest quality digital products and services that deliver real results for your business.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard variants={itemVariants}>
                <FeatureIcon>
                  <FaUserShield />
                </FeatureIcon>
                <FeatureTitle>Complete Transparency</FeatureTitle>
                <FeatureDescription>
                  As an independent affiliate marketer, we provide honest recommendations without corporate influence or bias.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard variants={itemVariants}>
                <FeatureIcon>
                  <FaThumbsUp />
                </FeatureIcon>
                <FeatureTitle>Verified Quality</FeatureTitle>
                <FeatureDescription>
                  Every product we recommend has been thoroughly vetted to ensure it meets our high standards for quality and value.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard variants={itemVariants}>
                <FeatureIcon>
                  <FaHeadset />
                </FeatureIcon>
                <FeatureTitle>Dedicated Support</FeatureTitle>
                <FeatureDescription>
                  Our team is always available to help you find the right solutions for your specific needs and answer any questions.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </motion.div>
        </div>
      </Section>
      
      <div className="container">
        <CTASection>
          <div className="container">
            <CTAContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CTATitle>
                  Ready to <span className="gradient-text">Transform Your Business</span>?
                </CTATitle>
                <CTADescription>
                  Explore our curated selection of premium digital tools and services that can help you grow, optimize, and succeed in today's competitive landscape.
                </CTADescription>
                <CTAButton href="/products">
                  Browse Products
                </CTAButton>
              </motion.div>
            </CTAContent>
          </div>
        </CTASection>
      </div>
    </motion.div>
  )
}

export default HomePage
