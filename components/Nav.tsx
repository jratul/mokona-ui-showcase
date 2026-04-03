"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "홈" },
  { href: "/demo/transfer", label: "송금" },
  { href: "/demo/dashboard", label: "대시보드" },
  { href: "/demo/form", label: "폼" },
  { href: "/demo/components", label: "컴포넌트" },
  { href: "/demo/feedback", label: "피드백" },
  { href: "/demo/inputs", label: "입력" },
  { href: "/demo/data", label: "데이터" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-[16px] font-bold" style={{ color: "var(--color-primary)" }}>
            mokona-ui
          </Link>
          <nav className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-1.5 text-[14px] font-medium transition-colors"
                  style={{
                    color: active ? "var(--color-primary)" : "var(--color-muted-foreground)",
                    backgroundColor: active ? "color-mix(in srgb, var(--color-primary) 10%, transparent)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
