import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
  text-align: center;
`

const ErrorCode = styled.h1`
  font-size: 8rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`

const SecondaryButton = styled(Button)`
  background-color: var(--surface);
  color: var(--text);
  border: 1px solid var(--surface-light);
  
  &:hover {
    background-color: var(--surface-light);
  }
`

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NotFoundContainer>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ErrorCode>404</ErrorCode>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ErrorTitle>Page Not Found</ErrorTitle>
          <ErrorDescription>
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </ErrorDescription>
          
          <ButtonsContainer>
            <PrimaryButton to="/">
              <FaHome /> Back to Home
            </PrimaryButton>
            <SecondaryButton to="/products">
              <FaSearch /> Browse Products
            </SecondaryButton>
          </ButtonsContainer>
        </motion.div>
      </NotFoundContainer>
    </motion.div>
  )
}

export default NotFoundPage
