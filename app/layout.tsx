import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mokona-ui — Toss-style React UI Library",
  description: "토스 스타일 React 컴포넌트 라이브러리 쇼케이스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
