import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  decimal,
  date,
  json,
} from 'drizzle-orm/pg-core';

// Users table with loyalty program
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }),
  name: varchar('name', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  role: varchar('role', { length: 20 }).default('customer').notNull(),
  loyaltyTier: varchar('loyalty_tier', { length: 20 }).default('bronze').notNull(),
  loyaltyPoints: integer('loyalty_points').default(0),
  preferences: json('preferences').$type<{
    dietaryRestrictions?: string[];
    favoriteTable?: string;
    occasionPreferences?: string[];
    newsletterSubscribed?: boolean;
  }>(),
  emailVerified: timestamp('email_verified'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Restaurant locations
export const locations = pgTable('locations', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  address: json('address').$type<{
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }>().notNull(),
  phone: varchar('phone', { length: 20 }),
  email: varchar('email', { length: 255 }),
  hours: json('hours').$type<{
    monday?: { open: string; close: string; closed?: boolean };
    tuesday?: { open: string; close: string; closed?: boolean };
    wednesday?: { open: string; close: string; closed?: boolean };
    thursday?: { open: string; close: string; closed?: boolean };
    friday?: { open: string; close: string; closed?: boolean };
    saturday?: { open: string; close: string; closed?: boolean };
    sunday?: { open: string; close: string; closed?: boolean };
  }>(),
  capacity: integer('capacity'),
  isActive: boolean('is_active').default(true),
  features: json('features').$type<string[]>(),
  images: json('images').$type<string[]>(),
  googlePlaceId: varchar('google_place_id', { length: 255 }),
  description: text('description'),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Reservations table
export const reservations = pgTable('reservations', {
  id: uuid('id').defaultRandom().primaryKey(),
  confirmationCode: varchar('confirmation_code', { length: 8 }).unique().notNull(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  userId: uuid('user_id').references(() => users.id),
  guestName: varchar('guest_name', { length: 255 }).notNull(),
  guestEmail: varchar('guest_email', { length: 255 }).notNull(),
  guestPhone: varchar('guest_phone', { length: 20 }).notNull(),
  date: date('date').notNull(),
  time: varchar('time', { length: 5 }).notNull(),
  endTime: varchar('end_time', { length: 5 }),
  partySize: integer('party_size').notNull(),
  occasion: varchar('occasion', { length: 100 }),
  specialRequests: text('special_requests'),
  dietaryRestrictions: json('dietary_restrictions').$type<string[]>(),
  tableId: uuid('table_id'),
  status: varchar('status', { length: 50 }).default('pending').notNull(),
  source: varchar('source', { length: 50 }).default('website').notNull(),
  pointsEarned: integer('points_earned').default(0),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Waitlist entries
export const waitlistEntries = pgTable('waitlist_entries', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  userId: uuid('user_id').references(() => users.id),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  partySize: integer('party_size').notNull(),
  quotedWait: integer('quoted_wait_minutes'),
  checkedInAt: timestamp('checked_in_at').defaultNow().notNull(),
  seatedAt: timestamp('seated_at'),
  notifiedAt: timestamp('notified_at'),
  status: varchar('status', { length: 50 }).default('waiting').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Gift cards
export const giftCards = pgTable('gift_cards', {
  id: uuid('id').defaultRandom().primaryKey(),
  code: varchar('code', { length: 16 }).unique().notNull(),
  initialBalance: decimal('initial_balance', { precision: 10, scale: 2 }).notNull(),
  currentBalance: decimal('current_balance', { precision: 10, scale: 2 }).notNull(),
  purchaserId: uuid('purchaser_id').references(() => users.id),
  purchaserEmail: varchar('purchaser_email', { length: 255 }),
  recipientEmail: varchar('recipient_email', { length: 255 }),
  recipientName: varchar('recipient_name', { length: 255 }),
  message: text('message'),
  stripePaymentId: varchar('stripe_payment_id', { length: 255 }),
  status: varchar('status', { length: 50 }).default('active').notNull(),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Loyalty transactions
export const loyaltyTransactions = pgTable('loyalty_transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  type: varchar('type', { length: 20 }).notNull(), // 'earn', 'redeem', 'bonus', 'expire'
  points: integer('points').notNull(),
  description: varchar('description', { length: 255 }),
  reservationId: uuid('reservation_id').references(() => reservations.id),
  giftCardId: uuid('gift_card_id').references(() => giftCards.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Location availability
export const locationAvailability = pgTable('location_availability', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  date: date('date').notNull(),
  time: varchar('time', { length: 5 }).notNull(),
  maxCovers: integer('max_covers').notNull(),
  currentCovers: integer('current_covers').default(0),
  isBlocked: boolean('is_blocked').default(false),
  blockReason: varchar('block_reason', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Tables per location
export const tables = pgTable('tables', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  name: varchar('name', { length: 50 }).notNull(),
  capacity: integer('capacity').notNull(),
  minCapacity: integer('min_capacity').default(1),
  position: json('position').$type<{ x: number; y: number }>(),
  section: varchar('section', { length: 50 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Menu categories
export const menuCategories = pgTable('menu_categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  sortOrder: integer('sort_order').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Menu items
export const menuItems = pgTable('menu_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  categoryId: uuid('category_id').references(() => menuCategories.id).notNull(),
  locationId: uuid('location_id').references(() => locations.id),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  image: varchar('image', { length: 500 }),
  tags: json('tags').$type<string[]>(), // 'vegetarian', 'gluten-free', 'spicy', etc.
  allergens: json('allergens').$type<string[]>(),
  isPopular: boolean('is_popular').default(false),
  isActive: boolean('is_active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Accounts table for NextAuth
export const accounts = pgTable('accounts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  provider: varchar('provider', { length: 255 }).notNull(),
  providerAccountId: varchar('provider_account_id', { length: 255 }).notNull(),
  refreshToken: text('refresh_token'),
  accessToken: text('access_token'),
  expiresAt: integer('expires_at'),
  tokenType: varchar('token_type', { length: 255 }),
  scope: varchar('scope', { length: 255 }),
  idToken: text('id_token'),
  sessionState: varchar('session_state', { length: 255 }),
});

// Sessions table for NextAuth
export const sessions = pgTable('sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  sessionToken: varchar('session_token', { length: 255 }).unique().notNull(),
  expires: timestamp('expires').notNull(),
});

// Verification tokens for NextAuth
export const verificationTokens = pgTable('verification_tokens', {
  identifier: varchar('identifier', { length: 255 }).notNull(),
  token: varchar('token', { length: 255 }).unique().notNull(),
  expires: timestamp('expires').notNull(),
});
