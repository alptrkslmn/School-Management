// Merkezi öğrenci veri kaynağı
// Bu dosyada tüm öğrenci verilerini tutuyoruz, diğer yerlerden buraya referans verilecek

export interface Student {
  id: number | string;
  name: string;
  grade?: string;
  phone?: string;
  email: string;
  status: "active" | "inactive" | "Active" | "Inactive" | "Suspended";
  dormitory: boolean;
  scholarship?: boolean;
  department?: string;
  year?: number;
  gpa?: number;
  registrationDate?: string;
}

// Basit öğrenci verileri (tablo için)
export const mockStudents: Student[] = [
  { id: 1, name: "Ahmet Yılmaz", grade: "10-A", phone: "05XX XXX XX XX", email: "ahmet@example.com", status: "active", dormitory: true, scholarship: false },
  { id: 2, name: "Ayşe Kaya", grade: "11-B", phone: "05XX XXX XX XX", email: "ayse@example.com", status: "active", dormitory: false, scholarship: true },
  { id: 3, name: "Mehmet Demir", grade: "9-C", phone: "05XX XXX XX XX", email: "mehmet@example.com", status: "inactive", dormitory: true, scholarship: false },
  { id: 4, name: "Fatma Çelik", grade: "12-A", phone: "05XX XXX XX XX", email: "fatma@example.com", status: "active", dormitory: false, scholarship: true },
  { id: 5, name: "Ali Öztürk", grade: "10-B", phone: "05XX XXX XX XX", email: "ali@example.com", status: "active", dormitory: true, scholarship: false },
  { id: 6, name: "Zeynep Aksoy", grade: "11-A", phone: "05XX XXX XX XX", email: "zeynep@example.com", status: "inactive", dormitory: false, scholarship: true },
  { id: 7, name: "Mustafa Şahin", grade: "9-A", phone: "05XX XXX XX XX", email: "mustafa@example.com", status: "active", dormitory: true, scholarship: false },
  { id: 8, name: "Elif Yıldız", grade: "12-C", phone: "05XX XXX XX XX", email: "elif@example.com", status: "active", dormitory: false, scholarship: true },
];

// Detaylı öğrenci verileri (profil bilgileri için)
export const detailedStudents: Student[] = [
  {
    id: "STU001",
    name: "Ayşe Yılmaz",
    email: "ayse.yilmaz@example.com",
    department: "Bilgisayar Mühendisliği",
    year: 2,
    gpa: 3.7,
    status: "Active",
    dormitory: true,
    scholarship: true,
    registrationDate: "2022-09-01"
  },
  {
    id: "STU002",
    name: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    department: "Elektrik-Elektronik Mühendisliği",
    year: 3,
    gpa: 3.2,
    status: "Active",
    dormitory: false,
    registrationDate: "2021-09-01"
  },
  {
    id: "STU003",
    name: "Zeynep Demir",
    email: "zeynep.demir@example.com",
    department: "İşletme",
    year: 4,
    gpa: 3.9,
    status: "Active",
    dormitory: true,
    scholarship: true,
    registrationDate: "2020-09-01"
  },
  {
    id: "STU004",
    name: "Ali Öztürk",
    email: "ali.ozturk@example.com",
    department: "Makine Mühendisliği",
    year: 1,
    gpa: 2.8,
    status: "Inactive",
    dormitory: false,
    registrationDate: "2023-09-01"
  },
  {
    id: "STU005",
    name: "Fatma Şahin",
    email: "fatma.sahin@example.com",
    department: "Tıp",
    year: 5,
    gpa: 3.5,
    status: "Active",
    dormitory: true,
    registrationDate: "2019-09-01"
  },
  {
    id: "STU006",
    name: "Ahmet Çelik",
    email: "ahmet.celik@example.com",
    department: "Hukuk",
    year: 2,
    gpa: 2.5,
    status: "Suspended",
    dormitory: false,
    registrationDate: "2022-09-01"
  }
];

// Öğrenci istatistikleri 
export const studentStats = {
  total: 1231,
  active: 1180,
  dormitory: 432,
  scholarship: 245
};
