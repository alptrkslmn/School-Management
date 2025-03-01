"use client";

import { useState, useEffect } from "react";
import { Bell, User, Search, Menu, X, HelpCircle, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const pathname = usePathname();
  const [title, setTitle] = useState("Ana Sayfa");

  // Sayfaya göre başlık belirleme
  useEffect(() => {
    const pathSegment = pathname.split("/")[1];
    
    const pageTitles: Record<string, string> = {
      "dashboard": "Ana Sayfa",
      "students": "Öğrenciler",
      "teachers": "Öğretmenler",
      "classes": "Sınıflar",
      "dormitories": "Yurtlar",
      "administration": "İdari İşler",
      "settings": "Ayarlar"
    };
    
    if (pathSegment && pageTitles[pathSegment]) {
      setTitle(pageTitles[pathSegment]);
    } else {
      setTitle("Ana Sayfa");
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="lg:hidden"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-lg font-bold hidden md:inline-flex">Okul Yönetim Sistemi</span>
            <span className="text-lg font-bold md:hidden">OYS</span>
          </Link>
          <div className="hidden md:flex px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
            {new Date().toLocaleDateString('tr-TR')}
          </div>
        </div>

        <div className="hidden sm:flex items-center max-w-md w-full relative mx-8">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Ara..." 
            className="pl-10 w-full bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary/30"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-4">
                <p className="text-sm font-medium">Bildirimler</p>
                <Button variant="ghost" size="sm" className="text-xs">Tümünü okundu işaretle</Button>
              </div>
              <DropdownMenuItem className="p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Yeni Öğrenci Kaydı</p>
                  <p className="text-xs text-muted-foreground">Yeni bir öğrenci kaydedildi: Emre Yılmaz</p>
                  <p className="text-xs text-muted-foreground">2 saat önce</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Devam Durumu Uyarısı</p>
                  <p className="text-xs text-muted-foreground">5 öğrenci bugün yoklama listesinde devamsız olarak işaretlendi</p>
                  <p className="text-xs text-muted-foreground">5 saat önce</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center text-center text-primary">
                Tüm bildirimleri gör
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <ModeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-8 flex items-center gap-2 px-2 md:pl-2 md:pr-4"
              >
                <Avatar className="h-8 w-8 border-2 border-primary/20">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden md:block truncate max-w-[100px]">
                  Kullanıcı
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium">Ahmet Yılmaz</p>
                  <p className="text-xs text-muted-foreground">ahmet@okul.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Ayarlar</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-red-600 cursor-pointer">
                <Link href="/api/auth/signout" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Çıkış Yap</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
