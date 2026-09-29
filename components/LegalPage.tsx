import { Header } from './Header';
import { Footer } from './Footer';
import { PageContainer } from './PageContainer';

export function LegalPage({ title, eyebrow, updated, children }: { title: string; eyebrow: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageContainer className="max-w-3xl">
        <div className="mb-12">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
        <article className="prose-ux">{children}</article>
      </PageContainer>
      <Footer />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2>{title}</h2>{children}</section>;
}
