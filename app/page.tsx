import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-5xl">
      <section className="space-y-6 text-center md:text-left flex flex-col md:items-start items-center">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          Selamat Datang
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Dokumentasi Digital <br className="hidden md:inline" /> & Perjalanan Belajar
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
          Selamat datang di Studio Irham. Platform sederhana untuk berbagi pemikiran melalui artikel, memamerkan album, dan menyimpan dokumentasi karya digital secara profesional.
        </p>
        <div className="flex gap-4 pt-4">
          <Link 
            href="/artikel" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Baca Artikel <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/karya"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Lihat Karya
          </Link>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-3 p-6 border rounded-xl bg-card">
          <h3 className="font-semibold text-xl tracking-tight">Artikel & Tulisan</h3>
          <p className="text-sm text-muted-foreground flex-1">
            Berbagi wawasan seputar teknologi, web development, dan pengalaman sehari-hari.
          </p>
        </div>
        <div className="flex flex-col space-y-3 p-6 border rounded-xl bg-card">
          <h3 className="font-semibold text-xl tracking-tight">Album Galeri</h3>
          <p className="text-sm text-muted-foreground flex-1">
            Kumpulan memori visual dan foto-foto dokumentasi dari berbagai peristiwa penting.
          </p>
        </div>
        <div className="flex flex-col space-y-3 p-6 border rounded-xl bg-card">
          <h3 className="font-semibold text-xl tracking-tight">Penyimpanan Karya</h3>
          <p className="text-sm text-muted-foreground flex-1">
            Showcase hasil proyek, eksperimen kode, dan produk digital yang telah dirilis.
          </p>
        </div>
      </section>
    </div>
  );
}
