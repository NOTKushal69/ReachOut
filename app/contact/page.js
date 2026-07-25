import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact — Reach Out Creative',
  description: 'Start a project with Reach Out Creative.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact">
        Have something in mind? Tell us about it — we reply within a day or two.
      </PageHeader>
      <Contact />
    </>
  );
}
