import { Nav } from "@/components/Nav";
import { ComponentsShowcase } from "./ComponentsShowcase";

const tocItems = [
  { id: "loading", label: "Loading" },
  { id: "accordion", label: "Accordion" },
  { id: "searchfield", label: "SearchField" },
  { id: "iconbutton", label: "IconButton" },
  { id: "text", label: "Text" },
  { id: "button", label: "Button" },
  { id: "badge", label: "Badge" },
  { id: "chip", label: "Chip" },
  { id: "icon", label: "Icon" },
  { id: "amount", label: "Amount" },
  { id: "divider", label: "Divider" },
  { id: "spinner", label: "Spinner" },
  { id: "skeleton", label: "Skeleton" },
  { id: "empty", label: "Empty" },
];

export default function ComponentsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-5xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold" style={{ color: "var(--color-foreground)" }}>
            컴포넌트 갤러리
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: "var(--color-muted-foreground)" }}>
            Text, Button, Badge, Chip, Icon, Amount, Spinner, Skeleton, Empty 컴포넌트 모음
          </p>
        </div>
        <div className="mb-10 flex flex-wrap gap-2">
          {tocItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border px-3 py-1 text-[13px] font-medium transition-colors hover:border-(--color-primary) hover:text-(--color-primary)"
              style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}
            >
              {label}
            </a>
          ))}
        </div>
        <ComponentsShowcase />
      </main>
    </>
  );
}
