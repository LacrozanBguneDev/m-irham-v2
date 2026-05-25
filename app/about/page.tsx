export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Tentang Saya</h1>
          <p className="text-xl text-muted-foreground">
            Sekilas perjalanan dan alasan dibangunnya platform digital ini.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-base leading-7 text-muted-foreground">
            Halo, selamat datang di <strong>Studio Irham</strong>. Ini adalah sebuah ruang digital 
            yang saya dedikasikan secara khusus untuk dokumentasi pribadi dan profesional.
            Fokus utamanya adalah kesederhanaan, kecepatan, dan kenyamanan membaca tanpa distraksi.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 tracking-tight">Visi & Tujuan</h2>
          <p className="text-base leading-7 text-muted-foreground">
            Platform ini dibangun menggunakan arsitektur modern yang mengedepankan performa 
            dan keamanan. Tujuannya adalah untuk mendokumentasikan proses belajar, mencatat hal-hal penting 
            dalam artikel, membentuk album galeri yang abadi, serta menyimpan hasil karya atau portofolio.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 tracking-tight">Hubungi Saya</h2>
          <p className="text-base leading-7 text-muted-foreground">
            Jika ada pertanyaan atau peluang kolaborasi, Anda dapat mengeksplorasi lebih jauh 
            melalui halaman <i>Kontak</i> yang akan datang. Terima kasih telah meluangkan 
            waktu untuk berkunjung.
          </p>
        </div>
      </div>
    </div>
  );
}
