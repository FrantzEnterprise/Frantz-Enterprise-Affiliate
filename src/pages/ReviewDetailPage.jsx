import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaArrowLeft, FaStar, FaCalendarAlt, FaTags, FaEdit, FaTrash } from 'react-icons/fa'
import { useReview } from '../context/ReviewContext'
import { useAuth } from '../context/AuthContext'

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

const ReviewContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
`

const ReviewHeader = styled.div`
  margin-bottom: 2rem;
`

const ReviewTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ProductName = styled.div`
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`

const ReviewMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #F59E0B;
`

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const ReviewContent = styled.div`
  color: var(--text);
  line-height: 1.8;
  font-size: 1.125rem;
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: var(--text);
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    color: var(--text-secondary);
  }
`

const AdminActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
`

const EditButton = styled(Link)`
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
`

const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: rgba(239, 68, 68, 0.1);
  border: none;
  border-radius: 0.375rem;
  color: var(--error);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 5rem 0;
`

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const NotFoundText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`

const BackToReviewsButton = styled(Link)`
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
`

const DialogOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 40;
`

const ConfirmDialog = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 50;
`

const DialogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`

const DialogText = styled.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
`

const DialogButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const CancelButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-lighter);
  }
`

const ConfirmButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--error);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error-dark);
  }
`

const ReviewDetailPage = () => {
  const { id } = useParams()
  const { reviews, getReview, deleteReview } = useReview()
  const { isAuthenticated } = useAuth()
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    const foundReview = getReview(id)
    setReview(foundReview)
    setLoading(false)
  }, [id, reviews, getReview])
  
  const handleDelete = () => {
    setShowDeleteDialog(true)
  }
  
  const confirmDelete = () => {
    deleteReview(id)
    setShowDeleteDialog(false)
    navigate('/reviews')
  }
  
  const cancelDelete = () => {
    setShowDeleteDialog(false)
  }
  
  if (loading) {
    return <div className="container">Loading...</div>
  }
  
  if (!review) {
    return (
      <div className="container">
        <NotFoundMessage>
          <NotFoundTitle>Review Not Found</NotFoundTitle>
          <NotFoundText>The review you're looking for doesn't exist or has been removed.</NotFoundText>
          <BackToReviewsButton to="/reviews">
            <FaArrowLeft /> Back to Reviews
          </BackToReviewsButton>
        </NotFoundMessage>
      </div>
    )
  }
  
  return (
    <div className="container">
      <ReviewContainer>
        <BackLink to="/reviews">
          <FaArrowLeft /> Back to Reviews
        </BackLink>
        
        <ReviewHeader>
          <ReviewTitle>{review.title}</ReviewTitle>
          <ProductName>Review of: {review.productName}</ProductName>
          
          <ReviewMeta>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < Math.floor(review.rating) ? '#F59E0B' : '#334155'} />
              ))}
              <span style={{ marginLeft: '0.5rem', color: 'var(--text)' }}>{review.rating.toFixed(1)}</span>
            </Rating>
            
            <MetaItem>
              <FaCalendarAlt /> {review.date}
            </MetaItem>
            
            <MetaItem>
              <FaTags /> {review.category}
            </MetaItem>
          </ReviewMeta>
        </ReviewHeader>
        
        <VideoContainer>
          <VideoIframe 
            src={review.videoUrl}
            title={review.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
        
        <ReviewContent dangerouslySetInnerHTML={{ __html: review.content }} />
        
        {isAuthenticated && (
          <AdminActions>
            <EditButton to={`/admin/reviews/edit/${review.id}`}>
              <FaEdit /> Edit Review
            </EditButton>
            <DeleteButton onClick={handleDelete}>
              <FaTrash /> Delete Review
            </DeleteButton>
          </AdminActions>
        )}
      </ReviewContainer>
      
      {showDeleteDialog && (
        <>
          <DialogOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <ConfirmDialog
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <DialogTitle>Delete Review</DialogTitle>
            <DialogText>
              Are you sure you want to delete this review? This action cannot be undone.
            </DialogText>
            <DialogButtons>
              <CancelButton onClick={cancelDelete}>Cancel</CancelButton>
              <ConfirmButton onClick={confirmDelete}>Delete</ConfirmButton>
            </DialogButtons>
          </ConfirmDialog>
        </>
      )}
    </div>
  )
}

export default ReviewDetailPage
