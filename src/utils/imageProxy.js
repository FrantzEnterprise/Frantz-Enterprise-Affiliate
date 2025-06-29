// Image proxy utility to handle CORS issues
export const getProxiedImageUrl = (originalUrl) => {
  if (!originalUrl) return null
  
  // If it's already a data URL or relative path, return as-is
  if (originalUrl.startsWith('data:') || originalUrl.startsWith('/') || originalUrl.startsWith('./')) {
    return originalUrl
  }
  
  // For external URLs that might have CORS issues, use a proxy
  if (originalUrl.startsWith('http')) {
    // Using a public CORS proxy service
    return `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`
  }
  
  return originalUrl
}

// Alternative proxy services (in case one fails)
export const getAlternativeProxiedUrl = (originalUrl) => {
  if (!originalUrl || !originalUrl.startsWith('http')) return originalUrl
  
  // Alternative CORS proxy
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(originalUrl)}`
}

// Test if an image URL is accessible
export const testImageUrl = (url) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
    
    // Timeout after 5 seconds
    setTimeout(() => resolve(false), 5000)
  })
}
