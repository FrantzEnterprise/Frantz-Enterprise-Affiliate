import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSave, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'
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

const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const FormContainer = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 3rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const FormCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const FormCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: var(--primary);
  cursor: pointer;
`

const ErrorMessage = styled.div`
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

const SuccessMessage = styled.div`
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--success);
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

const PreviewContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid var(--surface-light);
  padding-top: 2rem;
`

const PreviewTitle = styled.h3`
  margin-bottom: 1.5rem;
`

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AdminEditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProduct, addProduct, updateProduct } = useContext(ProductContext)
  
  const isNewProduct = id === 'new'
  
  const initialFormState = {
    title: '',
    description: '',
    image: '',
    link: '',
    category: '',
    featured: false
  }
  
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  
  useEffect(() => {
    if (!isNewProduct) {
      const product = getProduct(id)
      if (product) {
        setFormData(product)
      } else {
        navigate('/admin/products')
      }
    }
  }, [id, isNewProduct, getProduct, navigate])
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    
    if (!formData.image.trim()) {
      newErrors.image = 'Image URL is required'
    } else if (!isValidUrl(formData.image)) {
      newErrors.image = 'Please enter a valid URL'
    }
    
    if (!formData.link.trim()) {
      newErrors.link = 'Affiliate link is required'
    } else if (!isValidUrl(formData.link)) {
      newErrors.link = 'Please enter a valid URL'
    }
    
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const isValidUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    setTimeout(() => {
      try {
        if (isNewProduct) {
          addProduct(formData)
          setSuccessMessage('Product added successfully!')
          setFormData(initialFormState)
        } else {
          updateProduct(id, formData)
          setSuccessMessage('Product updated successfully!')
        }
      } catch (error) {
        setErrors({ form: 'An error occurred. Please try again.' })
      } finally {
        setIsSubmitting(false)
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('')
        }, 3000)
      }
    }, 1000)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <BackLink to="/admin/products">
          <FaArrowLeft /> Back to Products
        </BackLink>
        
        <PageHeader>
          <PageTitle>{isNewProduct ? 'Add New Product' : 'Edit Product'}</PageTitle>
          <SaveButton 
            type="button" 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            <FaSave /> {isSubmitting ? 'Saving...' : 'Save Product'}
          </SaveButton>
        </PageHeader>
        
        <FormContainer>
          {errors.form && (
            <ErrorMessage>
              <FaExclamationTriangle /> {errors.form}
            </ErrorMessage>
          )}
          
          {successMessage && (
            <SuccessMessage>
              {successMessage}
            </SuccessMessage>
          )}
          
          <form onSubmit={handleSubmit}>
            <FormGrid>
              <FormGroup className="full-width">
                <FormLabel htmlFor="title">Product Title</FormLabel>
                <FormInput 
                  type="text" 
                  id="title" 
                  name="title" 
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && <div style={{ color: 'var(--error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.title}</div>}
              </FormGroup>
              
              <FormGroup className="full-width">
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormTextarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && <div style={{ color: 'var(--error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.description}</div>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="image">Image URL</FormLabel>
                <FormInput 
                  type="text" 
                  id="image" 
                  name="image" 
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && <div style={{ color: 'var(--error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.image}</div>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="link">Affiliate Link</FormLabel>
                <FormInput 
                  type="text" 
                  id="link" 
                  name="link" 
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://example.com/affiliate-link"
                />
                {errors.link && <div style={{ color: 'var(--error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.link}</div>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="category">Category</FormLabel>
                <FormSelect 
                  id="category" 
                  name="category" 
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="Marketing">Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Content">Content</option>
                  <option value="Social Media">Social Media</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Webinars">Webinars</option>
                </FormSelect>
                {errors.category && <div style={{ color: 'var(--error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.category}</div>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Featured Status</FormLabel>
                <FormCheckboxGroup>
                  <FormCheckbox 
                    type="checkbox" 
                    id="featured" 
                    name="featured" 
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <label htmlFor="featured">Mark as featured product</label>
                </FormCheckboxGroup>
              </FormGroup>
            </FormGrid>
          </form>
          
          {formData.image && (
            <PreviewContainer>
              <PreviewTitle>Image Preview</PreviewTitle>
              <ImagePreview>
                <img src={formData.image} alt="Product preview" />
              </ImagePreview>
            </PreviewContainer>
          )}
        </FormContainer>
      </div>
    </motion.div>
  )
}

export default AdminEditProduct
