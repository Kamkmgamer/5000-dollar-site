'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@/components/providers/LocationProvider';
import { MapPin, Leaf, Flame, Wheat, Info, Award } from 'lucide-react';

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
    image: '/Images/foie_gras_torchon_1771034713640.png',
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
    image: '/Images/burrata_salad_1771034728757.png',
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
    image: '/Images/escargots_bourgogne_1771034742576.png',
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
    image: '/Images/dish_wagyu_1771030987953.png',
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
    image: '/Images/dish_duck_1771031018820.png',
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
    image: '/Images/coq_au_vin_1771034757251.png',
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
    image: '/Images/dish_scallops_1771030971105.png',
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
    image: '/Images/grilled_branzino_1771034772521.png',
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
    image: '/Images/dish_risotto_1771031000433.png',
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
    image: '/Images/truffle_pappardelle_1771034789207.png',
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
    image: '/Images/seafood_linguine_1771034803271.png',
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
    image: '/Images/nicoise_salad_1771034817031.png',
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
    image: '/Images/creme_brulee_1771034833755.png',
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
    image: '/Images/chocolate_souffle_final_1771035158447.png',
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
    <div className="min-h-screen bg-[var(--neutral-950)]">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 pt-40">
        <div className="absolute inset-0">
          <img
            src="/Images/hero_luxury_bistro_1771032197619.png"
            alt="Maison Bistrot Bar"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[var(--neutral-950)]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/60 via-[var(--neutral-950)] to-[var(--neutral-950)]" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-30" />
        {/* Gold glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent-500)]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-400)]">
              <Award className="h-3.5 w-3.5" />
              {selectedLocation?.name} Menu
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-[family-name:var(--font-display)] text-6xl font-bold text-[var(--neutral-100)] sm:text-7xl"
          >
            Seasonal Cuisine
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-divider mx-auto mt-6 max-w-xs"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-[var(--neutral-400)]"
          >
            Our menu changes seasonally to showcase the finest ingredients at their peak freshness
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 border-b border-[var(--neutral-800)]/80 bg-[var(--neutral-950)]/90 py-5 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-[var(--accent-500)] text-[var(--neutral-950)] shadow-[0_0_20px_rgba(201,168,76,0.15)]'
                  : 'text-[var(--neutral-400)] hover:bg-[var(--neutral-800)] hover:text-[var(--neutral-200)]'
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
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${activeFilters.includes(allergen)
                  ? 'border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 text-[var(--accent-400)]'
                  : 'border border-[var(--neutral-800)] text-[var(--neutral-500)] hover:border-[var(--accent-500)]/20 hover:text-[var(--neutral-300)]'
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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeFilters.join(',')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {categories
                .filter((cat) => cat !== 'All' && (activeCategory === 'All' || activeCategory === cat))
                .map((category) => {
                  const items = filteredItems.filter((item) => item.category === category);
                  if (items.length === 0) return null;

                  return (
                    <div key={category}>
                      <div className="mb-8 flex items-center gap-4">
                        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--neutral-100)]">
                          {category}
                        </h2>
                        <div className="flex-1 gold-line-left" />
                      </div>
                      <div className="space-y-0">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="group flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border-b border-[var(--neutral-800)]/50 py-6 transition-all duration-300 hover:border-[var(--accent-500)]/20"
                          >
                            {/* Item Image */}
                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--accent-500)]/10">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                              <div className="flex flex-col sm:flex-row items-center gap-3">
                                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--neutral-100)] transition-colors duration-300 group-hover:text-[var(--accent-400)]">
                                  {item.name}
                                </h3>
                                {item.popular && (
                                  <span className="rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--accent-400)]">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="mt-1.5 text-sm text-[var(--neutral-500)]">
                                {item.description}
                              </p>
                              <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                                {item.allergens.map((allergen) => (
                                  <span
                                    key={allergen}
                                    className="flex items-center gap-1 text-xs text-[var(--neutral-600)]"
                                  >
                                    {allergen === 'Vegetarian' && <Leaf className="h-3 w-3" />}
                                    {allergen === 'Vegan' && <Leaf className="h-3 w-3" />}
                                    {allergen === 'Gluten-Free' && <Wheat className="h-3 w-3" />}
                                    {allergen}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {/* Dot leader line (only visible on large screens) */}
                            <div className="dot-leader hidden lg:block" />
                            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--accent-400)]">
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
            <div className="py-24 text-center">
              <Info className="mx-auto h-12 w-12 text-[var(--neutral-700)]" />
              <p className="mt-4 text-lg text-[var(--neutral-500)]">
                No items match your current filters
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveFilters([]);
                }}
                className="mt-4 text-sm text-[var(--accent-500)] transition-colors hover:text-[var(--accent-400)]"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Location Notice */}
      <section className="border-t border-[var(--neutral-800)] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-2 text-xs text-[var(--neutral-600)]">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent-500)]/40" />
            Menus may vary slightly by location. Currently viewing the{' '}
            <span className="font-medium text-[var(--neutral-400)]">
              {selectedLocation?.name}
            </span>{' '}
            menu.
          </p>
        </div>
      </section>
    </div>
  );
}
