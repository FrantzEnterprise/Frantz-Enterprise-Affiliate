import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSearch, FaFilter, FaStar, FaCalendarAlt, FaTags, FaYoutube } from 'react-icons/fa'
import { useReview } from '../context/ReviewContext'

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

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
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

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ReviewCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

const ReviewCardHeader = styled.div`
  position: relative;
`

const VideoThumbnail = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--surface-light);
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0) 50%);
    z-index: 1;
  }
`

const VideoIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
  transition: transform 0.3s ease;
  
  ${ReviewCard}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
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
  z-index: 2;
`

const ReviewCardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ReviewTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`

const ProductName = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #F59E0B;
`

const ReviewExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`

const ReviewMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--surface-light);
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const ReviewDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ReviewTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ReadMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-position: 100% 0%;
    transform: translateY(-2px);
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`

const ReviewsPage = () => {
  const { reviews } = useReview()
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  
  const categories = [...new Set(reviews.map(review => review.category))]
  
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          review.productName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === '' || review.category === categoryFilter
    const matchesFeatured = !showFeaturedOnly || review.featured
    
    return matchesSearch && matchesCategory && matchesFeatured
  })
  
  const toggleFeaturedFilter = () => {
    setShowFeaturedOnly(!showFeaturedOnly)
  }
  
  const getExcerpt = (content, maxLength = 150) => {
    // Remove HTML tags
    const plainText = content.replace(/<[^>]+>/g, ' ')
    
    if (plainText.length <= maxLength) return plainText
    
    return plainText.substring(0, maxLength).trim() + '...'
  }
  
  return (
    <div className="container">
      <PageHeader>
        <PageTitle>
          Product <span className="gradient-text">Reviews</span>
        </PageTitle>
        <PageDescription>
          Honest, in-depth reviews of the digital tools and services I've personally tested and evaluated.
        </PageDescription>
      </PageHeader>
      
      <FiltersContainer>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search reviews..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <CategoryFilter 
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </CategoryFilter>
        
        <FilterButton 
          className={showFeaturedOnly ? 'active' : ''}
          onClick={toggleFeaturedFilter}
        >
          <FaFilter /> Featured Only
        </FilterButton>
      </FiltersContainer>
      
      {filteredReviews.length > 0 ? (
        <ReviewsGrid>
          {filteredReviews.map(review => (
            <ReviewCard 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReviewCardHeader>
                <VideoThumbnail>
                  <VideoIcon>
                    <FaYoutube />
                  </VideoIcon>
                </VideoThumbnail>
                {review.featured && (
                  <FeaturedBadge>Featured</FeaturedBadge>
                )}
              </ReviewCardHeader>
              
              <ReviewCardBody>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ProductName>{review.productName}</ProductName>
                
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(review.rating) ? '#F59E0B' : '#334155'} />
                  ))}
                  <span style={{ marginLeft: '0.5rem', color: 'var(--text)' }}>{review.rating.toFixed(1)}</span>
                </Rating>
                
                <ReviewExcerpt>
                  {getExcerpt(review.content)}
                </ReviewExcerpt>
                
                <ReadMoreButton to={`/reviews/${review.id}`}>
                  Read Full Review
                </ReadMoreButton>
                
                <ReviewMeta>
                  <ReviewDate>
                    <FaCalendarAlt /> {review.date}
                  </ReviewDate>
                  <ReviewTags>
                    <FaTags /> {review.category}
                  </ReviewTags>
                </ReviewMeta>
              </ReviewCardBody>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      ) : (
        <NoResults>
          No reviews found matching your filters.
        </NoResults>
      )}
    </div>
  )
}

export default ReviewsPage
