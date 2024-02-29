import React from 'react'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto '>
       <h1 className='text-3xl 
       font-bold mb-4 text-slate-700'>Welcome to our MERN Full-Stack Authentication Platform</h1>
        <h3 className='text-3xl font-semibold text-slate-500 mb-2'>Introduction</h3>
          <p className='text-xl text-slate-800 '> Briefly explain the purpose of my website.
              Highlight the key features and benefits of using my application.
          </p>
          <h3 className='text-3xl font-semibold text-slate-500 mb-2'>How It Works:</h3>
          <p className='text-xl text-slate-800 '>
          Provide a step-by-step guide on how users can sign up, log in, and access protected routes.
          Explain the authentication flow and the use of Redux Toolkit in managing state.The back-end
          is built with Node.js and Express and uses MongoDB as the database.
          Authentication is implemented using JSON Web Tokens (JWT) 
          </p>
        <h1 className='text-3xl font-semibold text-slate-500 mb-2'>Features Spotlight</h1>
        <p className='text-xl text-orange-900'>
            Welcome to our MERN full-stack authentication platform, 
            where seamless user experiences meet robust security. 
            Our website offers a streamlined authentication process, 
            empowering users to sign up, log in, and access protected 
            routes with confidence. Leveraging the power of MongoDB, 
            Express, React, and Node.js, we've implemented a state-of-the-art 
            authentication system using Redux Toolkit. The intuitive user 
            interface guides users through the authentication flow, ensuring 
            a smooth and secure experience. <span className='text-yellow-800'>Check out our GitHub repository 
            for a deep dive into the codebase, contribute to the project, 
            or explore the latest updates. Whether you're a developer or an 
            end-user, our platform combines functionality with simplicity, 
            creating a space where authenticated users can enjoy exclusive 
            access to protected routes. Join us on this journey towards a 
            secure and user-centric online environment.</span>
        </p>

    </div>
  )
}
