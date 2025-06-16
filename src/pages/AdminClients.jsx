import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaArrowLeft, FaEnvelope, FaBell, FaCheck, FaExclamationTriangle } from 'react-icons/fa'
import { useClient } from '../context/ClientContext'
import { useProduct } from '../context/ProductContext'
import { useSubscription } from '../context/SubscriptionContext'

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

const StatusFilter = styled.select`
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

const PaymentCycleFilter = styled.select`
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

const ClientsTable = styled.div`
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

const ClientName = styled.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`

const ClientEmail = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  
  &.active {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.pending {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.inactive {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`

const PaymentDate = styled.div`
  font-weight: 500;
  color: var(--text);
  
  &.upcoming {
    color: #F59E0B;
  }
  
  &.overdue {
    color: #EF4444;
  }
`

const PaymentCycle = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.edit {
    background-color: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
  
  &.delete {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--error);
    
    &:hover {
      background-color: var(--error);
      color: white;
    }
  }
  
  &.notify {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
    
    &:hover {
      background-color: #F59E0B;
      color: white;
    }
  }
  
  &.thank {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
    
    &:hover {
      background-color: #10B981;
      color: white;
    }
  }
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

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`

const NotificationPanel = styled.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const NotificationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const NotificationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`

const NotificationCard = styled.div`
  background-color: var(--surface-light);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NotificationClient = styled.div`
  font-weight: 500;
`

const NotificationDate = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const NotificationActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const NotificationButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.reminder {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
    
    &:hover {
      background-color: #F59E0B;
      color: white;
    }
  }
  
  &.warning {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
    
    &:hover {
      background-color: #EF4444;
      color: white;
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
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 50;
  max-width: 24rem;
`

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  
  &.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`

const ToastContent = styled.div`
  flex: 1;
`

const ToastTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const ToastMessage = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`

const ConfirmDialog = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 28rem;
  z-index: 50;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

const ConfirmTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`

const ConfirmMessage = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`

const ConfirmActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const ConfirmButton = styled.button`
  padding: 0.75rem 1.25rem;
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
  
  &.confirm {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
    }
  }
  
  &.delete {
    background-color: var(--error);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.2);
    }
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`

const AdminClients = () => {
  const { clients, deleteClient, getClientsWithUpcomingPayments, sendNotification } = useClient()
  const { products } = useProduct()
  const { subscriptions } = useSubscription()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [paymentCycleFilter, setPaymentCycleFilter] = useState('all')
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [confirmAction, setConfirmAction] = useState(null)
  const [toast, setToast] = useState(null)
  
  // Get clients with upcoming payments
  const clientsWithUpcomingPayments = getClientsWithUpcomingPayments(10)
  const clientsWithUrgentPayments = getClientsWithUpcomingPayments(2)
  
  // Filter clients based on search and filters
  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    const matchesPaymentCycle = paymentCycleFilter === 'all' || client.paymentCycle === paymentCycleFilter
    
    return matchesSearch && matchesStatus && matchesPaymentCycle
  })
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  // Check if payment date is upcoming (within 10 days) or overdue
  const getPaymentDateStatus = (dateString) => {
    const today = new Date()
    const paymentDate = new Date(dateString)
    const timeDiff = paymentDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    
    if (daysDiff < 0) return 'overdue'
    if (daysDiff <= 10) return 'upcoming'
    return 'normal'
  }
  
  // Handle notification sending
  const handleSendNotification = (clientId, notificationType) => {
    const result = sendNotification(clientId, notificationType)
    
    setToast({
      type: result.success ? 'success' : 'error',
      title: result.success ? 'Notification Sent' : 'Error',
      message: result.message
    })
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }
  
  // Handle delete confirmation
  const handleDeleteConfirm = (clientId) => {
    setConfirmAction({
      type: 'delete',
      clientId,
      title: 'Delete Client',
      message: 'Are you sure you want to delete this client? This action cannot be undone.'
    })
    setShowConfirmDialog(true)
  }
  
  // Execute confirmed action
  const executeConfirmedAction = () => {
    if (!confirmAction) return
    
    if (confirmAction.type === 'delete') {
      deleteClient(confirmAction.clientId)
      setToast({
        type: 'success',
        title: 'Client Deleted',
        message: 'The client has been successfully deleted.'
      })
    }
    
    setShowConfirmDialog(false)
    setConfirmAction(null)
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }
  
  // Get product and subscription names for a client
  const getClientItemNames = (client) => {
    const productNames = client.products
      .map(id => products.find(p => p.id === id)?.title || 'Unknown Product')
      .join(', ')
    
    const subscriptionNames = client.subscriptions
      .map(id => subscriptions.find(s => s.id === id)?.title || 'Unknown Subscription')
      .join(', ')
    
    return {
      productNames: productNames || 'None',
      subscriptionNames: subscriptionNames || 'None'
    }
  }
  
  return (
    <div className="container">
      <BackLink to="/admin">
        <FaArrowLeft /> Back to Dashboard
      </BackLink>
      
      <PageHeader>
        <PageTitle>Client Management</PageTitle>
        <AddButton to="/admin/clients/add">
          <FaPlus /> Add New Client
        </AddButton>
      </PageHeader>
      
      {(clientsWithUpcomingPayments.length > 0 || clientsWithUrgentPayments.length > 0) && (
        <NotificationPanel>
          <NotificationTitle>
            <FaBell /> Payment Notifications
          </NotificationTitle>
          
          <NotificationList>
            {clientsWithUrgentPayments.map(client => (
              <NotificationCard key={`urgent-${client.id}`}>
                <NotificationHeader>
                  <NotificationClient>{client.name}</NotificationClient>
                  <StatusBadge className="active">Urgent</StatusBadge>
                </NotificationHeader>
                <NotificationDate>
                  Payment due: {formatDate(client.nextPaymentDate)}
                </NotificationDate>
                <NotificationActions>
                  <NotificationButton 
                    className="warning"
                    onClick={() => handleSendNotification(client.id, 'payment-warning')}
                  >
                    <FaExclamationTriangle /> Send 2-Day Warning
                  </NotificationButton>
                </NotificationActions>
              </NotificationCard>
            ))}
            
            {clientsWithUpcomingPayments
              .filter(client => !clientsWithUrgentPayments.some(c => c.id === client.id))
              .map(client => (
                <NotificationCard key={`upcoming-${client.id}`}>
                  <NotificationHeader>
                    <NotificationClient>{client.name}</NotificationClient>
                    <StatusBadge className="pending">Upcoming</StatusBadge>
                  </NotificationHeader>
                  <NotificationDate>
                    Payment due: {formatDate(client.nextPaymentDate)}
                  </NotificationDate>
                  <NotificationActions>
                    <NotificationButton 
                      className="reminder"
                      onClick={() => handleSendNotification(client.id, 'payment-reminder')}
                    >
                      <FaBell /> Send 10-Day Reminder
                    </NotificationButton>
                  </NotificationActions>
                </NotificationCard>
              ))}
          </NotificationList>
        </NotificationPanel>
      )}
      
      <FiltersContainer>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search clients..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <StatusFilter 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </StatusFilter>
        
        <PaymentCycleFilter 
          value={paymentCycleFilter}
          onChange={(e) => setPaymentCycleFilter(e.target.value)}
        >
          <option value="all">All Payment Cycles</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </PaymentCycleFilter>
      </FiltersContainer>
      
      {filteredClients.length > 0 ? (
        <ClientsTable>
          <Table>
            <TableHead>
              <tr>
                <th>Client</th>
                <th>Status</th>
                <th>Next Payment</th>
                <th>Products & Subscriptions</th>
                <th>Actions</th>
              </tr>
            </TableHead>
            <TableBody>
              {filteredClients.map(client => {
                const paymentDateStatus = getPaymentDateStatus(client.nextPaymentDate)
                const { productNames, subscriptionNames } = getClientItemNames(client)
                
                return (
                  <tr key={client.id}>
                    <td>
                      <ClientName>{client.name}</ClientName>
                      <ClientEmail>{client.email}</ClientEmail>
                    </td>
                    <td>
                      <StatusBadge className={client.status}>
                        {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td>
                      <PaymentDate className={paymentDateStatus}>
                        {formatDate(client.nextPaymentDate)}
                      </PaymentDate>
                      <PaymentCycle>
                        {client.paymentCycle.charAt(0).toUpperCase() + client.paymentCycle.slice(1)}
                      </PaymentCycle>
                    </td>
                    <td>
                      <div>
                        <strong>Products:</strong> {productNames}
                      </div>
                      <div>
                        <strong>Subscriptions:</strong> {subscriptionNames}
                      </div>
                    </td>
                    <td>
                      <ActionButtons>
                        <EditButton to={`/admin/clients/edit/${client.id}`} className="edit">
                          <FaEdit />
                        </EditButton>
                        
                        <ActionButton 
                          className="notify"
                          onClick={() => handleSendNotification(client.id, 'payment-reminder')}
                          title="Send Payment Reminder"
                        >
                          <FaBell />
                        </ActionButton>
                        
                        <ActionButton 
                          className="thank"
                          onClick={() => handleSendNotification(client.id, 'payment-thank-you')}
                          title="Send Thank You"
                        >
                          <FaCheck />
                        </ActionButton>
                        
                        <ActionButton 
                          className="delete"
                          onClick={() => handleDeleteConfirm(client.id)}
                          title="Delete Client"
                        >
                          <FaTrash />
                        </ActionButton>
                      </ActionButtons>
                    </td>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </ClientsTable>
      ) : (
        <NoResults>
          No clients found matching your filters.
        </NoResults>
      )}
      
      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <>
          <Overlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfirmDialog(false)}
          />
          <ConfirmDialog
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ConfirmTitle>{confirmAction?.title}</ConfirmTitle>
            <ConfirmMessage>{confirmAction?.message}</ConfirmMessage>
            <ConfirmActions>
              <ConfirmButton 
                className="cancel"
                onClick={() => setShowConfirmDialog(false)}
              >
                Cancel
              </ConfirmButton>
              <ConfirmButton 
                className={confirmAction?.type === 'delete' ? 'delete' : 'confirm'}
                onClick={executeConfirmedAction}
              >
                {confirmAction?.type === 'delete' ? 'Delete' : 'Confirm'}
              </ConfirmButton>
            </ConfirmActions>
          </ConfirmDialog>
        </>
      )}
      
      {/* Toast Notification */}
      {toast && (
        <Toast
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <ToastIcon className={toast.type}>
            {toast.type === 'success' ? <FaCheck /> : <FaExclamationTriangle />}
          </ToastIcon>
          <ToastContent>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastMessage>{toast.message}</ToastMessage>
          </ToastContent>
        </Toast>
      )}
    </div>
  )
}

export default AdminClients
