"use client";

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { studentStats } from "../data/mock-data";

export default function StudentStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Toplam Öğrenci</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{studentStats.total}</div>
          <p className="text-xs text-muted-foreground">Geçen aya göre +5.1%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Aktif Öğrenciler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{studentStats.active}</div>
          <p className="text-xs text-muted-foreground">Toplam öğrencilerin 98%'i</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Yurt Öğrencileri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{studentStats.dormitory}</div>
          <p className="text-xs text-muted-foreground">Toplam öğrencilerin 35%'i</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Burslu Öğrenciler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{studentStats.scholarship}</div>
          <p className="text-xs text-muted-foreground">Toplam öğrencilerin 20%'si</p>
        </CardContent>
      </Card>
    </div>
  );
}
