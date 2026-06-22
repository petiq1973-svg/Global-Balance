import { Button } from '../ui/button';

interface CTABannerProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  href?: string;
}

export function CTABanner({ title, buttonText, onButtonClick, href }: CTABannerProps) {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
    onButtonClick?.();
  };

  return (
    <section className="bg-gradient-to-r from-violet-600 to-violet-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-violet-700"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
