"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // İmport yolunu düzelttik
import Image from "next/image";
import { redirect } from 'next/navigation';

export default function Home() {
  // Ana sayfayı ziyaret edenleri dashboard'a yönlendir
  redirect('/dashboard');
  return null;
}
