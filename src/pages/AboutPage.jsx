import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaCheck, FaQuoteLeft } from 'react-icons/fa'

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const PageDescription = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`

const Section = styled.section`
  padding: 4rem 0;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutImage = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3));
    z-index: 1;
  }
`

const AboutContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`

const ValuesList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`

const ValueItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  .icon {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
  
  .content {
    h4 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 0;
    }
  }
`

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 1rem;
  margin: 3rem 0;
`

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const TestimonialCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  position: relative;
  
  .quote-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--primary);
    opacity: 0.2;
    font-size: 2rem;
  }
  
  .content {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-style: italic;
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .info {
      h4 {
        margin-bottom: 0.25rem;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }
    }
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

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <PageHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PageTitle>
              About <span className="gradient-text">Frantz Enterprise</span>
            </PageTitle>
            <PageDescription>
              Learn more about our mission, values, and commitment to providing the best affiliate marketing solutions.
            </PageDescription>
          </motion.div>
        </PageHeader>
        
        <Section>
          <AboutGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AboutImage>
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Frantz Enterprise Team" />
              </AboutImage>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AboutContent>
                <h2>Our Story</h2>
                <p>
                  Frantz Enterprise was founded with a simple mission: to help businesses and individuals find the best digital tools and services to grow and succeed in today's competitive landscape.
                </p>
                <p>
                  As an independent affiliate marketer, we pride ourselves on providing honest, unbiased recommendations based on thorough research and testing. We're not affiliated with Facebook, Google, or any major brands - which means we can offer truly objective advice.
                </p>
                <p>
                  Our team consists of digital marketing experts, software developers, and business consultants who understand the challenges modern businesses face and the solutions that can help overcome them.
                </p>
              </AboutContent>
            </motion.div>
          </AboutGrid>
        </Section>
        
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutContent>
              <h2>Our Values</h2>
              <p>
                At Frantz Enterprise, we're guided by a set of core values that define how we operate and serve our customers.
              </p>
              
              <ValuesList>
                <ValueItem>
                  <div className="icon">
                    <FaCheck />
                  </div>
                  <div className="content">
                    <h4>Transparency</h4>
                    <p>
                      We're completely transparent about our affiliate relationships. We earn commissions on some products we recommend, but this never influences our recommendations.
                    </p>
                  </div>
                </ValueItem>
                
                <ValueItem>
                  <div className="icon">
                    <FaCheck />
                  </div>
                  <div className="content">
                    <h4>Quality Over Quantity</h4>
                    <p>
                      We only recommend products and services that meet our high standards for quality, reliability, and value. If we wouldn't use it ourselves, we won't recommend it.
                    </p>
                  </div>
                </ValueItem>
                
                <ValueItem>
                  <div className="icon">
                    <FaCheck />
                  </div>
                  <div className="content">
                    <h4>Customer-First Approach</h4>
                    <p>
                      Your success is our success. We focus on understanding your needs and recommending solutions that will truly help you achieve your goals.
                    </p>
                  </div>
                </ValueItem>
                
                <ValueItem>
                  <div className="icon">
                    <FaCheck />
                  </div>
                  <div className="content">
                    <h4>Continuous Improvement</h4>
                    <p>
                      The digital landscape is always evolving, and so are we. We continuously research and test new products to ensure our recommendations stay current and valuable.
                    </p>
                  </div>
                </ValueItem>
              </ValuesList>
            </AboutContent>
          </motion.div>
        </Section>
        
        <TestimonialsSection>
          <div className="container">
            <TestimonialsHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>What Our Clients Say</h2>
              </motion.div>
            </TestimonialsHeader>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TestimonialsGrid>
                <TestimonialCard variants={itemVariants}>
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="content">
                    "Frantz Enterprise recommended an email marketing tool that increased our open rates by 35%. Their honest advice saved us from investing in the wrong solution."
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Client" />
                    </div>
                    <div className="info">
                      <h4>Michael Johnson</h4>
                      <p>Marketing Director, TechStart</p>
                    </div>
                  </div>
                </TestimonialCard>
                
                <TestimonialCard variants={itemVariants}>
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="content">
                    "I appreciate that Frantz Enterprise is transparent about being an affiliate marketer. Their recommendations are genuinely helpful, and I've seen real results from the tools they suggested."
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Client" />
                    </div>
                    <div className="info">
                      <h4>Sarah Williams</h4>
                      <p>Founder, Bloom Boutique</p>
                    </div>
                  </div>
                </TestimonialCard>
                
                <TestimonialCard variants={itemVariants}>
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="content">
                    "The SEO tools recommended by Frantz Enterprise helped us climb from page 5 to page 1 in Google search results. Their expertise in digital marketing solutions is impressive."
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Client" />
                    </div>
                    <div className="info">
                      <h4>David Chen</h4>
                      <p>CEO, Horizon Digital</p>
                    </div>
                  </div>
                </TestimonialCard>
              </TestimonialsGrid>
            </motion.div>
          </div>
        </TestimonialsSection>
      </div>
    </motion.div>
  )
}

export default AboutPage
