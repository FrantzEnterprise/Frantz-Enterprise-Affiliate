import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { SubscriptionProvider } from './context/SubscriptionContext'
import { ReviewProvider } from './context/ReviewContext'
import { ClientProvider } from './context/ClientContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Products from './pages/ProductsPage'
import Subscriptions from './pages/SubscriptionsPage'
import Reviews from './pages/ReviewsPage'
import Login from './pages/LoginPage'
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import ProductForm from './pages/ProductForm'
import AdminSubscriptions from './pages/AdminSubscriptions'
import SubscriptionForm from './pages/SubscriptionForm'
import AdminReviews from './pages/AdminReviews'
import ReviewForm from './pages/ReviewForm'
import AdminClients from './pages/AdminClients'
import AdminClientForm from './pages/AdminClientForm'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <ProductProvider>
          <SubscriptionProvider>
            <ReviewProvider>
              <ClientProvider>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin" element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/dashboard" element={
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
                    
                    <Route path="/admin/clients" element={
                      <ProtectedRoute>
                        <AdminClients />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/clients/add" element={
                      <ProtectedRoute>
                        <AdminClientForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/clients/edit/:id" element={
                      <ProtectedRoute>
                        <AdminClientForm />
                      </ProtectedRoute>
                    } />
                    
                    {/* Add these new routes to fix 404 errors */}
                    <Route path="/admin/products/new" element={
                      <ProtectedRoute>
                        <ProductForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/subscriptions/new" element={
                      <ProtectedRoute>
                        <SubscriptionForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/reviews/new" element={
                      <ProtectedRoute>
                        <ReviewForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="/admin/clients/new" element={
                      <ProtectedRoute>
                        <AdminClientForm />
                      </ProtectedRoute>
                    } />
                    
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </ClientProvider>
            </ReviewProvider>
          </SubscriptionProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
