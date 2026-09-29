export function PageContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16 ${className}`}>
      {children}
    </main>
  );
}
