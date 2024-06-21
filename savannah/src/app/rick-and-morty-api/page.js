// app/rick-and-morty-api/page.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RickAndMortyAPI = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-4xl mb-4">How to Get All Episodes of the Show with the Rick and Morty API</h1>
        <h2 className='text-2xl mb-1'>Step 1: Understand the Endpoint</h2><br></br>
        <p>To get all episodes, you will use the `/episode` endpoint of the Rick and Morty API. The documentation is <a href='https://rickandmortyapi.com/documentation/#episode'>here.</a></p><br></br>
        

        <h2 className='text-2xl mb-1'>Step 2: Make the API Request</h2><br></br>
        <p>To retrieve all episodes, you need to make a request to the following URL:</p><br></br>
        <img src='./rick1.png'class="w-80 h-auto"/><br></br>

        <h2 className='text-2xl mb-1'>Step 3: Handling Pagination</h2><br></br>
        <p>The `/episode` endpoint supports pagination. The response will include `info` and `results` fields. The `info` field contains pagination information, including the `next` URL to retrieve the next page of results.</p><br></br>

        <h2 className='text-2xl mb-1'>Step 4: Example Request</h2><br></br>
        <p>Here's how to make a request to get all episodes using `curl`:</p><br></br>
        <img src='./rick4.png'class="w-80 h-auto"/><br></br>

        <h2 className='text-2xl mb-1'>Step 5: Parse the Response</h2><br></br>
        <p>The API response will be in JSON format and will contain information about the episodes. For example:</p><br></br>
        <img src='./rick5.png'class="w-96 h-auto"/><br></br>

        <h2 className='text-2xl mb-1'>Step 6: Get All Pages</h2><br></br>
        <p>To get all episodes, you will need to follow the `next` URL in the `info` field until it is `null`. Here is a Python example to get all episodes:</p><br></br>
        <img src='./rick6.png'class="w-96 h-auto"/><br></br>

        <h2 className='text-2xl mb-1'>Step 7: Using the Data</h2><br></br>
        <p>You can now use the data from `all_episodes` as needed. Each episode object in the list has details like `id`, `name`, `air_date`, `episode`, `characters`, `url`, and `created`.</p><br></br>

        <h1 className="text-4xl mb-4">Additional Resources</h1>
        <ul className='list-disc'>
            <li><a href='https://rickandmortyapi.com/documentation'>Rick and Morty API Documentation</a></li>
            <li><a href='https://rickandmortyapi.com/about'>About the Ricky and Morty API</a></li><br></br>

        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default RickAndMortyAPI;
