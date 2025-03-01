"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Calendar, 
  Check, 
  Clock, 
  LineChart, 
  Users, 
  X 
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Öğrenci</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,231</div>
            <p className="text-xs text-muted-foreground">Geçen aya göre +5.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Öğretmen</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">Geçen aya göre +2.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Devam Oranı</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
            <p className="text-xs text-muted-foreground">Geçen haftaya göre +1.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yaklaşan Etkinlikler</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Önümüzdeki 14 gün</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="attendance">Devam Durumu</TabsTrigger>
          <TabsTrigger value="exams">Sınavlar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Öğrenci Kayıtları</CardTitle>
                <CardDescription>Bu akademik yıl için aylık kayıt eğilimleri</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <LineChart className="h-20 w-20 text-muted-foreground" />
                <p className="text-sm text-muted-foreground ml-4">Burada grafik görselleştirmesi yer alacak</p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Son Aktiviteler</CardTitle>
                <CardDescription>Son sistem aktiviteleri</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Yeni öğrenci kaydı</p>
                        <p className="text-xs text-muted-foreground">{i * 2} saat önce</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Cinsiyet Dağılımı</CardTitle>
                <CardDescription>Öğrenci cinsiyet istatistikleri</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <BarChart className="h-16 w-16 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Sınıf Dağılımı</CardTitle>
                <CardDescription>Sınıf seviyesine göre öğrenciler</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <BarChart className="h-16 w-16 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Bugünkü Devamsızlıklar</CardTitle>
                <CardDescription>Bugün devamsız olarak işaretlenen öğrenciler</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-destructive" />
                        <span className="text-sm">Öğrenci Adı {i}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Sınıf {9 + i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Devam Durumu Özeti</CardTitle>
              <CardDescription>Tüm sınıflar için haftalık devam durumu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground" />
                <p className="text-sm text-muted-foreground ml-4">Burada devam durumu grafiği yer alacak</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exams">
          <Card>
            <CardHeader>
              <CardTitle>Sınav Performansı</CardTitle>
              <CardDescription>Ders ve sınıf bazında ortalama puanlar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <LineChart className="h-24 w-24 text-muted-foreground" />
                <p className="text-sm text-muted-foreground ml-4">Burada sınav performans grafiği yer alacak</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
