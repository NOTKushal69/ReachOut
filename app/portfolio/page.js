import PageHeader from '@/components/PageHeader';
import VideoGrid from '@/components/VideoGrid';
import ImageStrip from '@/components/ImageStrip';

export const metadata = {
  title: 'Portfolio — Reach Out Creative',
  description: 'Selected video and design work from Reach Out Creative.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Our Work" title="Portfolio">
        A selection of recent video, design and cinematic projects.
      </PageHeader>
      <VideoGrid title="Video Work" />
      <ImageStrip />
    </>
  );
}
