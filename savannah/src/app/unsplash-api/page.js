// app/unsplash-api/page.js
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UnsplashAPI = () => {
  return (
    <div>
      <Header />
      <div className='p-10'>
        <h1 className="text-4xl mb-4">How to Search for Photo by Keyword using the Unsplash API</h1>
      
        <h2 className="text-2xl mb-1">Step 1: Sign Up for an Unsplash Developer Account</h2><br />
        <ul className='list-disc'>
            <li>Visit the Unsplash website and sign up for a developer account at <a href='https://unsplash.com/join'>Unsplash Developers</a>.</li> <br />
            <li>Log in to your Unsplash developer account and navigate to the <a href='https://unsplash.com/developers'>API Page.</a></li><br />
        </ul>
       
        <h2 className="text-2xl mb-1">Step 2: Register Your Application</h2><br />
        <ol className='list-decimal'>
            <li>Once logged in, click on the “Your Applications” tab.</li><br />
            <li>Click on “New Application” to create a new app.</li><br />
            <li>Fill in the required details about your application and submit.</li><br />
            <li>After creating the app, you will receive an Access Key and a Secret Key. They are necessary to authenticate your API requests.</li><br />
        </ol><br />

        <h2 className="text-2xl mb-1">Step 3: Understand the Endpoint</h2><br />
        <p>To search for a photo by keyword, you will use the ' /search/photos ' endpoint of the Unsplash API. The documentation for this endpoint can be found <a href='https://unsplash.com/documentation#search-photos'>here.</a></p><br />
        
        <h2 className="text-2xl mb-1">Step 4: Make the API Request</h2><br />
        <p>To make an API request to search for photos by keyword, you will need to use an endpoint structure like the following example in SQL:</p><br />
        <Image src='/unsplash4.png' alt='API request example' className='w-96 h-auto' width={384} height={256} /><br />
        <p><strong>Required Query Parameters:</strong></p>
        <ul className='list-disc'>
            <li>'query' : The search term (keyword) you want to use to find photos.</li><br />
            <li>'client_id' : Your Access Key obtained from Unsplash.</li><br />
        </ul><br />
        <p><strong>Optional Query Parameters:</strong></p>
        <ul className='list-disc'>
            <li>'page' : The page number to retrieve (default is 1).</li><br />
            <li>'per_page' : The number of items per page (default is 10).</li><br />
            <li>'orientation' : Filter by photo orientation. Valid values are 'landscape', 'portrait', or 'squarish'.</li><br />
        </ul>

        <h2 className="text-2xl mb-1">Step 5: Example Requests</h2><br />
        <p>Here is an example of how to make a request to search for photos with the keyword “nature” using 'curl':</p><br />
        <Image src='/unsplash5.png' alt='Curl request example' className='w-112 h-auto' width={448} height={256} /><br />

        <h2 className="text-2xl mb-1">Step 6: Parse the Response</h2>
        <p>The API response will be in JSON format and will contain information about the photos that match the search keyword. For example:</p><br />
        <Image src='/unsplash6.png' alt='JSON response example' className='w-112 h-auto' width={448} height={256} /><br />

        <h2 className="text-2xl mb-1">Step 7: Using the Data</h2>
        <p>Extract the relevant information from the JSON response. For example, you can use the 'urls' field to get different sizes of the photo.</p><br />

        <h2 className="text-2xl mb-1">Step 8: Handle Errors</h2>
        <p>Ensure to handle any errors that might occur, such as invalid access keys or no results found. The API will return appropriate HTTP status codes and error messages.</p><br />
        
        <h1 className="text-4xl mb-4">Additional Resources</h1>
        <ul className='list-disc'>
            <li><a href='https://unsplash.com/documentation'>Unsplash API Documentation</a></li>
            <li><a href='https://unsplash.com/api-terms'>Unsplash API Terms of Use</a></li><br />
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default UnsplashAPI;
