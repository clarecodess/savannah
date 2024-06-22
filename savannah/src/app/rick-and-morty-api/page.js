import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RickAndMortyAPI = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-10 container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Get All Episodes of the Show with the Rick and Morty API</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 1: Understand the Endpoint</h2>
          <p className="text-gray-600">
            To get all episodes, you will use the <code className="bg-gray-200 rounded p-1 text-sm">/episode</code> endpoint of the Rick and Morty API. The documentation is <a href='https://rickandmortyapi.com/documentation/#episode' className="text-blue-500 hover:underline">here</a>.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 2: Make the API Request</h2>
          <p className="text-gray-600 mb-4">To retrieve all episodes, you need to make a request to the following URL:</p>
          <Image src="/rick1.png" alt="API request example" className="rounded" width={320} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 3: Handling Pagination</h2>
          <p className="text-gray-600">
            The <code className="bg-gray-200 rounded p-1 text-sm">/episode</code> endpoint supports pagination. The response will include <code className="bg-gray-200 rounded p-1 text-sm">info</code> and <code className="bg-gray-200 rounded p-1 text-sm">results</code> fields. The <code className="bg-gray-200 rounded p-1 text-sm">info</code> field contains pagination information, including the <code className="bg-gray-200 rounded p-1 text-sm">next</code> URL to retrieve the next page of results.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 4: Example Request</h2>
          <p className="text-gray-600 mb-4">Here's how to make a request to get all episodes using <code className="bg-gray-200 rounded p-1 text-sm">curl</code>:</p>
          <Image src="/rick4.png" alt="Curl request example" className="rounded" width={320} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 5: Parse the Response</h2>
          <p className="text-gray-600 mb-4">The API response will be in JSON format and will contain information about the episodes. For example:</p>
          <Image src="/rick5.png" alt="JSON response example" className="rounded" width={384} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 6: Get All Pages</h2>
          <p className="text-gray-600 mb-4">
            To get all episodes, you will need to follow the <code className="bg-gray-200 rounded p-1 text-sm">next</code> URL in the <code className="bg-gray-200 rounded p-1 text-sm">info</code> field until it is <code className="bg-gray-200 rounded p-1 text-sm">null</code>. Here is a Python example to get all episodes:
          </p>
          <Image src="/rick6.png" alt="Python code example" className="rounded" width={384} height={256} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 7: Using the Data</h2>
          <p className="text-gray-600">
            You can now use the data from <code className="bg-gray-200 rounded p-1 text-sm">all_episodes</code> as needed. Each episode object in the list has details like <code className="bg-gray-200 rounded p-1 text-sm">id</code>, <code className="bg-gray-200 rounded p-1 text-sm">name</code>, <code className="bg-gray-200 rounded p-1 text-sm">air_date</code>, <code className="bg-gray-200 rounded p-1 text-sm">episode</code>, <code className="bg-gray-200 rounded p-1 text-sm">characters</code>, <code className="bg-gray-200 rounded p-1 text-sm">url</code>, and <code className="bg-gray-200 rounded p-1 text-sm">created</code>.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Additional Resources</h1> 
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <a href='https://rickandmortyapi.com/documentation' className="text-blue-500 hover:underline">Rick and Morty API Documentation</a>
            </li>
            <li>
              <a href='https://rickandmortyapi.com/about' className="text-blue-500 hover:underline">About the Rick and Morty API</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RickAndMortyAPI;
