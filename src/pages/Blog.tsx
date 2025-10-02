import BlogHero from '@/components/block/blog/BlogHero';
import BlogComingSoon from '@/components/block/blog/BlogComingSoon';
import BlogCategories from '@/components/block/blog/BlogCategories';

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <BlogComingSoon />
      <BlogCategories />
    </div>
  );
}
