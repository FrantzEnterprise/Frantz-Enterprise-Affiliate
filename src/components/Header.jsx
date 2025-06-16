import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const HeaderContainer = styled.header`
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: var(--surface);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 101;
    box-shadow: ${props => (props.isOpen ? '-5px 0 15px rgba(0,0,0,0.2)' : 'none')};
  }
`

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 102;

  @media (max-width: 768px) {
    display: block;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const AdminButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo to="/">
            <LogoIcon>FE</LogoIcon>
            <span>Frantz Enterprise</span>
          </Logo>

          <MobileMenuButton onClick={toggleMenu}>
            <FaBars />
          </MobileMenuButton>

          <NavLinks isOpen={isMenuOpen}>
            <CloseButton onClick={closeMenu}>
              <FaTimes />
            </CloseButton>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
            <NavLink to="/subscriptions" onClick={closeMenu}>Subscriptions</NavLink>
            <NavLink to="/reviews" onClick={closeMenu}>Reviews</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            
            {isAuthenticated ? (
              <AdminButton to="/admin" onClick={closeMenu}>
                <FaUser />
                Dashboard
              </AdminButton>
            ) : (
              <AdminButton to="/login" onClick={closeMenu}>
                <FaUser />
                Admin Login
              </AdminButton>
            )}
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
