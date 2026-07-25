import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import ToolsMarquee from '@/components/ToolsMarquee';

export const metadata = {
  title: 'Services — Reach Out Creative',
  description:
    'Performance marketing, social media, content, website development and workflow automation.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What We Do" title="Services">
        Five services, one team — performance marketing, social, content,
        websites and automation, handled end to end.
      </PageHeader>
      <Services />
      <ToolsMarquee />
    </>
  );
}
