"use client";

import { useState, useEffect } from "react";
import { Bell, User, Search, Menu, X, HelpCircle, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { useSession } from "next-auth/react";
import { cn } from "@/app/lib/utils";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface NavbarProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export function Navbar({ onMenuToggle, isSidebarOpen }: NavbarProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [title, setTitle] = useState("Ana Sayfa");

  useEffect(() => {
    const pathSegment = pathname.split("/")[1];
    
    const pageTitles: Record<string, string> = {
      "dashboard": "Ana Sayfa",
      "students": "Öğrenciler",
      "teachers": "Öğretmenler",
      "dormitories": "Yurtlar",
      "administration": "İdari İşler",
      "institutions": "Kurumlar",
      "settings": "Ayarlar"
    };
    
    if (pathSegment && pageTitles[pathSegment]) {
      setTitle(pageTitles[pathSegment]);
    } else {
      setTitle("Ana Sayfa");
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMenuToggle}
            className="md:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="hidden md:flex px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
              {new Date().toLocaleDateString('tr-TR')}
            </div>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center max-w-md w-full relative mx-8">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Ara..." 
            className="pl-10 w-full bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary/30"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white animate-pulse">3</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium">Yeni öğrenci kaydı</span>
                    <span className="text-xs text-muted-foreground">Ahmet Yılmaz adlı öğrenci sisteme kaydedildi</span>
                    <span className="text-xs text-muted-foreground">2 saat önce</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium">Yurt yerleşimi güncellendi</span>
                    <span className="text-xs text-muted-foreground">A Blok 102 nolu oda boşaltıldı</span>
                    <span className="text-xs text-muted-foreground">3 saat önce</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium">Sistem güncellemesi</span>
                    <span className="text-xs text-muted-foreground">Sistem bakım sonrası güncellenmiştir</span>
                    <span className="text-xs text-muted-foreground">1 gün önce</span>
                  </div>
                </DropdownMenuItem>
              </div>
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
                  <AvatarImage 
                    src={session?.user?.image || undefined} 
                    alt={session?.user?.name || "Kullanıcı"}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {session?.user?.name?.charAt(0) || <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden md:block truncate max-w-[100px]">
                  {session?.user?.name || "Kullanıcı"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium">{session?.user?.name || "Kullanıcı"}</p>
                  <p className="text-xs text-muted-foreground">{session?.user?.email || "kullanici@ornek.com"}</p>
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
