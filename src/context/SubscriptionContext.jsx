import React, { createContext, useState, useEffect } from 'react'

export const SubscriptionContext = createContext()

const initialSubscriptions = [
  {
    id: '1',
    title: 'Premium CRM Software',
    description: 'Streamline your customer relationships with our advanced CRM solution. Features include contact management, sales pipeline tracking, and automated follow-ups.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/crm-software',
    category: 'Business',
    featured: true,
    price: '$29/month',
    availability: 'Open'
  },
  {
    id: '2',
    title: 'Cloud Storage Solution',
    description: 'Secure and scalable cloud storage for businesses of all sizes. Includes file versioning, team collaboration tools, and enterprise-grade security.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/cloud-storage',
    category: 'Storage',
    featured: true,
    price: '$15/month',
    availability: 'Limited'
  },
  {
    id: '3',
    title: 'Project Management Platform',
    description: 'Keep your team organized with our comprehensive project management tool. Track tasks, deadlines, resources, and generate detailed reports.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/project-management',
    category: 'Productivity',
    featured: false,
    price: '$24/month',
    availability: 'Open'
  },
  {
    id: '4',
    title: 'Marketing Automation Suite',
    description: 'Automate your marketing campaigns with our all-in-one platform. Includes email marketing, social media scheduling, and analytics.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/marketing-automation',
    category: 'Marketing',
    featured: true,
    price: '$39/month',
    availability: 'Open'
  },
  {
    id: '5',
    title: 'Advanced Analytics Platform',
    description: 'Turn your data into actionable insights with our powerful analytics solution. Features include custom dashboards, real-time reporting, and predictive analysis.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/analytics',
    category: 'Analytics',
    featured: false,
    price: '$49/month',
    availability: 'Limited'
  },
  {
    id: '6',
    title: 'Team Collaboration Suite',
    description: 'Enhance team productivity with our collaboration platform. Includes video conferencing, document sharing, and integrated chat.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/collaboration',
    category: 'Collaboration',
    featured: false,
    price: '$19/month',
    availability: 'Filled'
  }
]

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState(() => {
    const savedSubscriptions = localStorage.getItem('subscriptions')
    return savedSubscriptions ? JSON.parse(savedSubscriptions) : initialSubscriptions
  })

  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions))
  }, [subscriptions])

  const addSubscription = (subscription) => {
    const newSubscription = {
      ...subscription,
      id: Date.now().toString()
    }
    setSubscriptions([...subscriptions, newSubscription])
  }

  const updateSubscription = (id, updatedSubscription) => {
    setSubscriptions(subscriptions.map(subscription => 
      subscription.id === id ? { ...subscription, ...updatedSubscription } : subscription
    ))
  }

  const deleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter(subscription => subscription.id !== id))
  }

  const getSubscription = (id) => {
    return subscriptions.find(subscription => subscription.id === id)
  }

  return (
    <SubscriptionContext.Provider value={{ 
      subscriptions, 
      addSubscription, 
      updateSubscription, 
      deleteSubscription,
      getSubscription
    }}>
      {children}
    </SubscriptionContext.Provider>
  )
}
