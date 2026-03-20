import PageShell from "@/components/PageShell";
import JobAssistantDetail from "@/components/projects/JobAssistantDetail";

export const metadata = { title: "AI求职助手 | 盈豫" };

export default function JobAssistantPage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <JobAssistantDetail />
    </PageShell>
  );
}
