import HeroSection from '@/components/HeroSection';
import PromotionalBanner from '@/components/PromotionalBanner';
import React from 'react';
import NewsletterSignup from './../components/NewsletterSignup';
import NewArrivalCard from '@/components/NewArrivalCard';
import SummerDeals from '@/components/SummerDeals';
import { ServiceFeatures } from '@/components/ServiceFeatures';
import MensCollection from '@/components/MensCollection';







export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className='flex flex-col'>
          
          <HeroSection />
          <ServiceFeatures/>
          <NewArrivalCard/>
          <PromotionalBanner />
          <MensCollection />
          <SummerDeals/>
          
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
