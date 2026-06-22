import { cn } from '../../lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  aspect?: 'square' | 'video' | 'portrait' | 'landscape';
}

export function ImagePlaceholder({ className, aspect = 'square' }: ImagePlaceholderProps) {
  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }[aspect];

  return (
    <div
      className={cn(
        'bg-stone-200 rounded-2xl animate-pulse',
        aspectClass,
        className
      )}
    />
  );
}
