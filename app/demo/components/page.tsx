import { Nav } from "@/components/Nav";
import { ComponentsShowcase } from "./ComponentsShowcase";

export default function ComponentsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-10">
          <h1 className="text-[28px] font-bold" style={{ color: "var(--color-foreground)" }}>
            컴포넌트 갤러리
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: "var(--color-muted-foreground)" }}>
            Text, Button, Badge, Chip, Icon, Amount, Spinner, Skeleton, Empty 컴포넌트 모음
          </p>
        </div>
        <ComponentsShowcase />
      </main>
    </>
  );
}
