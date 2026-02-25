import AboutHero from '@/components/about/about-hero';
import Mission from '@/components/about/mission';
import Footer from '@/components/home/footer';
import Header from '@/components/home/header';

export default function AboutPage() {
  return (
    <div className="bg-[#121212] text-gray-100 font-sans">
      <Header/>     

      <main>
        <AboutHero />
        <Mission />
      </main>

     <Footer/>
    </div>
  );
}