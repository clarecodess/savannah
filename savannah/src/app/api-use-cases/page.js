import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const APIUseCases = () => {
  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="py-12 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">API Use Cases</h1>
            <p className="text-center text-lg text-gray-700 mb-8">Examples of how you can use the Unsplash API and Rick and Morty API for projects.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Unsplash API</h2>
                <p className="text-gray-700 mb-4">The Unsplash API provides access to a collection of high-quality photos. Here are some use cases:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Integrate images into your web or mobile application.</li>
                  <li>Use images for blog posts, articles, and marketing materials.</li>
                  <li>Create visually appealing backgrounds and galleries.</li>
                </ul>
                <div className="flex justify-center mt-4">
                  <Image 
                    src="https://source.unsplash.com/random/400x300" 
                    alt="Unsplash Example" 
                    width={400} 
                    height={300} 
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Rick and Morty API</h2>
                <p className="text-gray-700 mb-4">The Rick and Morty API provides information about characters, episodes, and locations. Here are some use cases:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Build a character database for fans of the show.</li>
                  <li>Create a trivia or quiz app using show data.</li>
                  <li>Display detailed information about episodes and characters in your app.</li>
                </ul>
                <div className="flex justify-center mt-4">
                  <Image 
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
                    alt="Rick Sanchez" 
                    width={400} 
                    height={300} 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APIUseCases;
