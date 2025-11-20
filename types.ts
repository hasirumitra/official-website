import { ReactNode } from 'react';

export interface FeatureModule {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  cta: string;
  icon: ReactNode;
  visualType: 'chart' | 'image' | 'comparison' | 'calendar' | 'chat';
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Metric {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}