import Hero from '../components/Hero';
import FeaturedTracks from '../components/FeaturedTrack';
import ProducerSpotlight from '../components/ProducerSpotlight';
import UploadSection from '../components/UploadSection';
import Footer from '../components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Hero />
      <FeaturedTracks />
      <ProducerSpotlight />
      <UploadSection />
      <Footer />
    </div>
  );
};

export default Index;