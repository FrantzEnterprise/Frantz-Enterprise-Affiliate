import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaLock, FaUser, FaExclamationTriangle } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
  padding: 2rem 0;
`

const LoginCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 1rem;
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`

const LoginHeader = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 2rem;
  text-align: center;
`

const LoginTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: white;
`

const LoginSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
`

const LoginForm = styled.form`
  padding: 2rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
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

const InputIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 2.4rem;
  color: var(--text-secondary);
`

const LoginButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    opacity: 0.9;
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

const ErrorMessage = styled.div`
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

const LoginInfo = styled.div`
  background-color: rgba(99, 102, 241, 0.1);
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1.5rem;
  
  h4 {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  
  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }
`

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { login, isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard')
    }
  }, [isAuthenticated, navigate])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    setTimeout(() => {
      const success = login(username, password)
      
      if (success) {
        navigate('/admin/dashboard')
      } else {
        setError('Invalid username or password. Please try again.')
      }
      
      setIsLoading(false)
    }, 1000)
  }
  
  return (
    <LoginContainer>
      <LoginCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LoginHeader>
          <LoginTitle>Admin Login</LoginTitle>
          <LoginSubtitle>Sign in to access your dashboard</LoginSubtitle>
        </LoginHeader>
        
        <LoginForm onSubmit={handleSubmit}>
          {error && (
            <ErrorMessage>
              <FaExclamationTriangle /> {error}
            </ErrorMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="username">Username</FormLabel>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <FormInput 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <FormInput 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </FormGroup>
          
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </LoginButton>
          
          <LoginInfo>
            <h4>Demo Credentials</h4>
            <p><strong>Username:</strong> admin</p>
            <p><strong>Password:</strong> password</p>
          </LoginInfo>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default AdminLogin
