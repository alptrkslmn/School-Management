"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Sayfaya göre başlık ve açıklama belirleme
  const getPageTitle = () => {
    if (pathname?.includes('/students')) return 'Öğrenci Yönetimi';
    if (pathname?.includes('/teachers')) return 'Öğretmen Yönetimi';
    if (pathname?.includes('/classes')) return 'Sınıf Yönetimi';
    if (pathname === '/dashboard') return 'Gösterge Paneli';
    return 'Okul Yönetim Sistemi';
  };

  const getPageDescription = () => {
    if (pathname?.includes('/students')) return 'Öğrenci kayıtları, devam durumu ve performans yönetimi.';
    if (pathname?.includes('/teachers')) return 'Öğretmen profilleri, programları ve görevlendirmeleri.';
    if (pathname?.includes('/classes')) return 'Sınıf programları, ödevler ve kayıtlar.';
    if (pathname === '/dashboard') return 'Okul Yönetim Sistemine hoş geldiniz.';
    return '';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen flex-col">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} />
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">
                {getPageTitle()}
              </h1>
              <p className="text-muted-foreground">
                {getPageDescription()}
              </p>
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
