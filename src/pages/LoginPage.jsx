import React, { useState, useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`

const LoginCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

const LoginHeader = styled.div`
  padding: 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  text-align: center;
`

const LoginTitle = styled.h2`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 2.75rem;
  color: var(--text-secondary);
`

const Input = styled.input`
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

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
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

const ErrorMessage = styled.div`
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`

const LoginInfo = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--surface-light);
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  
  // If already authenticated, redirect to admin dashboard
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const success = login(username, password)
      
      if (success) {
        navigate('/admin')
      } else {
        setError('Invalid username or password')
        setIsLoading(false)
      }
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
          <LoginSubtitle>Sign in to access the admin dashboard</LoginSubtitle>
        </LoginHeader>
        
        <LoginForm onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </FormGroup>
          
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : (
              <>
                <FaSignInAlt /> Sign In
              </>
            )}
          </LoginButton>
          
          <LoginInfo>
            <p>For demo purposes, use:</p>
            <p>Username: <strong>admin</strong></p>
            <p>Password: <strong>password</strong></p>
          </LoginInfo>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default LoginPage
