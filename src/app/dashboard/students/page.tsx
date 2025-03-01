"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Search, FileUp, FileDown, UserPlus, Filter } from "lucide-react";
import StudentTable from "./components/student-table";
import StudentStats from "./components/student-stats";
import Link from "next/link";
import { mockStudents } from "./data/mock-data";

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [gradeFilter, setGradeFilter] = useState("all");

  // Filtreleme fonksiyonu
  const filteredStudents = mockStudents.filter((student) => {
    // Search filter
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    
    // Grade filter
    const matchesGrade = gradeFilter === "all" || student.grade.includes(gradeFilter);
    
    return matchesSearch && matchesStatus && matchesGrade;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* Öğrenci sayfası içeriği */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Öğrenci ara..."
              className="pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" size="icon" title="Filtrele">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" title="Dışa Aktar">
            <FileDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" title="İçe Aktar">
            <FileUp className="h-4 w-4" />
          </Button>
        </div>
        <Button asChild>
          <Link href="/students/new">
            <UserPlus className="mr-2 h-4 w-4" />
            Öğrenci Ekle
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tüm Öğrenciler</TabsTrigger>
          <TabsTrigger value="active">Aktif</TabsTrigger>
          <TabsTrigger value="dormitory">Yurtlu</TabsTrigger>
          <TabsTrigger value="scholarship">Burslu</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <StudentStats />
          
          <Card>
            <CardHeader>
              <CardTitle>Öğrenci Kayıtları</CardTitle>
              <CardDescription>
                Öğrencilerin detayları ve durumlarının listesi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudentTable data={filteredStudents} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aktif Öğrenciler</CardTitle>
              <CardDescription>
                Derslere kaydı açık öğrencilerin listesi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudentTable 
                data={filteredStudents.filter((s) => s.status === "active")} 
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dormitory" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Yurtlu Öğrenciler</CardTitle>
              <CardDescription>
                Okul yurtlarında kalan öğrenciler.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudentTable 
                data={filteredStudents.filter((s) => s.dormitory)} 
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scholarship" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Burslu Öğrenciler</CardTitle>
              <CardDescription>
                Burs alan öğrencilerin listesi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudentTable 
                data={filteredStudents.filter((s) => s.scholarship)} 
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
