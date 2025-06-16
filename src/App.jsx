import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { SubscriptionProvider } from './context/SubscriptionContext'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Public Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import SubscriptionsPage from './pages/SubscriptionsPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

// Admin Pages
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import AdminSubscriptions from './pages/AdminSubscriptions'
import ProductForm from './pages/ProductForm'
import SubscriptionForm from './pages/SubscriptionForm'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ProductProvider>
          <SubscriptionProvider>
            <Router>
              <ScrollToTop />
              <Navbar />
              <main>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/subscriptions" element={<SubscriptionsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/products" element={
                    <ProtectedRoute>
                      <AdminProducts />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/products/add" element={
                    <ProtectedRoute>
                      <ProductForm />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/products/edit/:id" element={
                    <ProtectedRoute>
                      <ProductForm />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/subscriptions" element={
                    <ProtectedRoute>
                      <AdminSubscriptions />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/subscriptions/add" element={
                    <ProtectedRoute>
                      <SubscriptionForm />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/subscriptions/edit/:id" element={
                    <ProtectedRoute>
                      <SubscriptionForm />
                    </ProtectedRoute>
                  } />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </SubscriptionProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
