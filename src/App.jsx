import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { SubscriptionProvider } from './context/SubscriptionContext'
import { ReviewProvider } from './context/ReviewContext'
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
import ReviewsPage from './pages/ReviewsPage'
import ReviewDetailPage from './pages/ReviewDetailPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

// Admin Pages
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import AdminSubscriptions from './pages/AdminSubscriptions'
import AdminReviews from './pages/AdminReviews'
import ProductForm from './pages/ProductForm'
import SubscriptionForm from './pages/SubscriptionForm'
import ReviewForm from './pages/ReviewForm'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ProductProvider>
          <SubscriptionProvider>
            <ReviewProvider>
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
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/reviews/:id" element={<ReviewDetailPage />} />
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
                    
                    <Route path="/admin/reviews" element={
                      <ProtectedRoute>
                        <AdminReviews />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/reviews/add" element={
                      <ProtectedRoute>
                        <ReviewForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/reviews/edit/:id" element={
                      <ProtectedRoute>
                        <ReviewForm />
                      </ProtectedRoute>
                    } />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </Router>
            </ReviewProvider>
          </SubscriptionProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
