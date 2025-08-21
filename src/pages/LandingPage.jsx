import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Shield, Gift, ArrowRight, Play, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import AuthoritySection from '../components/landing/AuthoritySection';
import LearningSection from '../components/landing/LearningSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import OfferSection from '../components/landing/OfferSection';
import GuaranteeSection from '../components/landing/GuaranteeSection';
import FinalCTA from '../components/landing/FinalCTA';
import ExitIntentPopup from '../components/landing/ExitIntentPopup';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProblemSection />
      <AuthoritySection />
      <LearningSection />
      <BenefitsSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTA />
      <ExitIntentPopup />
    </div>
  );
}