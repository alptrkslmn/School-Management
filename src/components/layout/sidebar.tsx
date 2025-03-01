"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  FileSpreadsheet,
  Settings,
  School,
  Clock,
  PieChart,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
}

// Linkleri /dashboard ile başlatarak dashboard layout içinde kalmasını sağlıyoruz
// Öğrenciler için yolu direkt /students olarak güncelliyoruz (tekrar önlemek için)
const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Öğrenciler", href: "/students", icon: Users }, // Ana öğrenciler sayfasına yönlendirme
  { name: "Öğretmenler", href: "/dashboard/teachers", icon: GraduationCap },
  { name: "Sınıflar", href: "/dashboard/classes", icon: BookOpen },
  { name: "Program", href: "/dashboard/schedule", icon: Calendar },
  { name: "Devam Durumu", href: "/dashboard/attendance", icon: Clock },
  { name: "Raporlar", href: "/dashboard/reports", icon: FileSpreadsheet },
  { name: "Analiz", href: "/dashboard/analytics", icon: PieChart },
  { name: "Yurt", href: "/dashboard/dormitory", icon: School },
  { name: "Ayarlar", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-background transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6 lg:px-8">
        <Link href="/dashboard" className="flex items-center gap-2">
          <School className="h-6 w-6" />
          <span className="text-lg font-bold">Okul YS</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)] p-4">
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Button
                key={item.name}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start sidebar-item",
                  isActive && "sidebar-item-active"
                )}
              >
                <Link href={item.href}>
                  <item.icon className="mr-3 h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}
