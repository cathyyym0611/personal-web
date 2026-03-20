import PageShell from "@/components/PageShell";
import VocabStoryDetail from "@/components/projects/VocabStoryDetail";

export const metadata = { title: "词忆 | 盈豫" };

export default function VocabStoryPage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <VocabStoryDetail />
    </PageShell>
  );
}
