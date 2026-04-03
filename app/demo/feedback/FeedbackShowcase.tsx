"use client";

import { useState } from "react";
import {
  Button, Text, Divider, Alert, Modal, BottomSheet,
  Tooltip, Popover, DropdownMenu, Toaster, toast,
} from "mokona-ui";
import {
  Info, CheckCircle, AlertTriangle, XCircle,
  Bell, Trash2, Edit, Share2, MoreHorizontal,
  Copy, ExternalLink, Settings, LogOut,
} from "lucide-react";

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

function AlertSection() {
  return (
    <Section title="Alert — 알림 메시지">
      <div className="flex flex-col gap-3">
        <Alert variant="info" title="정보" icon>인증 메일이 발송되었습니다. 메일함을 확인하세요.</Alert>
        <Alert variant="positive" title="성공" icon>계좌 연결이 완료되었습니다.</Alert>
        <Alert variant="warning" title="주의" icon>비밀번호를 90일째 변경하지 않았습니다.</Alert>
        <Alert variant="negative" title="오류" icon>결제에 실패했습니다. 다시 시도해주세요.</Alert>
        <Alert variant="neutral" icon>서비스 점검이 예정되어 있습니다.</Alert>
      </div>
    </Section>
  );
}

function ToastSection() {

  return (
    <Section title="Toast — 토스트 알림">
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => toast({ description: "기본 토스트 메시지입니다." })}>
          <Bell size={14} />&nbsp;기본
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({ variant: "positive", description: "저장이 완료되었습니다." })
          }
        >
          <CheckCircle size={14} style={{ color: "var(--color-positive)" }} />&nbsp;성공
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({ variant: "negative", description: "오류가 발생했습니다." })
          }
        >
          <XCircle size={14} style={{ color: "var(--color-negative)" }} />&nbsp;오류
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({ variant: "warning", description: "잔액이 부족합니다." })
          }
        >
          <AlertTriangle size={14} style={{ color: "var(--color-warning)" }} />&nbsp;경고
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({
              description: "파일이 삭제되었습니다.",
              action: <button onClick={() => toast({ description: "삭제가 취소되었습니다." })} className="text-[13px] font-medium underline" style={{ color: "var(--color-primary)" }}>실행 취소</button>,
            })
          }
        >
          <Trash2 size={14} />&nbsp;액션 포함
        </Button>
      </div>
    </Section>
  );
}

function ModalSection() {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <Section title="Modal — 다이얼로그">
      <div className="flex flex-wrap gap-3">
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="계좌 추가"
          description="연결할 은행 계좌 정보를 입력해주세요."
          size="md"
          trigger={<Button variant="outline">모달 열기</Button>}
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
              <Button onClick={() => setOpen(false)}>확인</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-3 py-2">
            <div
              className="rounded-xl p-4 text-[14px]"
              style={{ backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }}
            >
              연결할 계좌를 선택하면 실시간 잔액 조회 및 거래 내역 확인이 가능합니다.
            </div>
            <Alert variant="info" icon>보안 연결로 안전하게 처리됩니다.</Alert>
          </div>
        </Modal>

        <Modal
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="계좌 삭제"
          description="이 계좌를 삭제하면 관련 데이터가 모두 제거됩니다."
          size="sm"
          trigger={
            <Button variant="outline">
              <Trash2 size={14} />&nbsp;삭제 확인 모달
            </Button>
          }
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setConfirmOpen(false)}>취소</Button>
              <Button variant="danger" onClick={() => setConfirmOpen(false)}>삭제</Button>
            </div>
          }
        >
          <Alert variant="negative" icon>이 작업은 되돌릴 수 없습니다.</Alert>
        </Modal>
      </div>
    </Section>
  );
}

function BottomSheetSection() {
  const [open, setOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <Section title="BottomSheet — 바텀 시트">
      <div className="flex flex-wrap gap-3">
        <BottomSheet
          open={open}
          onOpenChange={setOpen}
          title="공유하기"
          description="링크를 공유하거나 다운로드할 수 있습니다."
          trigger={
            <Button variant="outline">
              <Share2 size={14} />&nbsp;공유 시트
            </Button>
          }
        >
          <div className="flex flex-col gap-2 pb-4">
            {[
              { icon: Copy, label: "링크 복사" },
              { icon: ExternalLink, label: "외부 브라우저로 열기" },
              { icon: Share2, label: "SNS 공유" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium text-left transition-colors"
                style={{ color: "var(--color-foreground)" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-muted)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setOpen(false)}
              >
                <Icon size={18} style={{ color: "var(--color-primary)" }} />
                {label}
              </button>
            ))}
          </div>
        </BottomSheet>

        <BottomSheet
          open={actionOpen}
          onOpenChange={setActionOpen}
          title="작업 선택"
          trigger={
            <Button variant="outline">
              <Edit size={14} />&nbsp;액션 시트
            </Button>
          }
        >
          <div className="flex flex-col gap-2 pb-4">
            {[
              { icon: Edit, label: "수정하기", color: "var(--color-foreground)" },
              { icon: Share2, label: "공유하기", color: "var(--color-foreground)" },
              { icon: Trash2, label: "삭제하기", color: "var(--color-negative)" },
            ].map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium text-left transition-colors"
                style={{ color }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-muted)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setActionOpen(false)}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </BottomSheet>
      </div>
    </Section>
  );
}

function TooltipSection() {
  return (
    <Section title="Tooltip — 툴팁">
      <div className="flex flex-wrap items-center gap-4">
        <Tooltip content="상단 툴팁" side="top">
          <Button variant="outline" size="sm">위</Button>
        </Tooltip>
        <Tooltip content="하단 툴팁" side="bottom">
          <Button variant="outline" size="sm">아래</Button>
        </Tooltip>
        <Tooltip content="좌측 툴팁" side="left">
          <Button variant="outline" size="sm">왼쪽</Button>
        </Tooltip>
        <Tooltip content="우측 툴팁" side="right">
          <Button variant="outline" size="sm">오른쪽</Button>
        </Tooltip>
        <Tooltip content="정보 아이콘에 대한 설명입니다." side="top">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }}
          >
            <Info size={13} />
          </button>
        </Tooltip>
      </div>
    </Section>
  );
}

function PopoverSection() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Section title="Popover — 팝오버">
      <div className="flex flex-wrap gap-3">
        <Popover
          open={filterOpen}
          onOpenChange={setFilterOpen}
          side="bottom"
          align="start"
          trigger={
            <Button variant="outline">
              <Settings size={14} />&nbsp;필터 설정
            </Button>
          }
        >
          <div className="flex w-56 flex-col gap-3 p-4">
            <Text variant="title3" style={{ color: "var(--color-foreground)" }}>필터</Text>
            <div className="flex flex-col gap-2 text-[14px]" style={{ color: "var(--color-foreground)" }}>
              {["전체", "수입", "지출", "대기 중"].map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" defaultChecked={item === "전체"} className="accent-blue-500" />
                  {item}
                </label>
              ))}
            </div>
            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="secondary" fullWidth onClick={() => setFilterOpen(false)}>
                초기화
              </Button>
              <Button size="sm" fullWidth onClick={() => setFilterOpen(false)}>
                적용
              </Button>
            </div>
          </div>
        </Popover>
      </div>
    </Section>
  );
}

function DropdownMenuSection() {

  const menuItems = [
    { type: "item" as const, label: "수정", icon: <Edit size={14} />, onSelect: () => toast({ description: "수정 클릭" }) },
    { type: "item" as const, label: "복사", icon: <Copy size={14} />, shortcut: "⌘C", onSelect: () => toast({ description: "복사됨" }) },
    { type: "item" as const, label: "공유", icon: <Share2 size={14} />, onSelect: () => toast({ description: "공유 클릭" }) },
    { type: "separator" as const },
    { type: "item" as const, label: "설정", icon: <Settings size={14} />, onSelect: () => toast({ description: "설정 클릭" }) },
    { type: "separator" as const },
    { type: "item" as const, label: "로그아웃", icon: <LogOut size={14} />, onSelect: () => toast({ description: "로그아웃" }) },
    { type: "item" as const, label: "삭제", icon: <Trash2 size={14} />, destructive: true, onSelect: () => toast({ variant: "negative", description: "삭제됨" }) },
  ];

  return (
    <Section title="DropdownMenu — 드롭다운 메뉴">
      <div className="flex flex-wrap gap-3">
        <DropdownMenu
          trigger={
            <Button variant="outline">
              <MoreHorizontal size={14} />&nbsp;더보기
            </Button>
          }
          items={menuItems}
          align="start"
        />
        <DropdownMenu
          trigger={
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
              style={{ color: "var(--color-muted-foreground)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-muted)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <MoreHorizontal size={18} />
            </button>
          }
          items={menuItems}
          align="end"
        />
      </div>
    </Section>
  );
}

export function FeedbackShowcase() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col gap-12">
        <AlertSection />
        <ToastSection />
        <ModalSection />
        <BottomSheetSection />
        <TooltipSection />
        <PopoverSection />
        <DropdownMenuSection />
      </div>
    </>
  );
}
