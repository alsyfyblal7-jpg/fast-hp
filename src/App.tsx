import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyMetrics } from './components/KeyMetrics';
import { Services } from './components/Services';
import { PalettePreview } from './components/PalettePreview';
import { InteractivePaintStudio } from './components/InteractivePaintStudio';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Portfolio } from './components/Portfolio';
import { ColorMoodQuiz } from './components/ColorMoodQuiz';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSteps } from './components/ProcessSteps';
import { Reviews } from './components/Reviews';
import { FAQSection } from './components/FAQSection';
import { ConsultationForm } from './components/ConsultationForm';
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
    <div className="min-h-screen bg-[#F8FAFD] text-slate-800 antialiased flex flex-col w-full selection:bg-[#FF8A00] selection:text-white relative">
      {/* Global Click & Scroll Interactive Effects (Ripples, Custom Cursor, Scroll Progress) */}
      <InteractiveEffects />

      {/* Top Header with Desktop Navigation & Quick Actions */}
      <Header 
        onOpenConsultation={() => scrollToConsultation()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Full-Width Content Container */}
      <main className="flex-1 w-full">
        {/* Hero Section with 2-Column Desktop Grid */}
        <Hero 
          onOpenConsultation={() => scrollToConsultation()}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 4 Key Metrics Cards Grid with motion reveals */}
        <KeyMetrics />

        {/* Services Showcase (4 Columns on Desktop with motion) */}
        <Services 
          onSelectService={(serviceId) => scrollToConsultation(serviceId)}
        />

        {/* Modern 2025 Palette & Interactive Room Roller Simulator */}
        <PalettePreview />

        {/* Playful Interactive Wall Painting Studio (Canvas Roller Tool) */}
        <InteractivePaintStudio 
          onSelectColorForBooking={(colorName) => {
            scrollToConsultation('interior-paints', `طلب دهان اللون المختار من الاستوديو: ${colorName}`);
          }}
        />

        {/* Interactive Before & After Renovation Slider */}
        <BeforeAfterSlider />

        {/* Portfolio Showcase Grid (3 Columns on Desktop) */}
        <Portfolio 
          onBookProjectLikeThis={(title) => scrollToConsultation('interior-paints', `طلب تنفيذ تصميم مماثل لـ: ${title}`)}
        />

        {/* Interactive Color Mood Quiz (Find your ideal color scheme in 3 steps) */}
        <ColorMoodQuiz 
          onApplyRecommendation={(summary) => {
            scrollToConsultation('interior-paints', summary);
          }}
        />

        {/* Why Choose Us (4 Columns on Desktop) */}
        <WhyChooseUs />

        {/* 4 Pipeline Process Steps */}
        <ProcessSteps />

        {/* Consultation & Free 3D Design Lead Capture (2 Columns on Desktop) */}
        <ConsultationForm 
          initialService={selectedService}
          initialNote={projectNote}
        />

        {/* Verified Homeowner Reviews */}
        <Reviews />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Full-Scale 4-Column Desktop Footer */}
      <Footer onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Mobile-Only Sticky Bottom Bar (hidden on desktop) */}
      <StickyBottomBar onOpenConsultation={() => scrollToConsultation()} />

      {/* Floating Animated WhatsApp & Hotline Widget */}
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
