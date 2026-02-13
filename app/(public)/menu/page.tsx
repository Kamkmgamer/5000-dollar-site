'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@/components/providers/LocationProvider';
import { MapPin, Leaf, Flame, Wheat, Info } from 'lucide-react';

const categories = ['All', 'Starters', 'Salads', 'Pasta & Risotto', 'Mains', 'Seafood', 'Desserts'];

const allergens = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Spicy', 'Dairy-Free', 'Nut-Free'];

const menuItems = [
  // Starters
  {
    id: 1,
    name: 'Foie Gras Torchon',
    description: 'Sauternes gelée, brioche, fig compote',
    price: 28,
    category: 'Starters',
    tags: [],
    allergens: ['Dairy-Free'],
    popular: true,
  },
  {
    id: 2,
    name: 'Burrata Salad',
    description: 'Heirloom tomatoes, basil oil, aged balsamic, toasted pine nuts',
    price: 22,
    category: 'Starters',
    tags: ['Vegetarian'],
    allergens: ['Vegetarian'],
    popular: false,
  },
  {
    id: 3,
    name: 'Escargots de Bourgogne',
    description: 'Garlic herb butter, parsley, baguette',
    price: 19,
    category: 'Starters',
    tags: [],
    allergens: [],
    popular: false,
  },
  // Mains
  {
    id: 4,
    name: 'Wagyu Beef Tenderloin',
    description: 'Truffle mashed potatoes, asparagus, red wine reduction',
    price: 58,
    category: 'Mains',
    tags: [],
    allergens: [],
    popular: true,
  },
  {
    id: 5,
    name: 'Duck Confit',
    description: 'Cherry gastrique, wild rice, baby greens',
    price: 38,
    category: 'Mains',
    tags: ['Dairy-Free'],
    allergens: ['Dairy-Free'],
    popular: false,
  },
  {
    id: 6,
    name: 'Coq au Vin',
    description: 'Braised chicken, pearl onions, mushrooms, bacon lardons',
    price: 34,
    category: 'Mains',
    tags: [],
    allergens: [],
    popular: false,
  },
  // Seafood
  {
    id: 7,
    name: 'Pan-Seared Scallops',
    description: 'Cauliflower purée, crispy pancetta, lemon butter',
    price: 34,
    category: 'Seafood',
    tags: ['Gluten-Free'],
    allergens: ['Gluten-Free'],
    popular: true,
  },
  {
    id: 8,
    name: 'Grilled Branzino',
    description: 'Fennel salad, citrus vinaigrette, olive tapenade',
    price: 36,
    category: 'Seafood',
    tags: ['Gluten-Free', 'Dairy-Free'],
    allergens: ['Gluten-Free', 'Dairy-Free'],
    popular: false,
  },
  {
    id: 9,
    name: 'Lobster Risotto',
    description: 'Arborio rice, saffron, parmesan crisp',
    price: 42,
    category: 'Pasta & Risotto',
    tags: [],
    allergens: [],
    popular: false,
  },
  // Pasta
  {
    id: 10,
    name: 'Truffle Pappardelle',
    description: 'Wild mushrooms, parmesan cream, black truffle',
    price: 32,
    category: 'Pasta & Risotto',
    tags: ['Vegetarian'],
    allergens: ['Vegetarian'],
    popular: true,
  },
  {
    id: 11,
    name: 'Seafood Linguine',
    description: 'Shrimp, mussels, clams, calamari, white wine, garlic',
    price: 36,
    category: 'Pasta & Risotto',
    tags: ['Dairy-Free'],
    allergens: ['Dairy-Free'],
    popular: false,
  },
  // Salads
  {
    id: 12,
    name: 'Niçoise Salad',
    description: 'Seared tuna, green beans, olives, potatoes, egg, champagne vinaigrette',
    price: 26,
    category: 'Salads',
    tags: ['Gluten-Free', 'Dairy-Free'],
    allergens: ['Gluten-Free', 'Dairy-Free'],
    popular: false,
  },
  // Desserts
  {
    id: 13,
    name: 'Crème Brûlée',
    description: 'Madagascar vanilla, caramelized sugar, fresh berries',
    price: 14,
    category: 'Desserts',
    tags: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Vegetarian', 'Gluten-Free'],
    popular: true,
  },
  {
    id: 14,
    name: 'Chocolate Soufflé',
    description: 'Valrhona dark chocolate, crème anglaise',
    price: 16,
    category: 'Desserts',
    tags: ['Vegetarian'],
    allergens: ['Vegetarian'],
    popular: true,
  },
];

export default function MenuPage() {
  const { selectedLocation } = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const filterMatch = activeFilters.length === 0 || 
      activeFilters.some(filter => item.allergens.includes(filter));
    return categoryMatch && filterMatch;
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            {selectedLocation?.name} Menu
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Seasonal Cuisine
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Our menu changes seasonally to showcase the finest ingredients at their peak freshness
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--muted)]/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Allergen Filters */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {allergens.map((allergen) => (
              <button
                key={allergen}
                onClick={() => toggleFilter(allergen)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  activeFilters.includes(allergen)
                    ? 'bg-[var(--accent-500)]/20 text-[var(--accent-800)]'
                    : 'border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)]/30'
                }`}
              >
                {allergen === 'Vegetarian' && <Leaf className="h-3 w-3" />}
                {allergen === 'Spicy' && <Flame className="h-3 w-3" />}
                {allergen === 'Gluten-Free' && <Wheat className="h-3 w-3" />}
                {allergen}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeFilters.join(',')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {categories
                .filter((cat) => cat !== 'All' && (activeCategory === 'All' || activeCategory === cat))
                .map((category) => {
                  const items = filteredItems.filter((item) => item.category === category);
                  if (items.length === 0) return null;

                  return (
                    <div key={category}>
                      <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--foreground)]">
                        {category}
                      </h2>
                      <div className="space-y-6">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="group flex items-start justify-between gap-4 border-b border-[var(--border)] pb-6 transition-all hover:border-[var(--primary)]/30"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
                                  {item.name}
                                </h3>
                                {item.popular && (
                                  <span className="rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--primary)]">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-[var(--muted-foreground)]">
                                {item.description}
                              </p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {item.allergens.map((allergen) => (
                                  <span
                                    key={allergen}
                                    className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]"
                                  >
                                    {allergen === 'Vegetarian' && <Leaf className="h-3 w-3" />}
                                    {allergen === 'Vegan' && <Leaf className="h-3 w-3" />}
                                    {allergen === 'Gluten-Free' && <Wheat className="h-3 w-3" />}
                                    {allergen}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--primary)]">
                              ${item.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <Info className="mx-auto h-12 w-12 text-[var(--muted-foreground)]" />
              <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                No items match your current filters
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveFilters([]);
                }}
                className="mt-4 text-[var(--primary)] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Location Notice */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-2 text-sm text-[var(--muted-foreground)]">
            <MapPin className="h-4 w-4" />
            Menus may vary slightly by location. Currently viewing the{' '}
            <span className="font-medium text-[var(--foreground)]">
              {selectedLocation?.name}
            </span>{' '}
            menu.
          </p>
        </div>
      </section>
    </div>
  );
}
