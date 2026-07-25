import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import DiagonalMarquee from '@/components/DiagonalMarquee';

export const metadata = {
  title: 'About — Reach Out Creative',
  description: 'Who\'s behind the lens at Reach Out Creative.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Who's Behind the Lens" title="About">
        A tight-knit creative team making sharp, personal work — fast.
      </PageHeader>
      <About />
      <DiagonalMarquee />
    </>
  );
}
