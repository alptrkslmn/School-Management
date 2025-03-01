# Okul Yönetim Sistemi (OYS)

Bu proje, okullar için kapsamlı bir yönetim sistemidir. Öğrenci kayıtları, öğretmen yönetimi, sınıf programları, yurt yönetimi gibi bir eğitim kurumunun temel ihtiyaçlarını karşılamak üzere tasarlanmıştır.

## Teknolojiler

Proje aşağıdaki teknolojileri kullanmaktadır:

- **Next.js 14**: React tabanlı web framework
- **TypeScript**: Tip güvenli JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Prisma**: ORM ve veritabanı erişim katmanı
- **NextAuth.js**: Kimlik doğrulama ve oturum yönetimi
- **ShadcnUI**: Modern ve özelleştirilebilir UI bileşenleri

## Modül Durumu

Sistem modüllerinin geliştirilme durumu:

- [x] Kullanıcı Arayüzü ve Tema Desteği
- [x] Kimlik Doğrulama ve Oturum Yönetimi
- [x] Dashboard Ana Sayfa
- [x] Öğrenci Yönetimi
  - [x] Öğrenci Listeleme
  - [x] Öğrenci Profilleri
  - [ ] Öğrenci Ekleme/Düzenleme
  - [ ] Öğrenci Notları
- [ ] Öğretmen Yönetimi
  - [ ] Öğretmen Listeleme
  - [ ] Öğretmen Profilleri
  - [ ] Öğretmen Ekleme/Düzenleme
  - [ ] Ders Yükü ve Program
- [ ] Sınıf Yönetimi
  - [ ] Sınıf Listeleme
  - [ ] Sınıf Detayları
  - [ ] Sınıf Oluşturma/Düzenleme
  - [ ] Sınıf Öğrenci İlişkilendirme
- [ ] Program/Zaman Çizelgesi
  - [ ] Haftalık Ders Programı
  - [ ] Program Çakışma Kontrolü
  - [ ] Program Yazdırma
- [ ] Devam Takibi
  - [ ] Günlük Yoklama Kayıtları
  - [ ] Devamsızlık Raporları
  - [ ] Ebeveyn Bildirimleri
- [ ] Yurt Yönetimi
  - [ ] Oda Tahsisi
  - [ ] Yurt Demirbaş Takibi
  - [ ] Öğrenci Yurt İlişkilendirme
- [ ] Raporlama
  - [ ] Öğrenci Performans Raporları
  - [ ] Sınıf Başarı Analizleri
  - [ ] Devamsızlık İstatistikleri
- [ ] Analiz Araçları
  - [ ] Öğrenci Başarı Grafikleri
  - [ ] Okul Geneli İstatistikler
- [ ] Ayarlar
  - [ ] Sistem Ayarları
  - [ ] Kullanıcı Yönetimi
  - [ ] Rol ve İzinler

## Kurulum

### Gereksinimler

- Node.js 18.x veya üstü
- PostgreSQL veritabanı (opsiyonel, SQLite ile de çalışabilir)
- npm veya yarn paket yöneticisi

### Adımlar

1. Projeyi klonlayın:
   ```
   git clone https://github.com/alptrkslmn/School-Management.git
   cd okul-yonetim-sistemi
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   # veya
   yarn install
   ```

3. Ortam değişkenlerini ayarlayın:
   ```
   cp .env.example .env.local
   ```
   .env.local dosyasını düzenleyerek veritabanı bağlantı bilgilerinizi ve diğer gerekli ayarları yapın.

4. Veritabanını oluşturun:
   ```
   npx prisma generate
   npx prisma db push
   ```

5. Uygulamayı başlatın:
   ```
   npm run dev
   # veya
   yarn dev
   ```

6. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görebilirsiniz.

## Proje Yapısı

```
src/
├── app/             # Next.js App Router
│   ├── api/         # API rotaları
│   ├── dashboard/   # Dashboard sayfaları
│   ├── login/       # Giriş sayfası
│   └── ...
├── components/      # Yeniden kullanılabilir bileşenler
│   ├── layout/      # Layout bileşenleri
│   ├── ui/          # UI bileşenleri
│   └── ...
├── lib/             # Yardımcı fonksiyonlar ve kütüphaneler
├── prisma/         # Prisma şeması ve bağlantıları
└── types/          # TypeScript tipleri
```

## Kullanım

Sisteme giriş yaptıktan sonra, sol taraftaki menüden ilgili modüllere erişebilirsiniz. Dashboard sayfası, okul hakkında genel bilgileri ve özet istatistikleri gösterir.

### Kullanıcı Arayüzü Özellikleri

- **Responsive Design**: Mobil ve masaüstü cihazlarda sorunsuz çalışır
- **Koyu/Açık Tema**: Kullanıcı tercihlerine göre tema değiştirme imkanı
- **Duyarlı Menü**: Ekran boyutuna göre otomatik olarak uyarlanır
- **Bildirimler**: Sistem bildirimleri için bildirim merkezi

## Katkıda Bulunma

1. Bu repo'yu fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Proje Yöneticisi: [Ad Soyad](mailto:email@example.com)

---

© 2024 Okul Yönetim Sistemi. Tüm hakları saklıdır.