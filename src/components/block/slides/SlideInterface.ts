export interface SlideProps {
  isActive: boolean;
  onActionClick?: () => void;
  onContactClick?: () => void;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  component: React.ComponentType<SlideProps>;
}
