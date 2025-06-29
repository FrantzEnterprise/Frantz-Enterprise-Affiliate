import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaSave, FaArrowLeft, FaTrash, FaUpload, FaLink, FaTimes, FaImages } from 'react-icons/fa'
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

const BackButton = styled(Link)`
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
    affiliateLink: '',
    category: '',
    featured: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageMode, setImageMode] = useState('url') // 'url', 'upload', or 'browse'
  const [dragOver, setDragOver] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [showBrowser, setShowBrowser] = useState(false)
  const [uploadedImages, setUploadedImages] = useState(() => {
    const saved = localStorage.getItem('uploadedImages')
    return saved ? JSON.parse(saved) : []
  })
  
  useEffect(() => {
    if (isEditMode && products) {
      const product = products.find(p => p.id === id)
      if (product) {
        console.log('Loading product for edit:', product)
        setFormData({
          name: product.name || product.title || '',
          description: product.description || '',
          price: product.price ? String(product.price) : '',
          imageUrl: product.imageUrl || product.image || '',
          affiliateLink: product.affiliateLink || product.link || '',
          category: product.category || '',
          featured: product.featured || false
        })
        
        // Set image mode based on existing data
        if (product.imageUrl || product.image) {
          setImageMode('url')
        }
      } else {
        navigate('/admin/products')
      }
    }
  }, [id, products, isEditMode, navigate])
  
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
        [name]: null
      }))
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
          imageUrl: imageUrl
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
      if (errors.imageUrl) {
        setErrors(prev => ({
          ...prev,
          imageUrl: null
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
      imageUrl: ''
    }))
    setImageFile(null)
  }
  
  const handleBrowseImageSelect = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      imageUrl: imageUrl
    }))
    setShowBrowser(false)
    
    // Clear any previous errors
    if (errors.imageUrl) {
      setErrors(prev => ({
        ...prev,
        imageUrl: null
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    // Helper function to safely get string value and trim
    const getStringValue = (value) => {
      if (value === null || value === undefined) return ''
      return String(value).trim()
    }
    
    const nameValue = getStringValue(formData.name)
    const descriptionValue = getStringValue(formData.description)
    const priceValue = getStringValue(formData.price)
    const categoryValue = getStringValue(formData.category)
    const affiliateLinkValue = getStringValue(formData.affiliateLink)
    
    if (!nameValue) {
      newErrors.name = 'Product name is required'
    }
    
    if (!descriptionValue) {
      newErrors.description = 'Description is required'
    }
    
    if (!priceValue) {
      newErrors.price = 'Price is required'
    } else {
      const numericPrice = parseFloat(priceValue)
      if (isNaN(numericPrice) || numericPrice < 0) {
        newErrors.price = 'Price must be a valid positive number'
      }
    }
    
    if (!categoryValue) {
      newErrors.category = 'Category is required'
    }
    
    if (!affiliateLinkValue) {
      newErrors.affiliateLink = 'Affiliate link is required'
    } else if (!affiliateLinkValue.startsWith('http')) {
      newErrors.affiliateLink = 'Please enter a valid URL (must start with http or https)'
    }
    
    // Only validate URL format, not image loading
    if (imageMode === 'url' && formData.imageUrl && !formData.imageUrl.startsWith('http') && !formData.imageUrl.startsWith('data:')) {
      newErrors.imageUrl = 'Please enter a valid image URL (must start with http or https)'
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
        price: parseFloat(formData.price),
        // Map form fields to product fields for consistency
        title: formData.name,
        image: formData.imageUrl,
        link: formData.affiliateLink
      }
      
      console.log('Submitting product data:', productData)
      
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
  
  // Check if we should show preview (any valid URL or data URL)
  const shouldShowPreview = formData.imageUrl && (
    formData.imageUrl.startsWith('http') || 
    formData.imageUrl.startsWith('data:')
  )
  
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
          <BackButton to="/admin/products">
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
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter product category"
            />
            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              step="0.01"
              min="0"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price (e.g., 29.99)"
            />
            {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="affiliateLink">Affiliate Link</Label>
            <Input
              type="url"
              id="affiliateLink"
              name="affiliateLink"
              value={formData.affiliateLink}
              onChange={handleChange}
              placeholder="Enter affiliate link (https://...)"
            />
            {errors.affiliateLink && <ErrorMessage>{errors.affiliateLink}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label>Product Image</Label>
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
                    name="imageUrl"
                    value={formData.imageUrl}
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
                            className={formData.imageUrl === img.url ? 'selected' : ''}
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
              
              {errors.imageUrl && <ErrorMessage>{errors.imageUrl}</ErrorMessage>}
              
              {shouldShowPreview && (
                <ImagePreview>
                  <img 
                    src={formData.imageUrl} 
                    alt="Product preview"
                  />
                  <RemoveImageButton type="button" onClick={handleRemoveImage}>
                    <FaTimes />
                  </RemoveImageButton>
                </ImagePreview>
              )}
            </ImageSection>
          </FormGroup>
          
          <FormGroup>
            <Label>
              <Input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                style={{ width: 'auto', marginRight: '0.5rem' }}
              />
              Featured Product
            </Label>
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
