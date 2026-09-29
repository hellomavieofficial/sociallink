import { cn } from '@/lib/utils';

type DotPatternProps = React.SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  glow?: boolean;
};

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  glow = false,
  className,
  ...props
}: DotPatternProps) {
  const patternId = `dot-pattern-${width}-${height}-${x}-${y}-${cx}-${cy}-${cr}`;

  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 size-full text-lightGray', glow && 'opacity-80', className)}
      {...props}
    >
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <circle cx={cx} cy={cy} r={cr} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
