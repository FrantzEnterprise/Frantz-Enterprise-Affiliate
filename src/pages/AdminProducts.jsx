import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaArrowLeft } from 'react-icons/fa'
import { ProductContext } from '../context/ProductContext'

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
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
  }
`

const ProductTable = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid var(--surface-light);
    transition: background-color 0.3s ease;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  td {
    padding: 1rem;
    color: var(--text-secondary);
  }
`

const ProductTitle = styled.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`

const ProductCategory = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const FeaturedBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`

const NotFeaturedBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`

const EditButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`

const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
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

const ConfirmDialog = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const DialogContent = styled(motion.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }
`

const DialogActions = styled.div`
  display: flex;
  gap: 1rem;
  
  button {
    flex: 1;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cancel {
    background-color: var(--surface-light);
    border: none;
    color: var(--text);
    
    &:hover {
      background-color: var(--surface-light);
    }
  }
  
  .confirm {
    background-color: var(--error);
    border: none;
    color: white;
    
    &:hover {
      opacity: 0.9;
    }
  }
`

const AdminProducts = () => {
  const { products, deleteProduct } = useContext(ProductContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))]
  
  // Filter products based on search, category, and featured status
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || 
                            product.category === selectedCategory
    
    const matchesFeatured = !showFeaturedOnly || product.featured
    
    return matchesSearch && matchesCategory && matchesFeatured
  })
  
  const handleDeleteClick = (product) => {
    setDeleteConfirm(product)
  }
  
  const confirmDelete = () => {
    if (deleteConfirm) {
      deleteProduct(deleteConfirm.id)
      setDeleteConfirm(null)
    }
  }
  
  const cancelDelete = () => {
    setDeleteConfirm(null)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <BackLink to="/admin/dashboard">
          <FaArrowLeft /> Back to Dashboard
        </BackLink>
        
        <PageHeader>
          <PageTitle>Manage Products</PageTitle>
          <AddButton to="/admin/products/new">
            <FaPlus /> Add New Product
          </AddButton>
        </PageHeader>
        
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
        
        {filteredProducts.length > 0 ? (
          <ProductTable>
            <Table>
              <TableHead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Featured</th>
                  <th>Actions</th>
                </tr>
              </TableHead>
              <TableBody>
                {filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductCategory>{product.category}</ProductCategory>
                    </td>
                    <td>{product.category}</td>
                    <td>
                      {product.featured ? (
                        <FeaturedBadge>Featured</FeaturedBadge>
                      ) : (
                        <NotFeaturedBadge>Not Featured</NotFeaturedBadge>
                      )}
                    </td>
                    <td>
                      <ActionButtons>
                        <EditButton to={`/admin/products/${product.id}`}>
                          <FaEdit />
                        </EditButton>
                        <DeleteButton onClick={() => handleDeleteClick(product)}>
                          <FaTrash />
                        </DeleteButton>
                      </ActionButtons>
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </ProductTable>
        ) : (
          <NoResults>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </NoResults>
        )}
        
        {deleteConfirm && (
          <ConfirmDialog
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DialogContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Confirm Deletion</h3>
              <p>Are you sure you want to delete "{deleteConfirm.title}"? This action cannot be undone.</p>
              <DialogActions>
                <button className="cancel" onClick={cancelDelete}>Cancel</button>
                <button className="confirm" onClick={confirmDelete}>Delete</button>
              </DialogActions>
            </DialogContent>
          </ConfirmDialog>
        )}
      </div>
    </motion.div>
  )
}

export default AdminProducts
