import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Card = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: var(--surface-light);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(15, 23, 42, 0.8) 100%);
  }
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--surface-light) 0%, var(--surface) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  
  .icon {
    font-size: 2rem;
    opacity: 0.5;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const CategoryBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--accent);
  font-size: 1.125rem;
`

const AvailabilityBadge = styled.div`
  display: inline-block;
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  &.open {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.limited {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.filled {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const SubscriptionCard = ({ subscription }) => {
  const getAvailabilityClass = (availability) => {
    switch(availability.toLowerCase()) {
      case 'open':
        return 'open'
      case 'limited':
        return 'limited'
      case 'filled':
        return 'filled'
      default:
        return 'open'
    }
  }
  
  // Check if we have a valid image URL
  const hasValidImage = subscription.image && (
    subscription.image.startsWith('http') || 
    subscription.image.startsWith('data:')
  )
  
  return (
    <Card 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
    >
      {subscription.featured && <FeaturedBadge>Featured</FeaturedBadge>}
      {subscription.category && <CategoryBadge>{subscription.category}</CategoryBadge>}
      
      <CardImage>
        {hasValidImage ? (
          <motion.img 
            src={subscription.image} 
            alt={subscription.title}
            whileHover={{ scale: 1.05 }}
          />
        ) : (
          <ImagePlaceholder>
            <div className="icon">📷</div>
            <div>No image available</div>
            <small>{subscription.title || 'Untitled Subscription'}</small>
          </ImagePlaceholder>
        )}
      </CardImage>
      
      <CardContent>
        <CardTitle>{subscription.title}</CardTitle>
        <PriceTag>
          {subscription.price}
          <AvailabilityBadge className={getAvailabilityClass(subscription.availability)}>
            {subscription.availability}
          </AvailabilityBadge>
        </PriceTag>
        <CardDescription>{subscription.description}</CardDescription>
        <CardLink href={subscription.link} target="_blank" rel="noopener noreferrer">
          Subscribe Now <FaExternalLinkAlt />
        </CardLink>
      </CardContent>
    </Card>
  )
}

export default SubscriptionCard
