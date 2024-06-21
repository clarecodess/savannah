import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import APIIntro from "@/components/APIIntro";
import Footer from "@/components/Footer";
import Rick from "@/components/Rick";
import Unsplash from "@/components/Unsplash";

const Home = () => {
  return (
    <div>
      <Head>
        <title>API Documentation</title>
      </Head>
      
      <Header />
      <Hero />
      <APIIntro 
        id="unsplash"
        title=" Discover how to search for photos with Unsplash API" 
      />
      <Unsplash />
      <APIIntro 
        id="rickandmorty"
        title="Discover the world of Rick & Morty through their API" 
      />
      <Rick />
      <Footer />
    </div>
  );
};

export default Home;
