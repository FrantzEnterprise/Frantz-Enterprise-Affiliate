import React, { createContext, useState, useEffect, useContext } from 'react'

export const ProductContext = createContext()

const initialProducts = [
  {
    id: '1',
    title: 'Premium Email Marketing Software',
    description: 'Boost your email campaigns with our advanced email marketing solution. Features include automation, A/B testing, analytics, and high deliverability rates.',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/email-marketing',
    category: 'Marketing',
    featured: true
  },
  {
    id: '2',
    title: 'AI-Powered Content Creator',
    description: 'Create engaging content in seconds with our AI content generator. Perfect for blogs, social media, and marketing materials.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/ai-content',
    category: 'Content',
    featured: true
  },
  {
    id: '3',
    title: 'All-in-One SEO Toolkit',
    description: 'Dominate search rankings with our comprehensive SEO suite. Includes keyword research, competitor analysis, backlink monitoring, and more.',
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/seo-toolkit',
    category: 'SEO',
    featured: false
  },
  {
    id: '4',
    title: 'Social Media Management Platform',
    description: 'Manage all your social media accounts from one dashboard. Schedule posts, analyze performance, and engage with your audience efficiently.',
    image: 'https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/social-media',
    category: 'Social Media',
    featured: true
  },
  {
    id: '5',
    title: 'E-commerce Conversion Optimizer',
    description: 'Increase your online store conversion rates with our AI-driven optimization tool. Personalized recommendations, cart abandonment recovery, and more.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/ecommerce-optimizer',
    category: 'E-commerce',
    featured: false
  },
  {
    id: '6',
    title: 'Professional Webinar Platform',
    description: 'Host engaging webinars with our feature-rich platform. Interactive tools, recording capabilities, and detailed analytics included.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/webinar-platform',
    category: 'Webinars',
    featured: false
  }
]

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : initialProducts
  })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    }
    setProducts([...products, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    ))
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const getProduct = (id) => {
    return products.find(product => product.id === id)
  }

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      updateProduct, 
      deleteProduct,
      getProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}

// Add the missing useProduct hook
export const useProduct = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}
