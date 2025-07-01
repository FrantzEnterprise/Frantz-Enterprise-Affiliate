import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSearch, FaFilter, FaStar, FaCalendarAlt, FaTags, FaUser, FaChevronDown, FaChevronUp, FaUpload } from 'react-icons/fa'
import { useReview } from '../context/ReviewContext'
import { getProxiedImageUrl } from '../utils/imageProxy'

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
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
`

const ReviewCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

const ReviewCardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--surface-light) 0%, var(--surface) 100%);
`

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 1.5rem;
  flex-shrink: 0;
`

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  ${ReviewCard}:hover & {
    transform: scale(1.05);
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const AvatarPlaceholder = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`

const ReviewerInfo = styled.div`
  flex: 1;
`

const ReviewerName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`

const ReviewerTitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`

const ReviewDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
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
  padding: 2rem;
`

const ReviewTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`

const ProductName = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  color: #F59E0B;
`

const ReviewContent = styled.div`
  color: var(--text);
  line-height: 1.7;
  font-size: 1.125rem;
  
  h3 {
    font-size: 1.375rem;
    margin: 2rem 0 1rem;
    color: var(--text);
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: var(--text-secondary);
    background-color: var(--surface-light);
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 0 0.375rem 0.375rem 0;
  }
`

const ReviewExcerpt = styled.div`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  
  &:hover {
    background-position: 100% 0%;
    transform: translateY(-2px);
  }
`

const ReviewMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--surface-light);
  font-size: 0.875rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`

const ReviewTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  const [expandedReviews, setExpandedReviews] = useState(new Set())
  
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
  
  const toggleReviewExpansion = (reviewId) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }
  
  const getExcerpt = (content, maxLength = 200) => {
    // Remove HTML tags
    const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    
    if (plainText.length <= maxLength) return plainText
    
    return plainText.substring(0, maxLength).trim() + '...'
  }
  
  const isExpanded = (reviewId) => expandedReviews.has(reviewId)
  
  const getAvatarUrl = (review) => {
    // Try custom avatar first, then site URL favicon, then placeholder
    if (review.avatarUrl) {
      return getProxiedImageUrl(review.avatarUrl)
    }
    
    if (review.siteUrl) {
      return getProxiedImageUrl(`${review.siteUrl}/favicon.ico`)
    }
    
    return null
  }
  
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
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
                <AvatarContainer>
                  <Avatar>
                    {getAvatarUrl(review) ? (
                      <AvatarImage 
                        src={getAvatarUrl(review)}
                        alt={review.author}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <AvatarPlaceholder style={{ display: getAvatarUrl(review) ? 'none' : 'flex' }}>
                      {getInitials(review.author)}
                    </AvatarPlaceholder>
                  </Avatar>
                </AvatarContainer>
                
                <ReviewerInfo>
                  <ReviewerName>{review.author}</ReviewerName>
                  <ReviewerTitle>Product Reviewer & Tech Analyst</ReviewerTitle>
                  <ReviewDate>
                    <FaCalendarAlt /> {review.date}
                  </ReviewDate>
                </ReviewerInfo>
                
                {review.featured && (
                  <FeaturedBadge>Featured</FeaturedBadge>
                )}
              </ReviewCardHeader>
              
              <ReviewCardBody>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ProductName>Review of: {review.productName}</ProductName>
                
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(review.rating) ? '#F59E0B' : '#334155'} />
                  ))}
                  <span style={{ marginLeft: '0.5rem', color: 'var(--text)' }}>{review.rating.toFixed(1)}</span>
                </Rating>
                
                {!isExpanded(review.id) ? (
                  <ReviewExcerpt>
                    {getExcerpt(review.content)}
                  </ReviewExcerpt>
                ) : (
                  <ReviewContent dangerouslySetInnerHTML={{ __html: review.content }} />
                )}
                
                <ExpandButton onClick={() => toggleReviewExpansion(review.id)}>
                  {isExpanded(review.id) ? (
                    <>
                      <FaChevronUp /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> Read Full Review
                    </>
                  )}
                </ExpandButton>
                
                <ReviewMeta>
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
