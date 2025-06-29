import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { getProxiedImageUrl, getAlternativeProxiedUrl, testImageUrl } from '../utils/imageProxy'

const Card = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
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

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--surface-light);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  color: var(--text);
`

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
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
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &.disabled {
    background: var(--surface-light);
    color: var(--text-secondary);
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
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
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const PriceBadge = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  backdrop-filter: blur(4px);
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const ProductCard = ({ product }) => {
  const [imageState, setImageState] = useState('loading') // loading, loaded, error
  const [currentImageUrl, setCurrentImageUrl] = useState(null)
  
  console.log('ProductCard received product:', product)
  
  // Get the original image URL
  const originalImageUrl = product.image || product.imageUrl || product.img
  console.log('Original image URL:', originalImageUrl)
  
  useEffect(() => {
    const loadImage = async () => {
      if (!originalImageUrl) {
        setImageState('error')
        return
      }
      
      setImageState('loading')
      
      // First try the original URL
      console.log('Testing original URL:', originalImageUrl)
      const originalWorks = await testImageUrl(originalImageUrl)
      
      if (originalWorks) {
        console.log('Original URL works:', originalImageUrl)
        setCurrentImageUrl(originalImageUrl)
        setImageState('loaded')
        return
      }
      
      // Try proxied URL
      const proxiedUrl = getProxiedImageUrl(originalImageUrl)
      console.log('Testing proxied URL:', proxiedUrl)
      const proxiedWorks = await testImageUrl(proxiedUrl)
      
      if (proxiedWorks) {
        console.log('Proxied URL works:', proxiedUrl)
        setCurrentImageUrl(proxiedUrl)
        setImageState('loaded')
        return
      }
      
      // Try alternative proxy
      const altProxiedUrl = getAlternativeProxiedUrl(originalImageUrl)
      console.log('Testing alternative proxied URL:', altProxiedUrl)
      const altProxiedWorks = await testImageUrl(altProxiedUrl)
      
      if (altProxiedWorks) {
        console.log('Alternative proxied URL works:', altProxiedUrl)
        setCurrentImageUrl(altProxiedUrl)
        setImageState('loaded')
        return
      }
      
      // All attempts failed
      console.error('All image loading attempts failed for:', originalImageUrl)
      setImageState('error')
    }
    
    loadImage()
  }, [originalImageUrl])
  
  const handleLinkClick = (e) => {
    if (!product.link && !product.affiliateLink) {
      e.preventDefault()
    }
  }

  const renderImageContent = () => {
    switch (imageState) {
      case 'loading':
        return (
          <ImagePlaceholder>
            <LoadingSpinner />
            <div>Loading image...</div>
          </ImagePlaceholder>
        )
      
      case 'loaded':
        return (
          <img 
            src={currentImageUrl} 
            alt={product.title || product.name || 'Product image'}
            onLoad={() => console.log('Image rendered successfully:', currentImageUrl)}
            onError={(e) => {
              console.error('Image render failed:', currentImageUrl)
              setImageState('error')
            }}
          />
        )
      
      case 'error':
      default:
        return (
          <ImagePlaceholder>
            <div className="icon">📷</div>
            <div>Image unavailable</div>
            <small>{product.title || product.name || 'Untitled Product'}</small>
          </ImagePlaceholder>
        )
    }
  }

  return (
    <Card 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
    >
      {product.featured && <FeaturedBadge>Featured</FeaturedBadge>}
      {product.category && <CategoryBadge>{product.category}</CategoryBadge>}
      {product.price && <PriceBadge>${product.price}</PriceBadge>}
      
      <CardImage>
        {renderImageContent()}
      </CardImage>
      
      <CardContent>
        <CardTitle>{product.title || product.name || 'Untitled Product'}</CardTitle>
        <CardDescription>
          {product.description || 'No description available for this product.'}
        </CardDescription>
        <CardLink 
          href={product.link || product.affiliateLink || '#'} 
          target={product.link || product.affiliateLink ? "_blank" : "_self"}
          rel={product.link || product.affiliateLink ? "noopener noreferrer" : ""}
          className={!(product.link || product.affiliateLink) ? 'disabled' : ''}
          onClick={handleLinkClick}
        >
          {product.link || product.affiliateLink ? 'Learn More' : 'No Link Available'} <FaExternalLinkAlt />
        </CardLink>
      </CardContent>
    </Card>
  )
}

export default ProductCard
