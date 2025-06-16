import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaArrowLeft } from 'react-icons/fa'
import { SubscriptionContext } from '../context/SubscriptionContext'

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
  }
`

const SubscriptionTable = styled.div`
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

const SubscriptionTitle = styled.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`

const SubscriptionCategory = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const SubscriptionPrice = styled.div`
  font-weight: 500;
  color: var(--accent);
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

const AvailabilityBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  
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

const DialogOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 40;
`

const ConfirmDialog = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 50;
`

const DialogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`

const DialogText = styled.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
`

const DialogButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const CancelButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-lighter);
  }
`

const ConfirmButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--error);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error-dark);
  }
`

const AdminSubscriptions = () => {
  const { subscriptions, deleteSubscription } = useContext(SubscriptionContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState('')
  const [featuredFilter, setFeaturedFilter] = useState(false)
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  
  const categories = [...new Set(subscriptions.map(subscription => subscription.category))]
  const availabilityOptions = ['Open', 'Limited', 'Filled']
  
  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchesSearch = subscription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === '' || subscription.category === categoryFilter
    const matchesAvailability = availabilityFilter === '' || subscription.availability === availabilityFilter
    const matchesFeatured = !showFeaturedOnly || subscription.featured
    
    return matchesSearch && matchesCategory && matchesAvailability && matchesFeatured
  })
  
  const handleDelete = (id) => {
    setDeleteId(id)
  }
  
  const confirmDelete = () => {
    deleteSubscription(deleteId)
    setDeleteId(null)
  }
  
  const cancelDelete = () => {
    setDeleteId(null)
  }
  
  const toggleFeaturedFilter = () => {
    setShowFeaturedOnly(!showFeaturedOnly)
  }
  
  return (
    <div>
      <BackLink to="/admin">
        <FaArrowLeft /> Back to Admin Dashboard
      </BackLink>
      
      <PageHeader>
        <PageTitle>Manage Subscriptions</PageTitle>
        <AddButton to="/admin/subscriptions/add">
          <FaPlus /> Add New Subscription
        </AddButton>
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
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </CategoryFilter>
        
        <AvailabilityFilter 
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
        >
          <option value="">All Availability</option>
          {availabilityOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </AvailabilityFilter>
        
        <FilterButton 
          className={showFeaturedOnly ? 'active' : ''}
          onClick={toggleFeaturedFilter}
        >
          <FaFilter /> Featured Only
        </FilterButton>
      </FiltersContainer>
      
      {filteredSubscriptions.length > 0 ? (
        <SubscriptionTable>
          <Table>
            <TableHead>
              <tr>
                <th>Subscription</th>
                <th>Price</th>
                <th>Featured</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </TableHead>
            <TableBody>
              {filteredSubscriptions.map(subscription => (
                <tr key={subscription.id}>
                  <td>
                    <SubscriptionTitle>{subscription.title}</SubscriptionTitle>
                    <SubscriptionCategory>{subscription.category}</SubscriptionCategory>
                  </td>
                  <td>
                    <SubscriptionPrice>{subscription.price}</SubscriptionPrice>
                  </td>
                  <td>
                    {subscription.featured ? (
                      <FeaturedBadge>Featured</FeaturedBadge>
                    ) : (
                      <NotFeaturedBadge>Not Featured</NotFeaturedBadge>
                    )}
                  </td>
                  <td>
                    <AvailabilityBadge className={subscription.availability.toLowerCase()}>
                      {subscription.availability}
                    </AvailabilityBadge>
                  </td>
                  <td>
                    <ActionButtons>
                      <EditButton to={`/admin/subscriptions/edit/${subscription.id}`}>
                        <FaEdit />
                      </EditButton>
                      <DeleteButton onClick={() => handleDelete(subscription.id)}>
                        <FaTrash />
                      </DeleteButton>
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </SubscriptionTable>
      ) : (
        <NoResults>
          No subscriptions found matching your filters.
        </NoResults>
      )}
      
      {deleteId && (
        <>
          <DialogOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <ConfirmDialog
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <DialogTitle>Delete Subscription</DialogTitle>
            <DialogText>
              Are you sure you want to delete this subscription? This action cannot be undone.
            </DialogText>
            <DialogButtons>
              <CancelButton onClick={cancelDelete}>Cancel</CancelButton>
              <ConfirmButton onClick={confirmDelete}>Delete</ConfirmButton>
            </DialogButtons>
          </ConfirmDialog>
        </>
      )}
    </div>
  )
}

export default AdminSubscriptions
