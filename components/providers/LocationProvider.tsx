'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Location {
  id: string;
  name: string;
  slug: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: Record<string, { open: string; close: string; closed?: boolean }>;
  capacity: number;
  features: string[];
  images: string[];
  description: string;
}

interface LocationContextType {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location) => void;
  locations: Location[];
}

const defaultLocations: Location[] = [
  {
    id: '1',
    name: 'Downtown',
    slug: 'downtown',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
    },
    phone: '(212) 555-0100',
    email: 'downtown@maisonbistrot.com',
    hours: {
      monday: { open: '11:00', close: '23:00' },
      tuesday: { open: '11:00', close: '23:00' },
      wednesday: { open: '11:00', close: '23:00' },
      thursday: { open: '11:00', close: '23:00' },
      friday: { open: '11:00', close: '24:00' },
      saturday: { open: '10:00', close: '24:00' },
      sunday: { open: '10:00', close: '23:00' },
    },
    capacity: 120,
    features: ['Outdoor Seating', 'Private Dining', 'Full Bar', 'Valet Parking'],
    images: ['/images/locations/downtown-1.jpg', '/images/locations/downtown-2.jpg'],
    description: 'Our flagship location in the heart of the city, featuring an elegant dining room and rooftop terrace.',
  },
  {
    id: '2',
    name: 'Westside',
    slug: 'westside',
    address: {
      street: '456 Oak Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      country: 'USA',
    },
    phone: '(212) 555-0200',
    email: 'westside@maisonbistrot.com',
    hours: {
      monday: { open: '11:00', close: '22:00' },
      tuesday: { open: '11:00', close: '22:00' },
      wednesday: { open: '11:00', close: '22:00' },
      thursday: { open: '11:00', close: '22:00' },
      friday: { open: '11:00', close: '23:00' },
      saturday: { open: '10:00', close: '23:00' },
      sunday: { open: '10:00', close: '22:00' },
    },
    capacity: 80,
    features: ['Garden Patio', 'Wine Cellar', 'Private Events'],
    images: ['/images/locations/westside-1.jpg', '/images/locations/westside-2.jpg'],
    description: 'A cozy neighborhood gem with a charming garden patio and an extensive wine selection.',
  },
  {
    id: '3',
    name: 'Harbor View',
    slug: 'harbor-view',
    address: {
      street: '789 Waterfront Drive',
      city: 'New York',
      state: 'NY',
      zip: '10003',
      country: 'USA',
    },
    phone: '(212) 555-0300',
    email: 'harbor@maisonbistrot.com',
    hours: {
      monday: { open: '10:00', close: '24:00' },
      tuesday: { open: '10:00', close: '24:00' },
      wednesday: { open: '10:00', close: '24:00' },
      thursday: { open: '10:00', close: '24:00' },
      friday: { open: '10:00', close: '02:00' },
      saturday: { open: '09:00', close: '02:00' },
      sunday: { open: '09:00', close: '24:00' },
    },
    capacity: 200,
    features: ['Waterfront Views', 'Live Music', 'Event Space', 'Dock Dining'],
    images: ['/images/locations/harbor-1.jpg', '/images/locations/harbor-2.jpg'],
    description: 'Spectacular waterfront dining with panoramic harbor views and fresh seafood specialties.',
  },
];

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(defaultLocations[0]);

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        locations: defaultLocations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
