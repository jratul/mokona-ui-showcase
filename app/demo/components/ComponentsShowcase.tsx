"use client";

import { useState } from "react";
// @ts-expect-error -- mokona-ui has no type declarations
import { Button, Text, Divider, Badge, Chip, Spinner, Skeleton, Empty, Amount, Icon } from "mokona-ui";
import { Inbox, Search, Star, Heart, Download, RefreshCw, Trash2, Settings } from "lucide-react";

const buttonVariants = ["primary", "secondary", "outline", "ghost", "danger"] as const;
const buttonSizes = ["sm", "md", "lg"] as const;
const badgeVariants = ["primary", "positive", "negative", "warning", "neutral", "outline"] as const;
const badgeLabels: Record<string, string> = {
  primary: "기본",
  positive: "성공",
  negative: "오류",
  warning: "주의",
  neutral: "중립",
  outline: "외곽선",
};
const textVariants = [
  { variant: "display1", label: "Display 1 — 큰 제목" },
  { variant: "title1", label: "Title 1 — 섹션 제목" },
  { variant: "title2", label: "Title 2 — 소제목" },
  { variant: "title3", label: "Title 3 — 강조" },
  { variant: "body1", label: "Body 1 — 본문 텍스트" },
  { variant: "body2", label: "Body 2 — 작은 본문" },
  { variant: "caption1", label: "Caption 1 — 캡션" },
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Text variant="title2" style={{ color: "var(--color-foreground)" }}>
        {title}
      </Text>
      <Divider spacing="none" />
      {children}
    </div>
  );
}

export function ComponentsShowcase() {
  const [selectedChips, setSelectedChips] = useState<string[]>(["react", "typescript"]);
  const [loadingBtn, setLoadingBtn] = useState(false);

  function toggleChip(id: string) {
    setSelectedChips((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  function handleLoadingClick() {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  }

  const chips = [
    { id: "react", label: "React" },
    { id: "typescript", label: "TypeScript" },
    { id: "nextjs", label: "Next.js" },
    { id: "tailwind", label: "Tailwind" },
    { id: "zod", label: "Zod" },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Text */}
      <Section title="Text — 타이포그래피">
        <div className="flex flex-col gap-3 rounded-2xl p-5" style={{ backgroundColor: "var(--color-muted)" }}>
          {textVariants.map(({ variant, label }) => (
            <Text key={variant} variant={variant} style={{ color: "var(--color-foreground)" }}>
              {label}
            </Text>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {(["default", "muted", "primary", "positive", "negative", "warning"] as const).map((color) => (
            <Text key={color} variant="body1" color={color}>
              {color}
            </Text>
          ))}
        </div>
      </Section>

      {/* Button */}
      <Section title="Button — 버튼">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            {buttonVariants.map((v) => (
              <Button key={v} variant={v}>
                {v}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {buttonSizes.map((s) => (
              <Button key={s} size={s}>
                size {s}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button loading={loadingBtn} onClick={handleLoadingClick}>
              {loadingBtn ? "처리 중..." : "로딩 버튼 (클릭)"}
            </Button>
            <Button disabled>비활성화</Button>
            <Button fullWidth>전체 너비 버튼</Button>
          </div>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge — 배지">
        <div className="flex flex-col gap-3">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-wrap items-center gap-2">
              <Text variant="caption1" color="muted">{size}</Text>
              {badgeVariants.map((v) => (
                <Badge key={v} variant={v} size={size}>
                  {badgeLabels[v]}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* Chip */}
      <Section title="Chip — 선택 태그">
        <div className="flex flex-wrap gap-2">
          {chips.map(({ id, label }) => (
            <Chip
              key={id}
              selected={selectedChips.includes(id)}
              onClick={() => toggleChip(id)}
            >
              {label}
            </Chip>
          ))}
        </div>
        <Text variant="caption1" color="muted">
          선택됨: {selectedChips.join(", ") || "없음"}
        </Text>
      </Section>

      {/* Icon */}
      <Section title="Icon — 아이콘">
        <div className="flex flex-wrap items-end gap-4">
          {([
            { icon: Star, label: "Star" },
            { icon: Heart, label: "Heart" },
            { icon: Download, label: "Download" },
            { icon: RefreshCw, label: "RefreshCw" },
            { icon: Trash2, label: "Trash2" },
            { icon: Settings, label: "Settings" },
          ] as const).map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon icon={icon} size="lg" style={{ color: "var(--color-primary)" }} />
              <Text variant="caption1" color="muted">{label}</Text>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-end gap-4">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-1">
              <Icon icon={Star} size={size} style={{ color: "var(--color-foreground)" }} />
              <Text variant="caption1" color="muted">{size}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Amount */}
      <Section title="Amount — 금액 표시">
        <div className="flex flex-col gap-3 rounded-2xl p-5" style={{ backgroundColor: "var(--color-muted)" }}>
          <Amount value={12543200} locale="ko-KR" currency="KRW" variant="display1" />
          <Amount value={3200000} locale="ko-KR" currency="KRW" variant="title1" colorBySign showSign />
          <Amount value={-204500} locale="ko-KR" currency="KRW" variant="title2" colorBySign showSign />
          <Amount value={0} locale="ko-KR" currency="KRW" variant="body1" colorBySign showSign />
        </div>
      </Section>

      {/* Divider */}
      <Section title="Divider — 구분선">
        <div className="flex flex-col gap-3">
          <Divider spacing="sm" />
          <Divider spacing="md" />
          <Divider spacing="lg" />
          <div className="flex h-16 items-center gap-4">
            <Text variant="body2" color="muted">수평</Text>
            <Divider orientation="vertical" />
            <Text variant="body2" color="muted">구분선</Text>
            <Divider orientation="vertical" />
            <Text variant="body2" color="muted">예시</Text>
          </div>
        </div>
      </Section>

      {/* Spinner */}
      <Section title="Spinner — 로딩 스피너">
        <div className="flex flex-wrap items-end gap-8">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Spinner size={size} />
              <Text variant="caption1" color="muted">{size}</Text>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-end gap-8">
          {(["primary", "muted"] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <Spinner size="md" color={color} />
              <Text variant="caption1" color="muted">{color}</Text>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "var(--color-primary)" }}>
              <Spinner size="sm" color="white" />
            </div>
            <Text variant="caption1" color="muted">white</Text>
          </div>
        </div>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton — 스켈레톤">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" width={48} height={48} />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton variant="text" width="60%" height={18} />
              <Skeleton variant="text" width="40%" height={14} />
            </div>
          </div>
          <Skeleton variant="rectangular" width="100%" height={120} />
          <Skeleton variant="text" lines={3} />
        </div>
      </Section>

      {/* Empty */}
      <Section title="Empty — 빈 상태">
        <div
          className="rounded-2xl"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <Empty
            icon={<Inbox size={40} style={{ color: "var(--color-muted-foreground)" }} />}
            title="검색 결과가 없습니다"
            description="다른 검색어로 다시 시도해보세요."
            action={
              <Button variant="outline" size="sm">
                <Search size={14} />
                &nbsp;다시 검색
              </Button>
            }
          />
        </div>
      </Section>
    </div>
  );
}
