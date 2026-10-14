export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="/logo-stacked-white.png"
      alt="City on the Hill"
      width={148}
      height={64}
    />
  );
}