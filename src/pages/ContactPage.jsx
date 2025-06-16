import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  height: 100%;
`

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
`

const ContactInfoList = styled.ul`
  list-style: none;
`

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  .icon {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .content {
    h4 {
      margin-bottom: 0.5rem;
    }
    
    p, a {
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }
    
    a:hover {
      color: var(--primary);
    }
  }
`

const ContactForm = styled.form`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
`

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const SuccessMessage = styled(motion.div)`
  background-color: var(--success);
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const MapContainer = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  height: 400px;
  margin-bottom: 4rem;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
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
              Contact <span className="gradient-text">Us</span>
            </PageTitle>
            <PageDescription>
              Have questions or need assistance? We're here to help. Reach out to our team using the contact information below.
            </PageDescription>
          </motion.div>
        </PageHeader>
        
        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo>
              <ContactInfoTitle>Get In Touch</ContactInfoTitle>
              <ContactInfoList>
                <ContactInfoItem>
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="content">
                    <h4>Email</h4>
                    <a href="mailto:Robert@FrantzEnterprise.com">Robert@FrantzEnterprise.com</a>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="content">
                    <h4>Location</h4>
                    <p>West Sacramento, CA</p>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <div className="icon">
                    <FaClock />
                  </div>
                  <div className="content">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday & Sunday: Closed</p>
                  </div>
                </ContactInfoItem>
              </ContactInfoList>
            </ContactInfo>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaPaperPlane /> Your message has been sent successfully! We'll get back to you soon.
                </SuccessMessage>
              )}
              
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="name">Your Name</FormLabel>
                  <FormInput 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormInput 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup className="full-width">
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup className="full-width">
                  <FormLabel htmlFor="message">Your Message</FormLabel>
                  <FormTextarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
              </FormGrid>
              
              <FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </FormButton>
            </ContactForm>
          </motion.div>
        </ContactGrid>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-121.59264795889592!3d38.58025759312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sWest%20Sacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1655668687967!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Frantz Enterprise Location"
            ></iframe>
          </MapContainer>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactPage
