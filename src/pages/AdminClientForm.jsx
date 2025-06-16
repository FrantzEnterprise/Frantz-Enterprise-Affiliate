import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaSave, FaTimes, FaCalendarAlt } from 'react-icons/fa'
import { useClient } from '../context/ClientContext'
import { useProduct } from '../context/ProductContext'
import { useSubscription } from '../context/SubscriptionContext'

const FormContainer = styled.div`
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
`

const FormCard = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
`

const FormSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--surface-light);
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
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

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
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

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.cancel {
    background-color: var(--surface-light);
    color: var(--text);
    
    &:hover {
      background-color: var(--surface-lighter);
    }
  }
  
  &.save {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
    }
  }
`

const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background-color: var(--surface);
  border-left: 4px solid var(--primary);
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
`

const AdminClientForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = Boolean(id)
  
  const { clients, addClient, updateClient, getClient } = useClient()
  const { products } = useProduct()
  const { subscriptions } = useSubscription()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    products: [],
    subscriptions: [],
    paymentCycle: 'monthly',
    nextPaymentDate: '',
    status: 'active',
    notes: ''
  })
  
  const [toast, setToast] = useState(null)
  
  // Load client data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const client = getClient(id)
      if (client) {
        setFormData({
          name: client.name,
          email: client.email,
          phone: client.phone || '',
          products: client.products || [],
          subscriptions: client.subscriptions || [],
          paymentCycle: client.paymentCycle || 'monthly',
          nextPaymentDate: client.nextPaymentDate || '',
          status: client.status || 'active',
          notes: client.notes || ''
        })
      } else {
        navigate('/admin/clients')
      }
    }
  }, [isEditMode, id, getClient, navigate])
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle checkbox changes for products and subscriptions
  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          [type]: [...prev[type], value]
        }
      } else {
        return {
          ...prev,
          [type]: prev[type].filter(item => item !== value)
        }
      }
    })
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.nextPaymentDate) {
      setToast('Please fill in all required fields')
      setTimeout(() => setToast(null), 3000)
      return
    }
    
    if (isEditMode) {
      updateClient(id, formData)
    } else {
      addClient(formData)
    }
    
    navigate('/admin/clients')
  }
  
  return (
    <div className="container">
      <FormContainer>
        <BackLink to="/admin/clients">
          <FaArrowLeft /> Back to Clients
        </BackLink>
        
        <FormTitle>
          {isEditMode ? 'Edit Client' : 'Add New Client'}
        </FormTitle>
        
        <form onSubmit={handleSubmit}>
          <FormCard>
            <FormSection>
              <SectionTitle>Client Information</SectionTitle>
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <FormInput 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <FormInput 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <FormInput 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="status">Status</FormLabel>
                  <FormSelect 
                    id="status" 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </FormSelect>
                </FormGroup>
              </FormGrid>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Payment Information</SectionTitle>
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="paymentCycle">Payment Cycle</FormLabel>
                  <FormSelect 
                    id="paymentCycle" 
                    name="paymentCycle" 
                    value={formData.paymentCycle} 
                    onChange={handleChange}
                  >
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="nextPaymentDate">Next Payment Date *</FormLabel>
                  <FormInput 
                    type="date" 
                    id="nextPaymentDate" 
                    name="nextPaymentDate" 
                    value={formData.nextPaymentDate} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Products & Subscriptions</SectionTitle>
              
              <FormGroup>
                <FormLabel>Products</FormLabel>
                <CheckboxContainer>
                  {products.map(product => (
                    <CheckboxGroup key={product.id}>
                      <CheckboxLabel>
                        <Checkbox 
                          type="checkbox" 
                          value={product.id}
                          checked={formData.products.includes(product.id)}
                          onChange={(e) => handleCheckboxChange(e, 'products')}
                        />
                        {product.title}
                      </CheckboxLabel>
                    </CheckboxGroup>
                  ))}
                </CheckboxContainer>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Subscriptions</FormLabel>
                <CheckboxContainer>
                  {subscriptions.map(subscription => (
                    <CheckboxGroup key={subscription.id}>
                      <CheckboxLabel>
                        <Checkbox 
                          type="checkbox" 
                          value={subscription.id}
                          checked={formData.subscriptions.includes(subscription.id)}
                          onChange={(e) => handleCheckboxChange(e, 'subscriptions')}
                        />
                        {subscription.title}
                      </CheckboxLabel>
                    </CheckboxGroup>
                  ))}
                </CheckboxContainer>
              </FormGroup>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Additional Information</SectionTitle>
              <FormGroup>
                <FormLabel htmlFor="notes">Notes</FormLabel>
                <FormTextarea 
                  id="notes" 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleChange}
                  placeholder="Add any additional notes about this client..."
                />
              </FormGroup>
            </FormSection>
          </FormCard>
          
          <ButtonGroup>
            <Button 
              type="button" 
              className="cancel"
              onClick={() => navigate('/admin/clients')}
            >
              <FaTimes /> Cancel
            </Button>
            <Button type="submit" className="save">
              <FaSave /> {isEditMode ? 'Update Client' : 'Save Client'}
            </Button>
          </ButtonGroup>
        </form>
        
        {toast && (
          <Toast
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {toast}
          </Toast>
        )}
      </FormContainer>
    </div>
  )
}

export default AdminClientForm
