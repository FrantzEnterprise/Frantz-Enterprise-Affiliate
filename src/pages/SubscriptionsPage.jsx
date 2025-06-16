import React, { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa'
import { SubscriptionContext } from '../context/SubscriptionContext'

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const PageDescription = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const SearchContainer = styled.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`

const CategoryFilter = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const AvailabilityFilter = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
  
  &.active {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-color: transparent;
    color: white;
  }
`

const SubscriptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const SubscriptionCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

const SubscriptionImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${SubscriptionCard}:hover & img {
    transform: scale(1.05);
  }
`

const SubscriptionContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const SubscriptionHeader = styled.div`
  margin-bottom: 1rem;
`

const SubscriptionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

const SubscriptionCategory = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SubscriptionDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`

const SubscriptionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

const SubscriptionPrice = styled.div`
  font-weight: 600;
  color: var(--accent);
`

const SubscriptionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 10;
`

const AvailabilityBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  
  &.open {
    background-color: rgba(16, 185, 129, 0.9);
    color: white;
  }
  
  &.limited {
    background-color: rgba(245, 158, 11, 0.9);
    color: white;
  }
  
  &.filled {
    background-color: rgba(239, 68, 68, 0.9);
    color: white;
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const SubscriptionsPage = () => {
  const { subscriptions } = useContext(SubscriptionContext)
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedAvailability, setSelectedAvailability] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  
  // Extract unique categories
  const categories = [...new Set(subscriptions.map(subscription => subscription.category))]
  
  // Filter subscriptions based on search, category, availability, and featured status
  useEffect(() => {
    let results = subscriptions
    
    // Filter out filled subscriptions by default
    results = results.filter(subscription => 
      subscription.availability.toLowerCase() !== 'filled'
    )
    
    if (searchTerm) {
      results = results.filter(subscription => 
        subscription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (selectedCategory) {
      results = results.filter(subscription => subscription.category === selectedCategory)
    }
    
    if (selectedAvailability) {
      results = results.filter(subscription => 
        subscription.availability.toLowerCase() === selectedAvailability.toLowerCase()
      )
    }
    
    if (showFeaturedOnly) {
      results = results.filter(subscription => subscription.featured)
    }
    
    setFilteredSubscriptions(results)
  }, [subscriptions, searchTerm, selectedCategory, selectedAvailability, showFeaturedOnly])
  
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
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <PageHeader>
          <PageTitle>SaaS Subscriptions</PageTitle>
          <PageDescription>
            Discover premium software-as-a-service subscriptions that can help streamline your business operations, boost productivity, and drive growth.
          </PageDescription>
        </PageHeader>
        
        <FiltersContainer>
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search subscriptions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <CategoryFilter 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CategoryFilter>
          
          <AvailabilityFilter
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
          >
            <option value="">All Availability</option>
            <option value="open">Open</option>
            <option value="limited">Limited</option>
          </AvailabilityFilter>
          
          <FilterButton 
            className={showFeaturedOnly ? 'active' : ''}
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
          >
            <FaFilter /> Featured Only
          </FilterButton>
        </FiltersContainer>
        
        {filteredSubscriptions.length > 0 ? (
          <SubscriptionsGrid>
            {filteredSubscriptions.map((subscription, index) => (
              <SubscriptionCard
                key={subscription.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {subscription.featured && (
                  <FeaturedBadge>
                    <FaStar /> Featured
                  </FeaturedBadge>
                )}
                
                <AvailabilityBadge className={getAvailabilityClass(subscription.availability)}>
                  {subscription.availability}
                </AvailabilityBadge>
                
                <SubscriptionImage>
                  <img src={subscription.image} alt={subscription.title} />
                </SubscriptionImage>
                
                <SubscriptionContent>
                  <SubscriptionHeader>
                    <SubscriptionTitle>{subscription.title}</SubscriptionTitle>
                    <SubscriptionCategory>{subscription.category}</SubscriptionCategory>
                  </SubscriptionHeader>
                  
                  <SubscriptionDescription>
                    {subscription.description}
                  </SubscriptionDescription>
                  
                  <SubscriptionFooter>
                    <SubscriptionPrice>{subscription.price}</SubscriptionPrice>
                    <SubscriptionLink href={subscription.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </SubscriptionLink>
                  </SubscriptionFooter>
                </SubscriptionContent>
              </SubscriptionCard>
            ))}
          </SubscriptionsGrid>
        ) : (
          <NoResults>
            <h3>No subscriptions found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </NoResults>
        )}
      </div>
    </motion.div>
  )
}

export default SubscriptionsPage
