import React, { createContext, useState, useEffect, useContext } from 'react'

export const ReviewContext = createContext()

const initialReviews = [
  {
    id: '1',
    title: 'Why This Email Marketing Tool Changed My Business',
    productName: 'Premium Email Marketing Software',
    rating: 4.8,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `
      <p>After trying numerous email marketing platforms over the years, I've finally found one that truly delivers on its promises. This tool has completely transformed how I approach email campaigns.</p>
      
      <h3>Automation That Actually Works</h3>
      <p>The automation features are intuitive yet powerful. I was able to set up complex drip campaigns in minutes rather than hours. The visual workflow builder is a game-changer - you can literally see your customer journey mapped out in front of you.</p>
      
      <h3>Deliverability That Impresses</h3>
      <p>What good is an email platform if your messages don't reach the inbox? With deliverability rates consistently above 98%, this tool ensures your carefully crafted emails actually get seen.</p>
      
      <h3>Analytics Worth Looking At</h3>
      <p>The reporting dashboard provides actionable insights rather than just numbers. I can quickly identify which campaigns are performing well and why, allowing me to continuously improve my strategy.</p>
      
      <h3>Final Verdict</h3>
      <p>If you're serious about email marketing, this platform is worth every penny. The ROI I've seen since switching has been remarkable - open rates up 23% and conversions increased by 17%.</p>
    `,
    author: 'Robert Frantz',
    date: '2023-06-15',
    category: 'Marketing',
    tags: ['email marketing', 'automation', 'ROI'],
    featured: true
  },
  {
    id: '2',
    title: 'This AI Content Creator Saves Me 10+ Hours Every Week',
    productName: 'AI-Powered Content Creator',
    rating: 4.5,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `
      <p>Content creation has always been a time-consuming process for my business. Between blog posts, social media updates, and email newsletters, I was spending 15+ hours weekly just writing. This AI tool has given me back that time while maintaining quality.</p>
      
      <h3>Surprisingly Human Output</h3>
      <p>Unlike other AI writers I've tried, this one produces content that actually sounds like it was written by a person. The tone is consistent, and it rarely generates the awkward phrasing that plagues other AI tools.</p>
      
      <h3>Versatility Across Formats</h3>
      <p>Whether I need a long-form blog post, snappy social media captions, or compelling email subject lines, this tool handles it all with impressive results. The specialized templates for different content types are particularly helpful.</p>
      
      <h3>Learning Your Brand Voice</h3>
      <p>The more you use it, the better it gets at mimicking your specific style and tone. After a few weeks, I could barely distinguish between content I wrote myself and what the AI produced.</p>
      
      <h3>Room for Improvement</h3>
      <p>It's not perfect - technical content still requires significant editing, and it occasionally gets industry-specific terminology wrong. But for 80% of my content needs, it's a massive time-saver.</p>
      
      <h3>Final Verdict</h3>
      <p>For entrepreneurs and marketers struggling to keep up with content demands, this tool is invaluable. The time saved alone justifies the subscription cost many times over.</p>
    `,
    author: 'Robert Frantz',
    date: '2023-07-22',
    category: 'Content',
    tags: ['AI', 'content creation', 'productivity'],
    featured: true
  },
  {
    id: '3',
    title: 'Honest Review: All-in-One SEO Toolkit After 6 Months',
    productName: 'All-in-One SEO Toolkit',
    rating: 4.2,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `
      <p>I've been using this SEO toolkit for the past 6 months, and it's time to share my honest assessment. Is it worth the investment? Here's my experience.</p>
      
      <h3>Keyword Research Revolution</h3>
      <p>The keyword research functionality is outstanding. I've discovered numerous low-competition, high-value keywords that I would have missed otherwise. The difficulty scoring has proven remarkably accurate.</p>
      
      <h3>Competitor Analysis</h3>
      <p>Being able to reverse-engineer competitors' SEO strategies has been invaluable. I can see exactly what's working in my niche and adapt those insights to my own content strategy.</p>
      
      <h3>Backlink Monitoring</h3>
      <p>The backlink analysis tools are comprehensive, though sometimes slower to update than I'd like. Still, the toxic link identification feature has helped me maintain a clean backlink profile.</p>
      
      <h3>Technical SEO Audits</h3>
      <p>The site audit functionality is thorough and provides actionable recommendations. I've fixed numerous technical issues I wasn't even aware of, resulting in improved crawlability and indexing.</p>
      
      <h3>Final Verdict</h3>
      <p>While the monthly subscription isn't cheap, the ROI has been clear. My organic traffic has increased by 43% since implementing the insights from this tool, making it a worthwhile investment for serious website owners.</p>
    `,
    author: 'Robert Frantz',
    date: '2023-08-10',
    category: 'SEO',
    tags: ['SEO', 'keyword research', 'backlinks'],
    featured: false
  }
]

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews')
    return savedReviews ? JSON.parse(savedReviews) : initialReviews
  })

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }, [reviews])

  const addReview = (review) => {
    const newReview = {
      ...review,
      id: Date.now().toString(),
      author: 'Robert Frantz',
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([...reviews, newReview])
  }

  const updateReview = (id, updatedReview) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, ...updatedReview } : review
    ))
  }

  const deleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id))
  }

  const getReview = (id) => {
    return reviews.find(review => review.id === id)
  }

  return (
    <ReviewContext.Provider value={{ 
      reviews, 
      addReview, 
      updateReview, 
      deleteReview,
      getReview
    }}>
      {children}
    </ReviewContext.Provider>
  )
}

export const useReview = () => {
  const context = useContext(ReviewContext)
  if (context === undefined) {
    throw new Error('useReview must be used within a ReviewProvider')
  }
  return context
}
