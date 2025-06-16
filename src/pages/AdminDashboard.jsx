import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaBoxOpen, FaUserCog, FaChartLine, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const DashboardContainer = styled.div`
  padding: 3rem 0;
`

const DashboardHeader = styled.div`
  margin-bottom: 3rem;
`

const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const DashboardSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const Card = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`

const CardContent = styled.div`
  flex-grow: 1;
`

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`

const LogoutButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border: none;
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const AdminDashboard = () => {
  const { logout } = useAuth()
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <DashboardContainer>
          <DashboardHeader>
            <DashboardTitle>Admin Dashboard</DashboardTitle>
            <DashboardSubtitle>Manage your website content and settings</DashboardSubtitle>
          </DashboardHeader>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <CardGrid>
              <Card
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  <IconWrapper>
                    <FaBoxOpen />
                  </IconWrapper>
                  <CardTitle>Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Manage your product listings. Add, edit, or remove products from your catalog.
                  </CardDescription>
                  <CardLink to="/admin/products">Manage Products</CardLink>
                </CardContent>
              </Card>
              
              <Card
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  <IconWrapper>
                    <FaClipboardList />
                  </IconWrapper>
                  <CardTitle>Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Manage your SaaS subscription offerings. Add, edit, or remove subscription plans.
                  </CardDescription>
                  <CardLink to="/admin/subscriptions">Manage Subscriptions</CardLink>
                </CardContent>
              </Card>
              
              <Card
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  <IconWrapper>
                    <FaUserCog />
                  </IconWrapper>
                  <CardTitle>Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Manage your admin account settings and preferences.
                  </CardDescription>
                  <LogoutButton onClick={logout}>
                    <FaSignOutAlt /> Logout
                  </LogoutButton>
                </CardContent>
              </Card>
              
              <Card
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  <IconWrapper>
                    <FaChartLine />
                  </IconWrapper>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View website analytics, traffic statistics, and user engagement metrics.
                  </CardDescription>
                  <CardLink to="/admin/analytics">View Analytics</CardLink>
                </CardContent>
              </Card>
            </CardGrid>
          </motion.div>
        </DashboardContainer>
      </div>
    </motion.div>
  )
}

export default AdminDashboard
