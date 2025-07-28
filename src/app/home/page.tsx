import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    

    <div className='flex flex-col items-center justify-center min-h-screen bg-black-100'>
      <h1>Welcome to My App</h1>
      <p>This is the home page of our application.</p>  
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page   
        </Link>
    </div>
  )
}

export default Home
