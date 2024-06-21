// app/unsplash-api/page.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UnsplashAPI = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-4xl mb-4">Unsplash API</h1>
        <h2 className="text-2xl mb-1">Search photos by keyword, get a random photo or list new photos.</h2>
      </div>
      <div className="p-10">
        <h1 className="text-4xl mb-4">Getting Started</h1>
        <p>This is where you begin. The following steps will help you to get started with your journey towards creating great appps using the API:</p>
        <ol className='list-decimal'>
            <li>Create a developer account.</li>
            <li>Once your account has been registered for the API, go to your apps. Click “New Application”, and fill in the required details.</li>
            <li>Initially, your application will be in demo mode and will be rate-limited to 50 requests per hour. This is perfect for demo apps, trying out the API, and for educational purposes.</li>
            <li>If ready to move to production mode, follow the ‘Apply for Production’ instructions. If approved, your rate limit will be increased to the full amount.</li>
        </ol>
      </div>
      <div className='p-10'>
        <h1 className="text-4xl mb-4">API Reference</h1>
        <p>The Unsplash API provides a wide range of functionality for developers, including:</p>
        <ul className='list-disc'>
            <li>Search a photo by keyword.</li>
            <li>Get a random photo.</li>
            <li>List new photos.</li>
        </ul>
      </div>
      <div className='p-10'>
      <h1 className="text-4xl mb-4">Example</h1>
      <p>This is a step-by-step how-to that will guide you through how to search photos by keyword. </p>
      </div>
      <Footer />
    </div>
  );
};

export default UnsplashAPI;
