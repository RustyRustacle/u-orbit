import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Path — U-ORBIT Web3 Academy",
  description:
    "Master Web3 development from blockchain fundamentals to advanced DeFi — a structured curriculum designed by blockchain educators.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
