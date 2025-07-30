import React from 'react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
      <p className="mb-6">Sign up today and launch your SaaS in minutes.</p>
      <Button variant="secondary">Get Started</Button>
    </section>
  );
}
