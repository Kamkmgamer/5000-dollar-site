import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getUserFromClerk() {
  const clerkUser = await currentUser();
  
  if (!clerkUser) {
    return null;
  }

  // Check if user exists in our database
  let user = await db.query.users.findFirst({
    where: eq(users.email, clerkUser.emailAddresses[0]?.emailAddress || ''),
  });

  // If not, create the user
  if (!user) {
    const [newUser] = await db.insert(users).values({
      email: clerkUser.emailAddresses[0]?.emailAddress || '',
      name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
      role: 'customer',
      loyaltyTier: 'bronze',
      loyaltyPoints: 100, // Welcome bonus
    }).returning();
    
    user = newUser;
  }

  return user;
}

export async function requireAuth() {
  const user = await getUserFromClerk();
  
  if (!user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}
