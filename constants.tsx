import React from 'react';
import { 
  Microscope, TrendingUp, CloudSun, FileCheck, Calendar, Sprout, 
  ClipboardList, MessageSquare, Users, Activity, ShieldCheck, Leaf
} from 'lucide-react';
import { FeatureModule, PricingTier, Testimonial, Metric } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#impact' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const METRICS: Metric[] = [
  { id: 1, value: "10,000", suffix: "+", label: "Active Farmers" },
  { id: 2, value: "95", suffix: "%", label: "Disease Accuracy" },
  { id: 3, value: "30", suffix: "%", label: "Income Increase" },
  { id: 4, value: "90,000", suffix: "Cr", label: "Loss Prevented (Est)" },
];

export const FEATURES: FeatureModule[] = [
  {
    id: 1,
    title: "AI Crop Doctor",
    subtitle: "95% Accurate Disease Detection",
    description: [
      "Instant identification via photo",
      "50+ diseases & pests covered",
      "Immediate treatment recommendations",
      "Works offline on low-end phones"
    ],
    cta: "Try Disease Detector",
    icon: <Microscope className="w-8 h-8 text-golden" />,
    visualType: 'comparison'
  },
  {
    id: 2,
    title: "Market Intelligence Hub",
    subtitle: "Predict Prices, Maximize Profit",
    description: [
      "Real-time mandi prices (100+ markets)",
      "7-30 day price forecasts",
      "Optimal sell timing alerts",
      "Transport cost calculator"
    ],
    cta: "Check Market Prices",
    icon: <TrendingUp className="w-8 h-8 text-golden" />,
    visualType: 'chart'
  },
  {
    id: 3,
    title: "Smart Weather Advisor",
    subtitle: "Hyperlocal Forecasts",
    description: [
      "<5km accuracy forecasts",
      "Crop-specific irrigation alerts",
      "Spray timing recommendations",
      "Extreme weather warnings"
    ],
    cta: "Get Insights",
    icon: <CloudSun className="w-8 h-8 text-golden" />,
    visualType: 'image'
  },
  {
    id: 4,
    title: "Govt Scheme Navigator",
    subtitle: "Never Miss Benefits",
    description: [
      "Eligibility check for 40+ schemes",
      "Step-by-step application help",
      "PM-KISAN & subsidy tracking",
      "Real-time status updates"
    ],
    cta: "Check Eligibility",
    icon: <FileCheck className="w-8 h-8 text-golden" />,
    visualType: 'image'
  },
  {
    id: 5,
    title: "Personalized Planner",
    subtitle: "AI-Powered ROI Planning",
    description: [
      "Analyzes 50+ agronomic factors",
      "Custom crop calendars",
      "Profit projections",
      "Intercropping suggestions"
    ],
    cta: "Plan Season",
    icon: <Calendar className="w-8 h-8 text-golden" />,
    visualType: 'calendar'
  },
  {
    id: 6,
    title: "Soil Health Doctor",
    subtitle: "Instant Analysis",
    description: [
      "Photo-based deficiency diagnosis",
      "Fertilizer prescriptions",
      "Organic alternative suggestions",
      "Track soil health trends"
    ],
    cta: "Analyze Soil",
    icon: <Sprout className="w-8 h-8 text-golden" />,
    visualType: 'image'
  },
  {
    id: 7,
    title: "Digital Farm Records",
    subtitle: "Track Profitability",
    description: [
      "Voice-entry expense tracking",
      "Auto P&L calculation",
      "Bank-ready PDF reports",
      "Year-over-year analysis"
    ],
    cta: "Track Farm",
    icon: <ClipboardList className="w-8 h-8 text-golden" />,
    visualType: 'chart'
  },
  {
    id: 8,
    title: "24/7 AI Agronomist",
    subtitle: "Expert Advice in Your Language",
    description: [
      "Voice + text support",
      "6 regional languages",
      "<2 sec response time",
      "Context-aware history"
    ],
    cta: "Start Chatting",
    icon: <MessageSquare className="w-8 h-8 text-golden" />,
    visualType: 'chat'
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Free Forever",
    price: "₹0",
    period: "Forever",
    features: [
      "AI Crop Doctor (5 scans/mo)",
      "Basic Weather Alerts",
      "Scheme Navigator",
      "Farm Records (Lite)",
      "Community Support"
    ],
    cta: "Get Started Free",
    isPopular: false
  },
  {
    name: "Premium",
    price: "₹499",
    period: "Year",
    features: [
      "Unlimited Disease Scans",
      "Price Predictions",
      "Personalized Crop Plan",
      "Soil Health Analysis",
      "Priority AI Chatbot",
      "Bank-ready Reports"
    ],
    cta: "Start Premium Trial",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "₹299",
    period: "Farmer / Year",
    features: [
      "Multi-farm Dashboard",
      "FPO Management Tools",
      "API Access",
      "Dedicated Manager",
      "On-ground Training",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    isEnterprise: true
  }
];

// Updated with culturally relevant, high quality images of Indian farmers
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Karnataka",
    quote: "Hasiru Mitra detected pink bollworm 45 days early. Saved my entire cotton crop worth ₹85,000.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" // Indian man portrait
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Andhra Pradesh",
    quote: "Market Intelligence told me to wait 3 days. Price jumped ₹13/kg. Made ₹18,000 extra profit!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop" // Indian woman portrait
  },
  {
    id: 3,
    name: "Suresh Patil",
    location: "Maharashtra",
    quote: "I found 3 schemes worth ₹35,000 I didn't know about. The app helped me apply instantly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1583341612074-cce5ec64f127?q=80&w=150&auto=format&fit=crop" // Older Indian man
  }
];

// High-quality Unsplash images matching "AI + Agriculture" theme
export const FEATURE_IMAGES = {
  disease: "/stock_photos/ai_crop_doctor.png",
  market: "/stock_photos/market_intelligence_hub.png",
  weather: "/stock_photos/smart_weather_advisor.png",
  scheme: "/stock_photos/govt_scheme_navigator.png",
  planner: "/stock_photos/personalized_planner.png",
  soil: "/stock_photos/soil_health_doctor.png",
  records: "/stock_photos/digital_farm_records.png",
  chat: "/stock_photos/24_7_ai_agronomist.png"
};