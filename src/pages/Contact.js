import React from 'react'
import { Link } from 'react-router-dom'



function contact() {
  return (
    <div>
      <p>This is the Contact Page<Link to="/" state={"From Contact Page"}>Back to Home Page</Link></p>
      
      
    </div>
  )
}

export default contact