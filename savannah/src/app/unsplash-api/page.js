import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UnsplashAPI = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className='flex-grow p-10 container mx-auto'>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Search for Photos by Keyword using the Unsplash API</h1>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 1: Sign Up for an Unsplash Developer Account</h2>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Visit the Unsplash website and sign up for a developer account at <a href='https://unsplash.com/join' className="text-blue-500 hover:underline">Unsplash Developers</a>.</li>
            <li>Log in to your Unsplash developer account and navigate to the <a href='https://unsplash.com/developers' className="text-blue-500 hover:underline">API Page</a>.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 2: Register Your Application</h2>
          <ol className='list-decimal list-inside text-gray-600'>
            <li>Once logged in, click on the “Your Applications” tab.</li>
            <li>Click on “New Application” to create a new app.</li>
            <li>Fill in the required details about your application and submit.</li>
            <li>After creating the app, you will receive an Access Key and a Secret Key. They are necessary to authenticate your API requests.</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 3: Understand the Endpoint</h2>
          <p className="text-gray-600">To search for a photo by keyword, you will use the <code className="bg-gray-200 rounded p-1 text-sm">/search/photos</code> endpoint of the Unsplash API. The documentation for this endpoint can be found <a href='https://unsplash.com/documentation#search-photos' className="text-blue-500 hover:underline">here</a>.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 4: Make the API Request</h2>
          <p className="text-gray-600 mb-4">To make an API request to search for photos by keyword, you will need to use an endpoint structure like the following example:</p>
          <Image src='/unsplash4.png' alt='API request example' className='rounded' width={384} height={256} />
          <p className="text-gray-600 mt-4"><strong>Required Query Parameters:</strong></p>
          <ul className='list-disc list-inside text-gray-600'>
            <li><code className="bg-gray-200 rounded p-1 text-sm">query</code>: The search term (keyword) you want to use to find photos.</li>
            <li><code className="bg-gray-200 rounded p-1 text-sm">client_id</code>: Your Access Key obtained from Unsplash.</li>
          </ul>
          <p className="text-gray-600 mt-4"><strong>Optional Query Parameters:</strong></p>
          <ul className='list-disc list-inside text-gray-600'>
            <li><code className="bg-gray-200 rounded p-1 text-sm">page</code>: The page number to retrieve (default is 1).</li>
            <li><code className="bg-gray-200 rounded p-1 text-sm">per_page</code>: The number of items per page (default is 10).</li>
            <li><code className="bg-gray-200 rounded p-1 text-sm">orientation</code>: Filter by photo orientation. Valid values are &apos;landscape&apos;, &apos;portrait&apos;, or &apos;squarish&apos;.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 5: Example Requests</h2>
          <p className="text-gray-600 mb-4">Here is an example of how to make a request to search for photos with the keyword “nature” using <code className="bg-gray-200 rounded p-1 text-sm">curl</code>:</p>
          <Image src='/unsplash5.png' alt='Curl request example' className='rounded' width={448} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 6: Parse the Response</h2>
          <p className="text-gray-600 mb-4">The API response will be in JSON format and will contain information about the photos that match the search keyword. For example:</p>
          <Image src='/unsplash6.png' alt='JSON response example' className='rounded' width={448} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 7: Using the Data</h2>
          <p className="text-gray-600">Extract the relevant information from the JSON response. For example, you can use the <code className="bg-gray-200 rounded p-1 text-sm">urls</code> field to get different sizes of the photo.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 8: Handle Errors</h2>
          <p className="text-gray-600">Ensure to handle any errors that might occur, such as invalid access keys or no results found. The API will return appropriate HTTP status codes and error messages.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Additional Resources</h1>
          <ul className='list-disc list-inside text-gray-600'>
            <li><a href='https://unsplash.com/documentation' className="text-blue-500 hover:underline">Unsplash API Documentation</a></li>
            <li><a href='https://unsplash.com/api-terms' className="text-blue-500 hover:underline">Unsplash API Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UnsplashAPI;
