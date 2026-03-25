import PageShell from "@/components/PageShell";
import AmbientIntelligenceDetail from "@/components/projects/AmbientIntelligenceDetail";

export const metadata = { title: "Ambient Intelligence | 盈豫" };

export default function AmbientIntelligencePage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <AmbientIntelligenceDetail />
    </PageShell>
  );
}
