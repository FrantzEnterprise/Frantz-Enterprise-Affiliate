import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const NavbarContainer = styled.nav`
  background-color: var(--surface);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 1px;
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  max-width: 300px;
  background-color: var(--surface);
  z-index: 200;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const MobileMenuTitle = styled.h3`
  font-size: 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const MobileNavItem = styled(NavLink)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.125rem;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`

const AdminButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`

const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const location = useLocation()
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }
  
  return (
    <NavbarContainer>
      <div className="container">
        <NavbarContent>
          <Logo to="/">Frantz Enterprise</Logo>
          
          <NavLinks>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/subscriptions">Subscriptions</NavItem>
            <NavItem to="/reviews">Reviews</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </NavLinks>
          
          <AuthButtons>
            {isAuthenticated ? (
              <>
                <AdminButton to="/admin">
                  <FaUser /> Admin
                </AdminButton>
                <LogoutButton onClick={logout}>
                  <FaSignOutAlt /> Logout
                </LogoutButton>
              </>
            ) : (
              <LoginButton to="/login">
                <FaUser /> Login
              </LoginButton>
            )}
          </AuthButtons>
          
          <MobileMenuButton onClick={toggleMenu}>
            <FaBars />
          </MobileMenuButton>
        </NavbarContent>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileMenuHeader>
                <MobileMenuTitle>Menu</MobileMenuTitle>
                <CloseButton onClick={toggleMenu}>
                  <FaTimes />
                </CloseButton>
              </MobileMenuHeader>
              
              <MobileNavLinks>
                <MobileNavItem to="/">Home</MobileNavItem>
                <MobileNavItem to="/about">About</MobileNavItem>
                <MobileNavItem to="/products">Products</MobileNavItem>
                <MobileNavItem to="/subscriptions">Subscriptions</MobileNavItem>
                <MobileNavItem to="/reviews">Reviews</MobileNavItem>
                <MobileNavItem to="/contact">Contact</MobileNavItem>
              </MobileNavLinks>
              
              <MobileAuthButtons>
                {isAuthenticated ? (
                  <>
                    <AdminButton to="/admin">
                      <FaUser /> Admin Dashboard
                    </AdminButton>
                    <LogoutButton onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </LogoutButton>
                  </>
                ) : (
                  <LoginButton to="/login">
                    <FaUser /> Login
                  </LoginButton>
                )}
              </MobileAuthButtons>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}

export default Navbar
