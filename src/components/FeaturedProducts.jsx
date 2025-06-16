import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard'
import { FaArrowRight } from 'react-icons/fa'

const Section = styled.section`
  padding: 5rem 0;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  font-weight: 500;
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
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

const FeaturedProducts = () => {
  const { products } = useContext(ProductContext)
  const featuredProducts = products.filter(product => product.featured).slice(0, 3)
  
  return (
    <Section>
      <div className="container">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>
              Featured <span className="gradient-text">Products</span>
            </SectionTitle>
            <SectionSubtitle>
              Discover our hand-picked selection of premium digital tools and services that can transform your business and boost your productivity.
            </SectionSubtitle>
          </motion.div>
        </SectionHeader>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductGrid>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ViewAllLink to="/products">
            View All Products <FaArrowRight />
          </ViewAllLink>
        </motion.div>
      </div>
    </Section>
  )
}

export default FeaturedProducts
