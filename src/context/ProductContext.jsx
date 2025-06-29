import React, { createContext, useState, useEffect, useContext } from 'react'

export const ProductContext = createContext()

const initialProducts = [
  {
    id: '1',
    title: 'Premium Email Marketing Software',
    description: 'Boost your email campaigns with our advanced email marketing solution. Features include automation, A/B testing, analytics, and high deliverability rates.',
    image: 'https://frantzenterprise.com/wp-content/uploads/2024/01/he8ydqhtrna0k0dcgaie.jpg',
    link: 'https://example.com/email-marketing',
    category: 'Marketing',
    featured: true,
    price: 29.99
  },
  {
    id: '2',
    title: 'AI-Powered Content Creator',
    description: 'Create engaging content in seconds with our AI content generator. Perfect for blogs, social media, and marketing materials.',
    image: 'https://frantzenterprise.com/wp-content/uploads/2024/01/another-image.jpg',
    link: 'https://example.com/ai-content',
    category: 'Content',
    featured: true,
    price: 49.99
  },
  {
    id: '3',
    title: 'All-in-One SEO Toolkit',
    description: 'Dominate search rankings with our comprehensive SEO suite. Includes keyword research, competitor analysis, backlink monitoring, and more.',
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/seo-toolkit',
    category: 'SEO',
    featured: false,
    price: 39.99
  },
  {
    id: '4',
    title: 'Social Media Management Platform',
    description: 'Manage all your social media accounts from one dashboard. Schedule posts, analyze performance, and engage with your audience efficiently.',
    image: 'https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/social-media',
    category: 'Social Media',
    featured: true,
    price: 24.99
  },
  {
    id: '5',
    title: 'E-commerce Conversion Optimizer',
    description: 'Increase your online store conversion rates with our AI-driven optimization tool. Personalized recommendations, cart abandonment recovery, and more.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/ecommerce-optimizer',
    category: 'E-commerce',
    featured: false,
    price: 59.99
  },
  {
    id: '6',
    title: 'Professional Webinar Platform',
    description: 'Host engaging webinars with our feature-rich platform. Interactive tools, recording capabilities, and detailed analytics included.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/webinar-platform',
    category: 'Webinars',
    featured: false,
    price: 34.99
  }
]

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      try {
        const parsed = JSON.parse(savedProducts)
        console.log('Loaded products from localStorage:', parsed)
        return parsed
      } catch (error) {
        console.error('Error parsing saved products:', error)
        return initialProducts
      }
    }
    console.log('Using initial products:', initialProducts)
    return initialProducts
  })

  useEffect(() => {
    console.log('Saving products to localStorage:', products)
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    }
    console.log('Adding new product:', newProduct)
    setProducts(prevProducts => [...prevProducts, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    console.log('Updating product:', id, updatedProduct)
    setProducts(prevProducts => prevProducts.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    ))
  }

  const deleteProduct = (id) => {
    console.log('Deleting product:', id)
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
  }

  const getProduct = (id) => {
    const product = products.find(product => product.id === id)
    console.log('Getting product by id:', id, product)
    return product
  }

  // Debug function to log current products
  const debugProducts = () => {
    console.log('=== PRODUCT DEBUG INFO ===')
    console.log('Current products in context:', products)
    console.log('Products count:', products.length)
    console.log('LocalStorage products:', localStorage.getItem('products'))
    products.forEach((product, index) => {
      console.log(`Product ${index + 1}:`, {
        id: product.id,
        title: product.title,
        image: product.image,
        imageUrl: product.imageUrl,
        hasImage: !!(product.image || product.imageUrl)
      })
    })
    console.log('=== END DEBUG INFO ===')
  }

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      updateProduct, 
      deleteProduct,
      getProduct,
      debugProducts
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}
