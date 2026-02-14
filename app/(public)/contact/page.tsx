'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const locations = [
  {
    name: 'Downtown',
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-0100',
    email: 'downtown@maisonbistrot.com',
  },
  {
    name: 'Westside',
    address: '456 Oak Avenue, New York, NY 10002',
    phone: '(212) 555-0200',
    email: 'westside@maisonbistrot.com',
  },
  {
    name: 'Harbor View',
    address: '789 Waterfront Drive, New York, NY 10003',
    phone: '(212) 555-0300',
    email: 'harbor@maisonbistrot.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            Get in Touch
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Have a question or special request? We'd love to hear from you. 
            Reach out to us and our team will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                Send Us a Message
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Fill out the form below and we'll respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-green-700">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      label="Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    label="Phone (optional)"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="flex h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="private-dining">Private Dining</option>
                      <option value="feedback">Feedback</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                Our Locations
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Visit us at any of our three locations across the city.
              </p>

              <div className="mt-8 space-y-8">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--primary)]">
                      {location.name}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <p className="flex items-start gap-3 text-sm">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
                        {location.address}
                      </p>
                      <p className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
                        <a href={`tel:${location.phone}`} className="hover:text-[var(--primary)]">
                          {location.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
                        <a href={`mailto:${location.email}`} className="hover:text-[var(--primary)]">
                          {location.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* General Inquiries */}
              <div className="mt-8 rounded-2xl bg-[var(--primary)]/10 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  General Inquiries
                </h3>
                <div className="mt-4 space-y-3">
                  <p className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                    <a href="mailto:info@maisonbistrot.com" className="font-medium hover:underline">
                      info@maisonbistrot.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                    <a href="tel:+12125550000" className="font-medium hover:underline">
                      (212) 555-0000
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                    <span>Mon-Fri: 9am - 6pm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
