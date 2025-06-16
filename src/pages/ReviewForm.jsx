import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaArrowLeft, FaSave, FaTimes, FaYoutube } from 'react-icons/fa'
import { useReview } from '../context/ReviewContext'
import { useProduct } from '../context/ProductContext'

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
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

const FormTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
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

const Select = styled.select`
  width: 100%;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 300px;
  resize: vertical;
  
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
`

const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`

const VideoPreviewContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const NoVideoPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
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
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const CancelButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-lighter);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const ErrorMessage = styled.div`
  color: var(--error);
  margin-top: 0.5rem;
  font-size: 0.875rem;
`

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const RatingInput = styled.input`
  width: 100px;
`

const RatingValue = styled.span`
  font-weight: 500;
  color: var(--text);
`

const TagsInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
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

const TagsHint = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`

const ReviewForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addReview, updateReview, getReview } = useReview()
  const { products } = useProduct()
  
  const [formData, setFormData] = useState({
    title: '',
    productName: '',
    rating: 4.5,
    videoUrl: '',
    content: '',
    category: '',
    tags: '',
    featured: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('')
  
  const isEditMode = !!id
  
  useEffect(() => {
    if (isEditMode) {
      const review = getReview(id)
      if (review) {
        setFormData({
          ...review,
          tags: review.tags.join(', ')
        })
        setVideoPreviewUrl(review.videoUrl)
      }
    }
  }, [id, isEditMode, getReview])
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required'
    }
    
    if (!formData.videoUrl.trim()) {
      newErrors.videoUrl = 'Video URL is required'
    } else if (!isValidYouTubeUrl(formData.videoUrl)) {
      newErrors.videoUrl = 'Please enter a valid YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    }
    
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const isValidYouTubeUrl = (url) => {
    return url.includes('youtube.com/embed/')
  }
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }
  
  const handleVideoUrlChange = (e) => {
    const { value } = e.target
    
    setFormData(prev => ({
      ...prev,
      videoUrl: value
    }))
    
    // Update video preview if valid URL
    if (isValidYouTubeUrl(value)) {
      setVideoPreviewUrl(value)
    }
    
    // Clear error when field is edited
    if (errors.videoUrl) {
      setErrors(prev => ({
        ...prev,
        videoUrl: undefined
      }))
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      const reviewData = {
        ...formData,
        rating: parseFloat(formData.rating),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      }
      
      try {
        if (isEditMode) {
          updateReview(id, reviewData)
        } else {
          addReview(reviewData)
        }
        
        navigate('/admin/reviews')
      } catch (error) {
        console.error('Error saving review:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }
  
  return (
    <div className="container">
      <FormContainer>
        <BackLink to="/admin/reviews">
          <FaArrowLeft /> Back to Reviews
        </BackLink>
        
        <FormTitle>
          {isEditMode ? 'Edit Review' : 'Add New Review'}
        </FormTitle>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Review Title</Label>
            <Input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter a compelling title for your review"
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="productName">Product Name</Label>
            <Select 
              id="productName" 
              name="productName" 
              value={formData.productName}
              onChange={handleChange}
            >
              <option value="">Select a product</option>
              {products.map(product => (
                <option key={product.id} value={product.title}>{product.title}</option>
              ))}
              <option value="other">Other (not in list)</option>
            </Select>
            {formData.productName === 'other' && (
              <Input 
                type="text" 
                name="productName" 
                value=""
                onChange={handleChange}
                placeholder="Enter product name"
                style={{ marginTop: '0.5rem' }}
              />
            )}
            {errors.productName && <ErrorMessage>{errors.productName}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="rating">Rating</Label>
            <RatingContainer>
              <RatingInput 
                type="range" 
                id="rating" 
                name="rating" 
                min="1" 
                max="5" 
                step="0.1" 
                value={formData.rating}
                onChange={handleChange}
              />
              <RatingValue>{formData.rating}</RatingValue>
            </RatingContainer>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="videoUrl">YouTube Video URL (Embed URL)</Label>
            <Input 
              type="text" 
              id="videoUrl" 
              name="videoUrl" 
              value={formData.videoUrl}
              onChange={handleVideoUrlChange}
              placeholder="https://www.youtube.com/embed/VIDEO_ID"
            />
            {errors.videoUrl && <ErrorMessage>{errors.videoUrl}</ErrorMessage>}
            
            <VideoPreviewContainer>
              {videoPreviewUrl ? (
                <VideoIframe 
                  src={videoPreviewUrl}
                  title="Video Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <NoVideoPreview>
                  <FaYoutube />
                  <p>Enter a valid YouTube embed URL to see preview</p>
                </NoVideoPreview>
              )}
            </VideoPreviewContainer>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <Select 
              id="category" 
              name="category" 
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Marketing">Marketing</option>
              <option value="Content">Content</option>
              <option value="SEO">SEO</option>
              <option value="Social Media">Social Media</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Productivity">Productivity</option>
              <option value="Analytics">Analytics</option>
            </Select>
            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="tags">Tags</Label>
            <TagsInput 
              type="text" 
              id="tags" 
              name="tags" 
              value={formData.tags}
              onChange={handleChange}
              placeholder="email marketing, automation, ROI"
            />
            <TagsHint>Separate tags with commas</TagsHint>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="content">Review Content (HTML)</Label>
            <TextArea 
              id="content" 
              name="content" 
              value={formData.content}
              onChange={handleChange}
              placeholder="<p>Write your detailed review here. You can use HTML tags for formatting.</p>"
            />
            {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <CheckboxContainer>
              <Checkbox 
                type="checkbox" 
                id="featured" 
                name="featured" 
                checked={formData.featured}
                onChange={handleChange}
              />
              <Label htmlFor="featured" style={{ marginBottom: 0 }}>Feature this review</Label>
            </CheckboxContainer>
          </FormGroup>
          
          <ButtonGroup>
            <SaveButton type="submit" disabled={isSubmitting}>
              <FaSave /> {isSubmitting ? 'Saving...' : 'Save Review'}
            </SaveButton>
            <CancelButton to="/admin/reviews">
              <FaTimes /> Cancel
            </CancelButton>
          </ButtonGroup>
        </form>
      </FormContainer>
    </div>
  )
}

export default ReviewForm
