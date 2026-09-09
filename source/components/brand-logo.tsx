export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="/logo.jpg"
      alt="City on the Hill"
      width={160}
      height={72}
    />
  );
}