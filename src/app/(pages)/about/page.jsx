"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) {
      router.push('/')
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1300)

    // Clear the interval when countdown reaches 0
    return () => clearInterval(timer)
  }, [countdown, router])

  return (
    <> 
      <div className="container h-screen flex justify-center items-center">
        <div className="text-center p-12 bg-gray-100 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl text-orange-500">
            🚧 Oops! Page Not Found! 🚧
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            It seems like this page doesn't exist or is still in development 🛠️💻
          </p>
          <div className="text-2xl text-orange-500 mt-6">
            ✨ You will be redirected in {countdown} second{countdown > 1 ? 's' : ''} ✨
          </div>
        </div>
      </div>
    </>
  )
}

export default About
