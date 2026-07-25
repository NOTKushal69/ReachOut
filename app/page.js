import Hero from '@/components/Hero';
import VideoGrid from '@/components/VideoGrid';
import ImageStrip from '@/components/ImageStrip';
import Capabilities from '@/components/Capabilities';
import ToolsMarquee from '@/components/ToolsMarquee';
import DiagonalMarquee from '@/components/DiagonalMarquee';

export default function Home() {
  return (
    <>
      <Hero />
      <DiagonalMarquee />
      <VideoGrid limit={3} showViewAll title="Selected Work" />
      <ImageStrip />
      <Capabilities withCta heading="What We Do" />
      <ToolsMarquee />
      <DiagonalMarquee />
    </>
  );
}
