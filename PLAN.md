# $5,000 Restaurant Website - "Multi-Location Restaurant Group"

## Project Overview

**Budget**: $5,000
**Target**: Restaurant chain/group, enterprise operations
**Development Time**: 80-160 hours
**Best For**: Multiple locations, growing chains, franchise operations

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes + tRPC
- **Database**: PostgreSQL (Supabase Pro or dedicated)
- **ORM**: Drizzle ORM
- **CMS**: Sanity (team plan) or custom admin
- **Auth**: NextAuth.js (customer accounts + staff)
- **Hosting**: Vercel Pro or custom infrastructure
- **CDN**: Cloudflare or Vercel Edge Network
- **Email**: Resend (pro tier) or SendGrid
- **Payments**: Stripe (gift cards, deposits)
- **Real-time**: Pusher or Supabase Realtime
- **Styling**: Tailwind CSS + custom design system
- **Animations**: Framer Motion + GSAP
- **Analytics**: GA4 + Mixpanel + Hotjar
- **Monitoring**: Sentry + Vercel Analytics

### Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT (Next.js)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Location │  │Customer  │  │ Admin    │  │ Public   │    │
│  │ Selector │  │ Portal   │  │ Dashboard│  │ Site     │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    tRPC + React Query                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  User    │  │Reservation│  │ Location │  │ Content  │    │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
├─────────────────────────────────────────────────────────────┤
│                      PostgreSQL                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Users   │  │Reservat. │  │Locations │  │ Content  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
├─────────────────────────────────────────────────────────────┤
│                   EXTERNAL SERVICES                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Stripe  │  │  Email   │  │Real-time │  │   CDN    │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### File Structure
```
five_thousand_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (public)/
│   │   ├── menu/
│   │   ├── locations/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   ├── gallery/
│   │   ├── private-dining/
│   │   ├── gift-cards/
│   │   ├── events/
│   │   └── contact/
│   ├── (booking)/
│   │   ├── reservations/
│   │   ├── waitlist/
│   │   └── booking/
│   │       └── [location]/
│   ├── (account)/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── reservations/
│   │   │   ├── preferences/
│   │   │   └── rewards/
│   │   └── profile/
│   ├── (admin)/
│   │   ├── dashboard/
│   │   ├── reservations/
│   │   ├── locations/
│   │   ├── customers/
│   │   ├── menu/
│   │   ├── reports/
│   │   └── settings/
│   ├── (api)/
│   │   ├── trpc/[trpc]/route.ts
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── webhooks/
│   │   │   ├── stripe/route.ts
│   │   │   ├── pusher/route.ts
│   │   │   └── sms/route.ts
│   │   └── og/route.ts
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── LocationSelector.tsx
│   │   └── Footer.tsx
│   ├── home/
│   ├── locations/
│   │   ├── LocationCard.tsx
│   │   ├── LocationMap.tsx
│   │   └── LocationHours.tsx
│   ├── reservations/
│   │   ├── BookingFlow.tsx
│   │   ├── LocationPicker.tsx
│   │   ├── AvailabilityGrid.tsx
│   │   └── RealTimeStatus.tsx
│   ├── account/
│   │   ├── Dashboard.tsx
│   │   ├── ReservationHistory.tsx
│   │   ├── SavedPreferences.tsx
│   │   └── LoyaltyPoints.tsx
│   ├── admin/
│   │   ├── Dashboard.tsx
│   │   ├── ReservationsManager.tsx
│   │   ├── WaitlistManager.tsx
│   │   ├── CustomerSearch.tsx
│   │   ├── LocationManager.tsx
│   │   ├── Reports.tsx
│   │   └── Settings.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       ├── DataTable.tsx
│       ├── Charts.tsx
│       └── Map.tsx
├── lib/
│   ├── db.ts
│   ├── trpc.ts
│   ├── auth.ts
│   ├── email.ts
│   ├── stripe.ts
│   ├── pusher.ts
│   ├── sms.ts
│   └── utils.ts
├── server/
│   ├── routers/
│   │   ├── user.ts
│   │   ├── reservation.ts
│   │   ├── location.ts
│   │   ├── menu.ts
│   │   ├── loyalty.ts
│   │   ├── giftcard.ts
│   │   └── _app.ts
│   ├── services/
│   │   ├── availability.ts
│   │   ├── notifications.ts
│   │   └── analytics.ts
│   └── context.ts
├── db/
│   ├── schema.ts
│   ├── migrations/
│   └── seeds/
├── emails/
│   ├── templates/
│   └── index.ts
├── sanity/
│   └── schemas/
├── public/
└── ...
```

---

## Features

### Multi-Location System
- [ ] Location selector (modal or dropdown)
- [ ] Location-specific menus
- [ ] Location-specific hours and availability
- [ ] Location pages with unique content
- [ ] Location manager in admin
- [ ] Location-based routing

### Customer Accounts
- [ ] Registration/login (email + social)
- [ ] Reservation history
- [ ] Saved preferences (dietary, favorite table)
- [ ] Saved payment methods
- [ ] Loyalty points tracking
- [ ] Profile management

### Loyalty Program
- [ ] Points earned per visit
- [ ] Points redemption
- [ ] Tier levels (Bronze, Silver, Gold)
- [ ] Rewards catalog
- [ ] Birthday rewards
- [ ] Referral bonuses

### Gift Cards
- [ ] Digital gift card purchase
- [ ] Physical gift card activation
- [ ] Balance checking
- [ ] Gift card management in admin
- [ ] Recipient email delivery

### Real-time Features
- [ ] Live waitlist updates
- [ ] Reservation status notifications
- [ ] Table ready notifications (SMS)
- [ ] Real-time availability

### Admin Dashboard
- [ ] Multi-location overview
- [ ] Reservation management
- [ ] Customer CRM
- [ ] Analytics & reports
- [ ] Menu management
- [ ] Staff management
- [ ] Settings per location

### Must NOT Have
- [ ] NO online ordering (separate project)
- [ ] NO kitchen display system
- [ ] NO POS integration

---

## Database Schema

### Core Tables
```typescript
// db/schema.ts

// Users
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }),
  name: varchar('name', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  role: varchar('role', { default: 'customer', enum: ['customer', 'staff', 'admin'] }),
  loyaltyTier: varchar('loyalty_tier', { default: 'bronze', enum: ['bronze', 'silver', 'gold', 'platinum'] }),
  loyaltyPoints: integer('loyalty_points').default(0),
  preferences: json('preferences').$type<UserPreferences>(),
  emailVerified: timestamp('email_verified'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Locations
export const locations = pgTable('locations', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  address: json('address').$type<Address>(),
  phone: varchar('phone', { length: 20 }),
  email: varchar('email', { length: 255 }),
  hours: json('hours').$type<HoursOfOperation>(),
  capacity: integer('capacity'),
  isActive: boolean('is_active').default(true),
  features: json('features').$type<string[]>(),
  images: json('images').$type<string[]>(),
  googlePlaceId: varchar('google_place_id', { length: 255 }),
  metadata: json('metadata'),
});

// Reservations
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
  status: varchar('status', { default: 'pending' }),
  source: varchar('source', { default: 'website' }),
  pointsEarned: integer('points_earned'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Waitlist
export const waitlistEntries = pgTable('waitlist_entries', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  partySize: integer('party_size').notNull(),
  quotedWait: integer('quoted_wait_minutes'),
  checkedInAt: timestamp('checked_in_at').defaultNow(),
  seatedAt: timestamp('seated_at'),
  status: varchar('status', { default: 'waiting' }),
  notes: text('notes'),
});

// Gift Cards
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
  status: varchar('status', { default: 'active' }),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Loyalty Transactions
export const loyaltyTransactions = pgTable('loyalty_transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  type: varchar('type', { enum: ['earn', 'redeem', 'bonus', 'expire'] }).notNull(),
  points: integer('points').notNull(),
  description: varchar('description', { length: 255 }),
  reservationId: uuid('reservation_id').references(() => reservations.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// Location Availability
export const locationAvailability = pgTable('location_availability', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  date: date('date').notNull(),
  time: varchar('time', { length: 5 }).notNull(),
  maxCovers: integer('max_covers').notNull(),
  currentCovers: integer('current_covers').default(0),
  isBlocked: boolean('is_blocked').default(false),
  blockReason: varchar('block_reason', { length: 255 }),
});

// Tables
export const tables = pgTable('tables', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  name: varchar('name', { length: 50 }).notNull(),
  capacity: integer('capacity').notNull(),
  minCapacity: integer('min_capacity'),
  position: json('position').$type<{ x: number; y: number }>(),
  section: varchar('section', { length: 50 }),
  isActive: boolean('is_active').default(true),
});
```

---

## Customer Dashboard

### Features
```tsx
// app/(account)/dashboard/page.tsx
export default function CustomerDashboard() {
  return (
    <div className="dashboard">
      <WelcomeHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Loyalty Card */}
        <LoyaltyCard 
          tier={user.loyaltyTier}
          points={user.loyaltyPoints}
          nextTier={nextTierPoints}
        />
        
        {/* Quick Actions */}
        <QuickActions>
          <ActionButton href="/reservations">New Reservation</ActionButton>
          <ActionButton href="/waitlist">Join Waitlist</ActionButton>
          <ActionButton href="/gift-cards">Buy Gift Card</ActionButton>
        </QuickActions>
        
        {/* Upcoming Reservations */}
        <UpcomingReservations reservations={upcoming} />
      </div>
      
      {/* Reservation History */}
      <ReservationHistory reservations={history} />
      
      {/* Saved Preferences */}
      <SavedPreferences preferences={user.preferences} />
    </div>
  );
}
```

---

## Loyalty Program

### Implementation
```typescript
// server/services/loyalty.ts
export class LoyaltyService {
  private TIERS = {
    bronze: { minPoints: 0, multiplier: 1 },
    silver: { minPoints: 500, multiplier: 1.25 },
    gold: { minPoints: 1500, multiplier: 1.5 },
    platinum: { minPoints: 5000, multiplier: 2 },
  };

  async earnPoints(userId: string, amount: number, reason: string) {
    const user = await this.db.users.find(userId);
    const tier = this.TIERS[user.loyaltyTier];
    const points = Math.floor(amount * tier.multiplier);
    
    await this.db.loyaltyTransactions.create({
      userId,
      type: 'earn',
      points,
      description: reason,
    });
    
    await this.updateUserTier(userId);
    
    return points;
  }

  async redeemPoints(userId: string, points: number, rewardId: string) {
    // Validate balance
    // Create transaction
    // Apply reward
    // Notify user
  }

  private async updateUserTier(userId: string) {
    const totalPoints = await this.getTotalPoints(userId);
    const newTier = this.determineTier(totalPoints);
    
    if (newTier !== currentTier) {
      // Update tier
      // Send tier upgrade notification
    }
  }
}
```

---

## Gift Card System

### Purchase Flow
```tsx
// components/gift-cards/PurchaseFlow.tsx
export function GiftCardPurchaseFlow() {
  const [step, setStep] = useState<'amount' | 'details' | 'payment' | 'confirm'>('amount');
  
  const createPaymentIntent = trpc.giftCard.createIntent.useMutation();
  const confirmPurchase = trpc.giftCard.confirm.useMutation();
  
  return (
    <div className="max-w-lg mx-auto">
      <Stepper current={step} steps={['Amount', 'Details', 'Payment', 'Confirm']} />
      
      {step === 'amount' && (
        <AmountSelector 
          amounts={[25, 50, 100, 200, 500]}
          custom
          onSelect={(amount) => {
            setGiftCard(prev => ({ ...prev, amount }));
            setStep('details');
          }}
        />
      )}
      
      {step === 'details' && (
        <GiftCardDetails
          onSubmit={async (details) => {
            setGiftCard(prev => ({ ...prev, ...details }));
            await createPaymentIntent.mutateAsync({ amount: giftCard.amount });
            setStep('payment');
          }}
        />
      )}
      
      {step === 'payment' && (
        <StripePaymentForm
          clientSecret={paymentIntent.clientSecret}
          onSuccess={() => setStep('confirm')}
        />
      )}
      
      {step === 'confirm' && (
        <GiftCardConfirmation giftCard={giftCard} />
      )}
    </div>
  );
}
```

---

## Real-time Waitlist

### Implementation
```tsx
// components/waitlist/RealTimeWaitlist.tsx
import { useChannel } from '@pusher/pusher-react';

export function RealTimeWaitlist({ locationId }: { locationId: string }) {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  
  useChannel(`waitlist-${locationId}`, 'update', (data) => {
    setEntries(data.entries);
  });
  
  const joinWaitlist = trpc.waitlist.join.useMutation({
    onSuccess: () => {
      toast.success('Added to waitlist!');
    },
  });
  
  return (
    <div>
      <div className="waitlist-status">
        <h3>Current Wait: ~{calculateWait(entries)} minutes</h3>
        <p>{entries.length} parties ahead</p>
      </div>
      
      <button onClick={() => joinWaitlist.mutate({ locationId })}>
        Join Waitlist
      </button>
      
      <ul className="waitlist-entries">
        {entries.map(entry => (
          <li key={entry.id}>
            <span>{entry.name}</span>
            <span>{entry.partySize} guests</span>
            <span>{entry.quotedWait} min</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Admin Dashboard

### Main View
```tsx
// app/(admin)/dashboard/page.tsx
export default function AdminDashboard() {
  const selectedLocation = useLocationStore(state => state.selectedLocation);
  
  return (
    <div className="admin-dashboard">
      <LocationSelector />
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Today's Reservations" 
          value={stats.todayReservations}
          trend={stats.reservationsTrend}
        />
        <StatCard 
          title="Covers" 
          value={stats.todayCovers}
        />
        <StatCard 
          title="Waitlist" 
          value={stats.waitlistCount}
          alert={stats.waitlistCount > 5}
        />
        <StatCard 
          title="No-Shows" 
          value={stats.noShows}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <UpcomingReservationsPanel />
        <WaitlistPanel />
      </div>
      
      <div className="mt-8">
        <ReservationsCalendar />
      </div>
    </div>
  );
}
```

### Reservation Manager
```tsx
// components/admin/ReservationsManager.tsx
export function ReservationsManager() {
  const [filters, setFilters] = useState({
    date: today,
    status: 'all',
    search: '',
  });
  
  const { data: reservations, isLoading } = trpc.admin.reservations.list.useQuery(filters);
  
  return (
    <div className="reservations-manager">
      <div className="filters">
        <DatePicker value={filters.date} onChange={d => setFilters(f => ({ ...f, date: d }))} />
        <StatusFilter value={filters.status} onChange={s => setFilters(f => ({ ...f, status: s }))} />
        <SearchInput value={filters.search} onChange={s => setFilters(f => ({ ...f, search: s }))} />
      </div>
      
      <DataTable
        data={reservations}
        columns={[
          { key: 'time', label: 'Time' },
          { key: 'guestName', label: 'Guest' },
          { key: 'partySize', label: 'Guests' },
          { key: 'status', label: 'Status', render: StatusBadge },
          { key: 'actions', label: '', render: ActionButtons },
        ]}
      />
    </div>
  );
}
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 100
- **Core Web Vitals**: All green
- **Uptime**: 99.9%
- **API Response**: < 200ms p95
- **Real-time Latency**: < 100ms

### Infrastructure
- Edge functions for booking
- Database connection pooling
- Redis for caching/sessions
- CDN for all static assets
- Monitoring & alerting

---

## Security Requirements

- [ ] Rate limiting on all endpoints
- [ ] CSRF protection
- [ ] Input validation (Zod)
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] Secure session management
- [ ] PCI compliance (via Stripe)
- [ ] GDPR compliance features
- [ ] Password hashing (bcrypt)
- [ ] 2FA for admin accounts

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Database setup and migrations
- [ ] Authentication system
- [ ] Multi-location architecture
- [ ] Base admin dashboard

### Phase 2: Booking System (Weeks 3-4)
- [ ] Reservation system
- [ ] Availability management
- [ ] Waitlist system
- [ ] Real-time updates

### Phase 3: Customer Features (Weeks 5-6)
- [ ] Customer accounts
- [ ] Loyalty program
- [ ] Gift card system
- [ ] Profile management

### Phase 4: Admin Tools (Weeks 7-8)
- [ ] Full admin dashboard
- [ ] Analytics & reports
- [ ] Customer CRM
- [ ] Settings management

### Phase 5: Polish & Launch (Weeks 9-10)
- [ ] Performance optimization
- [ ] Security audit
- [ ] Testing
- [ ] Staff training
- [ ] Launch

---

## Comparison to $2,000 Tier

| Feature | $2,000 | $5,000 |
|---------|--------|--------|
| Locations | Single | Multi-location |
| Customer Accounts | No | Full system |
| Loyalty Program | No | Points + tiers |
| Gift Cards | Info only | Full purchase |
| Real-time | No | Live updates |
| Waitlist | Basic | Real-time |
| Admin Dashboard | Basic | Full CRM |
| SMS Notifications | No | Yes |
| Analytics | Basic | Enterprise |

---

## Notes for Developers

This tier introduces enterprise architecture:
- Multi-tenant data model
- Real-time communication
- Payment processing
- Complex state management
- Customer-facing accounts

Build for scalability. Consider hiring additional developers or a team for this tier.
