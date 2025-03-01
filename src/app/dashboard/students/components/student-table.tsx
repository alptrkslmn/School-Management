"use client";

import Link from "next/link";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Student } from "../data/mock-data";

interface StudentTableProps {
  data: Student[];
}

export default function StudentTable({ data }: StudentTableProps) {
  return (
    <Card className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Ad Soyad</TableHead>
            <TableHead>Sınıf</TableHead>
            <TableHead className="hidden md:table-cell">Telefon</TableHead>
            <TableHead className="hidden md:table-cell">E-posta</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell className="hidden md:table-cell">{student.phone}</TableCell>
              <TableCell className="hidden md:table-cell">{student.email}</TableCell>
              <TableCell>
                <Badge variant={student.status === "active" ? "success" : "secondary"}>
                  {student.status === "active" ? "Aktif" : "Pasif"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/students/${student.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Görüntüle</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/students/${student.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Düzenle</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Sil</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}