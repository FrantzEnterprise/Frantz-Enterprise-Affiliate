import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSave, FaArrowLeft, FaImage, FaLink, FaTag, FaStar, FaCheck } from 'react-icons/fa'
import { SubscriptionContext } from '../context/SubscriptionContext'

const PageHeader = styled.div`
  margin-bottom: 2rem;
  padding-top: 2rem;
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`

const PageSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
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

const FormContainer = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 3rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const Select = styled.select`
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
  user-select: none;
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`

const CancelButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
`

const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
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
`

const ImagePreview = styled.div`
  margin-top: 1rem;
  border-radius: 0.375rem;
  overflow: hidden;
  max-width: 300px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #10B981;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const SubscriptionForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addSubscription, updateSubscription, getSubscription } = useContext(SubscriptionContext)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const isEditMode = !!id
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    category: '',
    featured: false,
    price: '',
    availability: 'Open'
  })
  
  const [errors, setErrors] = useState({})
  
  useEffect(() => {
    if (isEditMode) {
      const subscription = getSubscription(id)
      if (subscription) {
        setFormData(subscription)
      } else {
        navigate('/admin/subscriptions')
      }
    }
  }, [id, isEditMode, getSubscription, navigate])
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
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
      newErrors.link = 'Link is required'
    } else if (!isValidUrl(formData.link)) {
      newErrors.link = 'Please enter a valid URL'
    }
    
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required'
    }
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required'
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
    
    if (validateForm()) {
      if (isEditMode) {
        updateSubscription(id, formData)
      } else {
        addSubscription(formData)
      }
      
      setShowSuccess(true)
      
      setTimeout(() => {
        setShowSuccess(false)
        navigate('/admin/subscriptions')
      }, 2000)
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
        <BackLink to="/admin/subscriptions">
          <FaArrowLeft /> Back to Subscriptions
        </BackLink>
        
        <PageHeader>
          <PageTitle>{isEditMode ? 'Edit Subscription' : 'Add New Subscription'}</PageTitle>
          <PageSubtitle>
            {isEditMode 
              ? 'Update the details of an existing subscription' 
              : 'Create a new subscription to offer to your customers'}
          </PageSubtitle>
        </PageHeader>
        
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">
                <FaTag /> Subscription Title
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter subscription title"
              />
              {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter subscription description"
              />
              {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="image">
                  <FaImage /> Image URL
                </Label>
                <Input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
                {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                {formData.image && isValidUrl(formData.image) && (
                  <ImagePreview>
                    <img src={formData.image} alt="Preview" />
                  </ImagePreview>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="link">
                  <FaLink /> Subscription Link
                </Label>
                <Input
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Enter subscription link"
                />
                {errors.link && <ErrorMessage>{errors.link}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="category">Category</Label>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Enter category (e.g., Business, Marketing)"
                />
                {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price (e.g., $29/month)"
                />
                {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="availability">Availability</Label>
                <Select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option value="Open">Open</option>
                  <option value="Limited">Limited</option>
                  <option value="Filled">Filled</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Featured Status</Label>
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <CheckboxLabel htmlFor="featured">
                    <FaStar /> Mark as featured subscription
                  </CheckboxLabel>
                </CheckboxContainer>
              </FormGroup>
            </FormRow>
            
            <FormActions>
              <CancelButton to="/admin/subscriptions">Cancel</CancelButton>
              <SaveButton type="submit">
                <FaSave /> {isEditMode ? 'Update Subscription' : 'Save Subscription'}
              </SaveButton>
            </FormActions>
          </form>
        </FormContainer>
        
        {showSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <FaCheck /> {isEditMode ? 'Subscription updated successfully!' : 'Subscription added successfully!'}
          </SuccessMessage>
        )}
      </div>
    </motion.div>
  )
}

export default SubscriptionForm
