import PageShell from "@/components/PageShell";
import Portfolio from "@/components/Portfolio";

export const metadata = { title: "作品集 | 盈豫" };

export default function PortfolioPage() {
  return (
    <PageShell>
      <Portfolio />
    </PageShell>
  );
}
