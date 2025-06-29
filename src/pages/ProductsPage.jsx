import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ProductContext } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import { FaSearch, FaFilter, FaBug } from 'react-icons/fa'

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

const DebugButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  &:hover {
    background: var(--secondary);
    transform: scale(1.1);
  }
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`

const ProductCount = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const ProductsPage = () => {
  const { products, debugProducts } = useContext(ProductContext)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  
  const location = useLocation()
  
  // Debug logging
  useEffect(() => {
    console.log('ProductsPage - products from context:', products)
    console.log('ProductsPage - products length:', products?.length)
  }, [products])
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))]
  
  // Handle URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryParam = params.get('category')
    
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [location])
  
  // Filter products based on search, category, and featured status
  useEffect(() => {
    let results = products
    
    if (searchTerm) {
      results = results.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (selectedCategory && selectedCategory !== 'All') {
      results = results.filter(product => product.category === selectedCategory)
    }
    
    if (showFeaturedOnly) {
      results = results.filter(product => product.featured)
    }
    
    console.log('Filtered products:', results)
    setFilteredProducts(results)
  }, [products, searchTerm, selectedCategory, showFeaturedOnly])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <PageHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PageTitle>
              Our <span className="gradient-text">Products</span>
            </PageTitle>
            <PageDescription>
              Explore our curated selection of premium digital tools and services to help your business grow and succeed.
            </PageDescription>
          </motion.div>
        </PageHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FiltersContainer>
            <SearchContainer>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchInput 
                type="text" 
                placeholder="Search products..." 
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
                category !== 'All' && (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              ))}
            </CategoryFilter>
            
            <FilterButton 
              className={showFeaturedOnly ? 'active' : ''}
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            >
              <FaFilter /> Featured Only
            </FilterButton>
          </FiltersContainer>
        </motion.div>
        
        <ProductCount>
          Showing {filteredProducts.length} of {products.length} products
        </ProductCount>
        
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProductGrid>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </motion.div>
        ) : (
          <NoResults>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </NoResults>
        )}
      </div>
      
      <DebugButton onClick={debugProducts} title="Debug Products">
        <FaBug />
      </DebugButton>
    </motion.div>
  )
}

export default ProductsPage
