import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroText } from './components/IntroText';
import { AboutPreview } from './components/AboutPreview';
import { Services } from './components/Services';
import { InteractivePaintStudio } from './components/InteractivePaintStudio';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Portfolio } from './components/Portfolio';
import { ColorMoodQuiz } from './components/ColorMoodQuiz';
import { ProcessSteps } from './components/ProcessSteps';
import { ArticlesSection } from './components/ArticlesSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Reviews } from './components/Reviews';
import { FAQSection } from './components/FAQSection';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { FloatingActionWidget } from './components/FloatingActionWidget';
import { LiveActivityToasts } from './components/LiveActivityToasts';
import { InteractiveEffects } from './components/InteractiveEffects';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('interior-paints');
  const [projectNote, setProjectNote] = useState('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const scrollToConsultation = (serviceId?: string, note?: string) => {
    if (serviceId) setSelectedService(serviceId);
    if (note) setProjectNote(note);
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] antialiased flex flex-col w-full selection:bg-[#C9A227] selection:text-white relative" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Global Click & Scroll Interactive Effects (Gold Ripples, Cursor Follower, Top Scroll Bar) */}
      <InteractiveEffects />

      {/* Top Header matching tarmim-decor.com */}
      <Header 
        onOpenConsultation={() => scrollToConsultation()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Full-Width Content Container */}
      <main className="flex-1 w-full">
        {/* Hero Section matching tarmim-decor.com */}
        <Hero 
          onOpenConsultation={() => scrollToConsultation()}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Intro Text Section (SEO & Riyadh Neighborhoods) */}
        <IntroText />

        {/* About Preview Section ('لماذا عملاء الرياض يختارون ترميم ديكور؟' + 500+ Stats & 4 Pillars) */}
        <AboutPreview />

        {/* 12 Services Grid matching tarmim-decor.com with authentic WebP images & keywords */}
        <Services 
          onSelectService={(serviceId, serviceTitle) => scrollToConsultation(serviceId, `طلب خدمة: ${serviceTitle}`)}
        />

        {/* Interactive Wall Painting Studio (Canvas Roller Tool with Oscar/Jazeera paints) */}
        <InteractivePaintStudio 
          onSelectColorForBooking={(colorName) => {
            scrollToConsultation('interior-paints', `طلب دهان اللون المختار من الاستوديو: ${colorName}`);
          }}
        />

        {/* Interactive Before & After Renovation Slider */}
        <BeforeAfterSlider />

        {/* 4 Major Projects Grid matching tarmim-decor.com */}
        <Portfolio 
          onBookProjectLikeThis={(title) => scrollToConsultation('interior-paints', `طلب تنفيذ تصميم مماثل لـ: ${title}`)}
        />

        {/* Interactive Color Mood Quiz (3 Steps Recommendation) */}
        <ColorMoodQuiz 
          onApplyRecommendation={(summary) => {
            scrollToConsultation('interior-paints', summary);
          }}
        />

        {/* 4 Pipeline Process Steps */}
        <ProcessSteps />

        {/* Consultation & Free Quote Form ('احصل على عرض سعر لدهان منزلك') */}
        <ConsultationForm 
          initialService={selectedService}
          initialNote={projectNote}
        />

        {/* Articles Section ('معلومات تهمك عن الديكور والتشطيب') matching tarmim-decor.com */}
        <ArticlesSection />

        {/* Verified Client Reviews */}
        <Reviews />

        {/* Frequently Asked Questions matching tarmim-decor.com */}
        <FAQSection />
      </main>

      {/* Full-Scale 4-Column Desktop Footer matching tarmim-decor.com with 'تطوير وبرمجة بلال الصيفي' */}
      <Footer onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Mobile-Only Sticky Bottom Bar (hidden on desktop) */}
      <StickyBottomBar onOpenConsultation={() => scrollToConsultation()} />

      {/* Side Floating Action Buttons (WhatsApp, Phone, Back-to-Top) */}
      <FloatingActionWidget />

      {/* Realistic Live Activity Toast Notifications in Riyadh */}
      <LiveActivityToasts />

      {/* Instant Interactive Cost Estimator Modal (Without price box) */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectEstimateForBooking={(summary) => {
          scrollToConsultation(undefined, summary);
        }}
      />
    </div>
  );
}
