import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaSave, FaArrowLeft, FaTrash, FaUpload } from 'react-icons/fa'
import { useProduct } from '../context/ProductContext'

const FormContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
`

const Title = styled.h1`
  font-size: 1.75rem;
  color: var(--text);
  margin: 0;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 500;
  color: var(--text);
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface-light);
  color: var(--text);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    outline: none;
  }
`

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface-light);
  color: var(--text);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    outline: none;
  }
`

const ImagePreview = styled.div`
  margin-top: 1rem;
  
  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 0.375rem;
    object-fit: cover;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`

const DangerButton = styled(Button)`
  background-color: transparent;
  color: var(--error);
  border: 1px solid var(--error);
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`

const UploadButton = styled(Button)`
  background-color: var(--surface-light);
  color: var(--text);
  border: 1px solid var(--border);
  
  &:hover {
    background-color: var(--surface-hover);
  }
`

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`

const ProductForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, addProduct, updateProduct, deleteProduct } = useProduct()
  const isEditMode = !!id
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    affiliateLink: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect(() => {
    if (isEditMode && products) {
      const product = products.find(p => p.id === id)
      if (product) {
        setFormData({
          name: product.name || '',
          description: product.description || '',
          price: product.price || '',
          imageUrl: product.imageUrl || '',
          affiliateLink: product.affiliateLink || ''
        })
      } else {
        navigate('/admin/products')
      }
    }
  }, [id, products, isEditMode, navigate])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required'
    } else if (isNaN(parseFloat(formData.price))) {
      newErrors.price = 'Price must be a valid number'
    }
    
    if (!formData.affiliateLink.trim()) {
      newErrors.affiliateLink = 'Affiliate link is required'
    } else if (!formData.affiliateLink.startsWith('http')) {
      newErrors.affiliateLink = 'Please enter a valid URL'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price)
      }
      
      if (isEditMode) {
        await updateProduct(id, productData)
      } else {
        await addProduct(productData)
      }
      
      navigate('/admin/products')
    } catch (error) {
      console.error('Error saving product:', error)
      setErrors(prev => ({
        ...prev,
        form: 'Failed to save product. Please try again.'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id)
        navigate('/admin/products')
      } catch (error) {
        console.error('Error deleting product:', error)
        setErrors(prev => ({
          ...prev,
          form: 'Failed to delete product. Please try again.'
        }))
      }
    }
  }
  
  const handleImageUpload = (e) => {
    // In a real implementation, this would handle file uploads
    // For now, we'll just simulate by allowing URL input
    alert('In a production environment, this would open a file picker to upload an image.')
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FormContainer>
        <FormHeader>
          <Title>{isEditMode ? 'Edit Product' : 'Add New Product'}</Title>
          <BackButton onClick={() => navigate('/admin/products')}>
            <FaArrowLeft /> Back to Products
          </BackButton>
        </FormHeader>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
            {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="affiliateLink">Affiliate Link</Label>
            <Input
              type="text"
              id="affiliateLink"
              name="affiliateLink"
              value={formData.affiliateLink}
              onChange={handleChange}
              placeholder="Enter affiliate link"
            />
            {errors.affiliateLink && <ErrorMessage>{errors.affiliateLink}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
            <UploadButton type="button" onClick={handleImageUpload}>
              <FaUpload /> Upload Image
            </UploadButton>
            
            {formData.imageUrl && (
              <ImagePreview>
                <img src={formData.imageUrl} alt="Product preview" />
              </ImagePreview>
            )}
          </FormGroup>
          
          {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
          
          <ButtonsContainer>
            {isEditMode && (
              <DangerButton type="button" onClick={handleDelete}>
                <FaTrash /> Delete Product
              </DangerButton>
            )}
            
            <PrimaryButton type="submit" disabled={isSubmitting}>
              <FaSave /> {isSubmitting ? 'Saving...' : 'Save Product'}
            </PrimaryButton>
          </ButtonsContainer>
        </Form>
      </FormContainer>
    </motion.div>
  )
}

export default ProductForm
