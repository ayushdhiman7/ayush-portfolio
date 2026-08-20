import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee-01-utils/marquee';
import { testimonials } from '@/config/Testimonials';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-72 cursor-pointer overflow-hidden border-border bg-card p-4 shadow-none">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-row items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
            {initials(name)}
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="truncate text-sm font-medium text-foreground">
              {name}
            </p>
            <p className="truncate text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-foreground">
          {body}
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Row 1: left → right */}
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {testimonials.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Row 2: right → left */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {[...testimonials].reverse().map((review) => (
          <ReviewCard key={`row2-${review.username}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
