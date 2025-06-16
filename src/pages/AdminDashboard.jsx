import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaBox, FaReceipt, FaStar, FaEdit, FaChartLine, FaUsers, FaEnvelope } from 'react-icons/fa'
import { useProduct } from '../context/ProductContext'
import { useSubscription } from '../context/SubscriptionContext'
import { useReview } from '../context/ReviewContext'

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const StatCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StatTitle = styled.h3`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
`

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  
  &.products {
    background-color: rgba(99, 102, 241, 0.1);
    color: var(--primary);
  }
  
  &.subscriptions {
    background-color: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
  }
  
  &.reviews {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.featured {
    background-color: rgba(236, 72, 153, 0.1);
    color: var(--accent);
  }
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
`

const StatFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`

const StatLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const SectionCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

const SectionHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--surface-light);
  display: flex;
  align-items: center;
  gap: 1rem;
`

const SectionIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  
  &.products {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
  }
  
  &.subscriptions {
    background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
    color: white;
  }
  
  &.reviews {
    background: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);
    color: white;
  }
`

const SectionTitle = styled.h3`
  font-size: 1.25rem;
`

const SectionBody = styled.div`
  padding: 1.5rem;
`

const SectionDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const SectionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-position: 100% 0%;
    transform: translateY(-2px);
  }
`

const AdminDashboard = () => {
  const { products } = useProduct()
  const { subscriptions } = useSubscription()
  const { reviews } = useReview()
  
  const featuredProducts = products.filter(product => product.featured).length
  const featuredSubscriptions = subscriptions.filter(subscription => subscription.featured).length
  const featuredReviews = reviews.filter(review => review.featured).length
  const totalFeatured = featuredProducts + featuredSubscriptions + featuredReviews
  
  return (
    <div className="container">
      <DashboardContainer>
        <DashboardHeader>
          <DashboardTitle>Admin Dashboard</DashboardTitle>
          <DashboardSubtitle>
            Manage your products, subscriptions, and reviews from one central location.
          </DashboardSubtitle>
        </DashboardHeader>
        
        <StatsGrid>
          <StatCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <StatHeader>
              <StatTitle>Total Products</StatTitle>
              <StatIcon className="products">
                <FaBox />
              </StatIcon>
            </StatHeader>
            <StatValue>{products.length}</StatValue>
            <StatFooter>
              <StatLink to="/admin/products">
                View all products <FaChartLine size={14} />
              </StatLink>
            </StatFooter>
          </StatCard>
          
          <StatCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <StatHeader>
              <StatTitle>Total Subscriptions</StatTitle>
              <StatIcon className="subscriptions">
                <FaReceipt />
              </StatIcon>
            </StatHeader>
            <StatValue>{subscriptions.length}</StatValue>
            <StatFooter>
              <StatLink to="/admin/subscriptions">
                View all subscriptions <FaChartLine size={14} />
              </StatLink>
            </StatFooter>
          </StatCard>
          
          <StatCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <StatHeader>
              <StatTitle>Total Reviews</StatTitle>
              <StatIcon className="reviews">
                <FaStar />
              </StatIcon>
            </StatHeader>
            <StatValue>{reviews.length}</StatValue>
            <StatFooter>
              <StatLink to="/admin/reviews">
                View all reviews <FaChartLine size={14} />
              </StatLink>
            </StatFooter>
          </StatCard>
          
          <StatCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <StatHeader>
              <StatTitle>Featured Items</StatTitle>
              <StatIcon className="featured">
                <FaStar />
              </StatIcon>
            </StatHeader>
            <StatValue>{totalFeatured}</StatValue>
            <StatFooter>
              <StatLink to="/admin/products">
                Manage featured items <FaChartLine size={14} />
              </StatLink>
            </StatFooter>
          </StatCard>
        </StatsGrid>
        
        <SectionsGrid>
          <SectionCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <SectionHeader>
              <SectionIcon className="products">
                <FaBox />
              </SectionIcon>
              <SectionTitle>Products</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <SectionDescription>
                Manage your affiliate products. Add new products, edit existing ones, or remove products that are no longer relevant.
              </SectionDescription>
              <SectionButton to="/admin/products">
                <FaEdit /> Manage Products
              </SectionButton>
            </SectionBody>
          </SectionCard>
          
          <SectionCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <SectionHeader>
              <SectionIcon className="subscriptions">
                <FaReceipt />
              </SectionIcon>
              <SectionTitle>Subscriptions</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <SectionDescription>
                Manage your subscription offerings. Update pricing, availability, and featured status for your subscription products.
              </SectionDescription>
              <SectionButton to="/admin/subscriptions">
                <FaEdit /> Manage Subscriptions
              </SectionButton>
            </SectionBody>
          </SectionCard>
          
          <SectionCard 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <SectionHeader>
              <SectionIcon className="reviews">
                <FaStar />
              </SectionIcon>
              <SectionTitle>Reviews</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <SectionDescription>
                Manage your product reviews. Create detailed reviews with embedded videos to showcase products and provide valuable insights.
              </SectionDescription>
              <SectionButton to="/admin/reviews">
                <FaEdit /> Manage Reviews
              </SectionButton>
            </SectionBody>
          </SectionCard>
        </SectionsGrid>
      </DashboardContainer>
    </div>
  )
}

export default AdminDashboard
