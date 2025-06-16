import React, { createContext, useState, useEffect, useContext } from 'react'

export const ClientContext = createContext()

const initialClients = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    products: ['1', '4'],
    subscriptions: ['2'],
    paymentCycle: 'monthly',
    nextPaymentDate: '2023-06-15',
    status: 'active',
    notes: 'Prefers email communication'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 987-6543',
    products: ['3'],
    subscriptions: ['1', '4'],
    paymentCycle: 'yearly',
    nextPaymentDate: '2023-09-20',
    status: 'active',
    notes: 'Interested in premium offerings'
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'mchen@example.com',
    phone: '(555) 456-7890',
    products: ['2', '5'],
    subscriptions: [],
    paymentCycle: 'monthly',
    nextPaymentDate: '2023-06-05',
    status: 'pending',
    notes: 'New client, follow up about subscription options'
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '(555) 234-5678',
    products: [],
    subscriptions: ['3'],
    paymentCycle: 'monthly',
    nextPaymentDate: '2023-06-10',
    status: 'active',
    notes: 'Considering upgrading to yearly plan'
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'dwilson@example.com',
    phone: '(555) 876-5432',
    products: ['6'],
    subscriptions: ['5'],
    paymentCycle: 'yearly',
    nextPaymentDate: '2024-01-15',
    status: 'active',
    notes: 'Corporate account'
  }
]

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState(() => {
    const savedClients = localStorage.getItem('clients')
    return savedClients ? JSON.parse(savedClients) : initialClients
  })

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  const addClient = (client) => {
    const newClient = {
      ...client,
      id: Date.now().toString(),
      products: client.products || [],
      subscriptions: client.subscriptions || [],
      status: client.status || 'active'
    }
    setClients([...clients, newClient])
  }

  const updateClient = (id, updatedClient) => {
    setClients(clients.map(client => 
      client.id === id ? { ...client, ...updatedClient } : client
    ))
  }

  const deleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id))
  }

  const getClient = (id) => {
    return clients.find(client => client.id === id)
  }

  const getClientsWithUpcomingPayments = (daysThreshold) => {
    const today = new Date()
    return clients.filter(client => {
      if (!client.nextPaymentDate) return false
      
      const paymentDate = new Date(client.nextPaymentDate)
      const timeDiff = paymentDate.getTime() - today.getTime()
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
      
      return daysDiff <= daysThreshold && daysDiff >= 0 && client.status === 'active'
    })
  }

  const sendNotification = (clientId, notificationType) => {
    // In a real implementation, this would connect to an email service
    // For now, we'll just log the notification and return a success message
    const client = getClient(clientId)
    if (!client) return { success: false, message: 'Client not found' }
    
    let subject = ''
    let message = ''
    
    switch (notificationType) {
      case 'payment-reminder':
        subject = 'Payment Reminder'
        message = `Your payment for subscriptions is due in 10 days. Please use the following link to complete your payment.`
        break
      case 'payment-warning':
        subject = 'Payment Due Soon'
        message = `Your payment is due in 2 days. Please use the following link to complete your payment and avoid service interruption.`
        break
      case 'payment-thank-you':
        subject = 'Thank You for Your Payment'
        message = `Thank you for your recent payment. Your subscription has been extended.`
        break
      case 'subscription-ended':
        subject = 'Sorry to See You Go'
        message = `We're sorry to see you go. Your subscription has ended. We hope to serve you again in the future.`
        break
      default:
        subject = 'Notification'
        message = 'This is a notification from Frantz Enterprise.'
    }
    
    console.log(`Notification sent to ${client.email}: ${subject} - ${message}`)
    
    return { 
      success: true, 
      message: `Notification sent to ${client.name} (${client.email})` 
    }
  }

  return (
    <ClientContext.Provider value={{ 
      clients, 
      addClient, 
      updateClient, 
      deleteClient,
      getClient,
      getClientsWithUpcomingPayments,
      sendNotification
    }}>
      {children}
    </ClientContext.Provider>
  )
}

export const useClient = () => {
  const context = useContext(ClientContext)
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider')
  }
  return context
}
