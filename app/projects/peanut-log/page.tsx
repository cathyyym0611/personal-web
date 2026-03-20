import PageShell from "@/components/PageShell";
import PeanutLogDetail from "@/components/projects/PeanutLogDetail";

export const metadata = { title: "花生记 | 盈豫" };

export default function PeanutLogPage() {
  return (
    <PageShell backLabel="折腾" backHref="/projects">
      <PeanutLogDetail />
    </PageShell>
  );
}
