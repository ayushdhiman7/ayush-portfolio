import Container from '@/components/common/Container';
import PageBackTitle from '@/components/common/PageBackTitle';
import ContactForm from '@/components/contact/ContactForm';
import { Separator } from '@/components/ui/separator';
import { contactConfig } from '@/config/Contact';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = getMetadata('/contact');

export default function ContactPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <PageBackTitle href="/#about-me">Get in Touch</PageBackTitle>
        <div className="py-16">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {contactConfig.title}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                {contactConfig.description}
              </p>
            </div>
            <Separator />

            {/* Contact Form */}
            <div className="mx-auto max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
