import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import APIIntro from "@/components/APIIntro";
import Footer from "@/components/Footer";
import Rick from "@/components/Rick";
import Unsplash from "@/components/Unsplash";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>API Documentation</title>
        <meta name="description" content="Explore and use the Unsplash and Rick & Morty APIs for your projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            
            <Unsplash />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            
            <Rick />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
