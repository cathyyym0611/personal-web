import PageShell from "@/components/PageShell";
import SoniaHealthDetail from "@/components/projects/SoniaHealthDetail";

export const metadata = { title: "Sonia Health | 盈豫" };

export default function SoniaHealthPage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <SoniaHealthDetail />
    </PageShell>
  );
}
