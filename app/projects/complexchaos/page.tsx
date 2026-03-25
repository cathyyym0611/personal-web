import PageShell from "@/components/PageShell";
import ComplexChaosDetail from "@/components/projects/ComplexChaosDetail";

export const metadata = { title: "ComplexChaos | 盈豫" };

export default function ComplexChaosPage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <ComplexChaosDetail />
    </PageShell>
  );
}
