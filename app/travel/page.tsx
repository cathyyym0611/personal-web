import PageShell from "@/components/PageShell";
import Travel from "@/components/Travel";

export const metadata = { title: "旅行 | 盈豫" };

export default function TravelPage() {
  return (
    <PageShell>
      <Travel />
    </PageShell>
  );
}
