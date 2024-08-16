import Navbar from '@/components/Navbar';
import HeaderHome from '@/components/HeaderHome';
import ReviewForm from '@/components/ReviewForm';
import WebsiteServices from '@/components/WebsiteServices';
import CustomizedSoln from '@/components/CustomizedSoln';
import ClientTestimonials from '@/components/ClientTestimonials';
import { FaqSection } from '@/components/FaqSection';
import Footer from '@/components/Footer';
import CardsSection from '@/components/CardsSection';
import StickyButton from '@/components/StickyButton';

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeaderHome/>
    <ReviewForm/>
    <WebsiteServices/>
    <StickyButton />
    <CardsSection/>
    <CustomizedSoln/>
    <ClientTestimonials/>
    <FaqSection/>
    <Footer/>
    </>
  );
}
