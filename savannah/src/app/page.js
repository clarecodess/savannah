import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import APIIntro from "@/components/APIIntro";
import HowToUse from "@/components/HowToUse";
import Footer from "@/components/Footer";

const Home = () => {
    return (
      <div>
        <Head>
          <title>API Documentation</title>
        </Head>
        <Header />
        <Hero />
        <APIIntro title="Unsplash API" description="Learn how to use the Unsplash API for accessing beautiful photos." />
        <APIIntro title="Rick & Morty API" description="Discover the world of Rick & Morty through their API." />
        <HowToUse
          title="How to Use the APIs"
          steps={[
            'Step 1: Get your API key from Unsplash or Rick & Morty.',
            'Step 2: Read the documentation to understand the endpoints.',
            'Step 3: Start integrating the APIs into your application.'
          ]}
        />
        <Footer />
      </div>
    );
  };
  
  export default Home;