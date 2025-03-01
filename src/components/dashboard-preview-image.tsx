"use client";

import Image from "next/image";

export default function DashboardPreviewImage() {
  return (
    <Image 
      src="/dashboard-preview.png" 
      alt="Dashboard önizleme" 
      width={700}
      height={400} 
      className="rounded-lg"
      onError={(e) => {
        e.currentTarget.src = "https://placehold.co/700x400?text=Okul+Yönetim+Sistemi";
      }}
    />
  );
}