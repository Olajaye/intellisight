import DashboardLayout from "@/components/dashboardLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Transaction | Dashboard ',
  description: 'Track your peer-to-peer transactions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed w-[100vw]">
      <DashboardLayout>
        <div >
          {children} 
        </div>
      </DashboardLayout>
    </div>
  );
}
