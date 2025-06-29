import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaSave, FaArrowLeft, FaUpload, FaLink, FaTimes, FaImages, FaTag, FaStar, FaCheck } from 'react-icons/fa'
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

const ImageSection = styled.div`
  border: 2px dashed var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: var(--surface-light);
  transition: border-color 0.3s ease;
  
  &.drag-over {
    border-color: var(--primary);
    background: rgba(99, 102, 241, 0.05);
  }
`

const ImageOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageOptionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--surface-hover);
    border-color: var(--primary);
  }
  
  &.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`

const HiddenFileInput = styled.input`
  display: none;
`

const ImagePreview = styled.div`
  margin-top: 1rem;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 0.375rem;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const RemoveImageButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`

const DropZone = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  .text {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  .subtext {
    font-size: 0.875rem;
    opacity: 0.7;
  }
`

const ImageBrowser = styled.div`
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  padding: 1rem;
  background: var(--surface);
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
`

const BrowseImageItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 0.375rem;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
  }
  
  &.selected {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
  
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
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
  const [imageMode, setImageMode] = useState('url') // 'url', 'upload', or 'browse'
  const [dragOver, setDragOver] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [showBrowser, setShowBrowser] = useState(false)
  const [uploadedImages, setUploadedImages] = useState(() => {
    const saved = localStorage.getItem('uploadedImages')
    return saved ? JSON.parse(saved) : []
  })
  
  useEffect(() => {
    if (isEditMode) {
      const subscription = getSubscription(id)
      if (subscription) {
        setFormData(subscription)
        // Set image mode based on existing data
        if (subscription.image) {
          setImageMode('url')
        }
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
  
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImageFile(file)
      
      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target.result
        setFormData(prev => ({
          ...prev,
          image: imageUrl
        }))
        
        // Save to uploaded images for browsing
        const newUploadedImages = [...uploadedImages, {
          id: Date.now().toString(),
          url: imageUrl,
          name: file.name,
          timestamp: new Date().toISOString()
        }]
        setUploadedImages(newUploadedImages)
        localStorage.setItem('uploadedImages', JSON.stringify(newUploadedImages))
      }
      reader.readAsDataURL(file)
      
      // Clear any previous errors
      if (errors.image) {
        setErrors(prev => ({
          ...prev,
          image: null
        }))
      }
    } else {
      alert('Please select a valid image file (JPG, PNG, GIF, etc.)')
    }
  }
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }
  
  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }
  
  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }
  
  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }
  
  const handleRemoveImage = () => {
    setFormData(prev => ({
      ...prev,
      image: ''
    }))
    setImageFile(null)
  }
  
  const handleBrowseImageSelect = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      image: imageUrl
    }))
    setShowBrowser(false)
    
    // Clear any previous errors
    if (errors.image) {
      setErrors(prev => ({
        ...prev,
        image: null
      }))
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
      newErrors.image = 'Image is required'
    } else if (!formData.image.startsWith('http') && !formData.image.startsWith('data:')) {
      newErrors.image = 'Please enter a valid image URL (must start with http or https)'
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
  
  // Check if we should show preview (any valid URL or data URL)
  const shouldShowPreview = formData.image && (
    formData.image.startsWith('http') || 
    formData.image.startsWith('data:')
  )
  
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
            
            <FormGroup>
              <Label>Subscription Image</Label>
              <ImageSection className={dragOver ? 'drag-over' : ''}>
                <ImageOptions>
                  <ImageOptionButton
                    type="button"
                    className={imageMode === 'url' ? 'active' : ''}
                    onClick={() => setImageMode('url')}
                  >
                    <FaLink /> Image URL
                  </ImageOptionButton>
                  <ImageOptionButton
                    type="button"
                    className={imageMode === 'upload' ? 'active' : ''}
                    onClick={() => setImageMode('upload')}
                  >
                    <FaUpload /> Upload File
                  </ImageOptionButton>
                  <ImageOptionButton
                    type="button"
                    className={imageMode === 'browse' ? 'active' : ''}
                    onClick={() => {
                      setImageMode('browse')
                      setShowBrowser(true)
                    }}
                  >
                    <FaImages /> Browse Images
                  </ImageOptionButton>
                </ImageOptions>
                
                {imageMode === 'url' ? (
                  <div>
                    <Input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Enter image URL (https://...)"
                    />
                  </div>
                ) : imageMode === 'browse' ? (
                  <div>
                    {uploadedImages.length > 0 ? (
                      <ImageBrowser>
                        <ImageGrid>
                          {uploadedImages.map((img) => (
                            <BrowseImageItem
                              key={img.id}
                              className={formData.image === img.url ? 'selected' : ''}
                              onClick={() => handleBrowseImageSelect(img.url)}
                            >
                              <img src={img.url} alt={img.name} />
                            </BrowseImageItem>
                          ))}
                        </ImageGrid>
                      </ImageBrowser>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                        No uploaded images found. Upload some images first to browse them here.
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <HiddenFileInput
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      id="imageUpload"
                    />
                    <DropZone>
                      <div className="icon">📷</div>
                      <div className="text">
                        <label htmlFor="imageUpload" style={{ cursor: 'pointer', color: 'var(--primary)' }}>
                          Click to upload
                        </label> or drag and drop
                      </div>
                      <div className="subtext">PNG, JPG, GIF up to 10MB</div>
                    </DropZone>
                  </div>
                )}
                
                {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                
                {shouldShowPreview && (
                  <ImagePreview>
                    <img 
                      src={formData.image} 
                      alt="Subscription preview"
                    />
                    <RemoveImageButton type="button" onClick={handleRemoveImage}>
                      <FaTimes />
                    </RemoveImageButton>
                  </ImagePreview>
                )}
              </ImageSection>
            </FormGroup>
            
            <FormRow>
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
            </FormRow>
            
            <FormRow>
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
            </FormRow>
            
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
