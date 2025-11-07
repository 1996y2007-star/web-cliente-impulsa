
export interface Testimonial {
  id: number;
  title: string;
  category: string;
  client: string;
  quote: string;
  images: string[];
  metrics: {
    conversion: string;
    loadTime: string;
    traffic: string;
    satisfaction: string;
  };
  tags: string[];
}
