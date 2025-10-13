// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, BookOpen, Heart, User, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-sky-700 mb-2">Darsy</h1>
        <p className="text-lg text-sky-600 italic">
          Fun and Easy Quran Learning for Kids
        </p>
      </div>

      <div className="mt-12 grid gap-8">
        {/* Tentang Kami */}
        <Card className="shadow-md border-sky-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-700">
              <BookOpen className="w-5 h-5" />
              Siapa Kami
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 leading-relaxed">
            <p>
              <strong>Darsy</strong> adalah bimbel online yang berfokus pada
              pembelajaran{" "}
              <strong>Al-Qur’an secara menyenangkan dan mudah</strong> untuk
              anak-anak. Kami percaya bahwa mengenalkan Al-Qur’an sejak dini
              tidak harus kaku — justru bisa dilakukan dengan{" "}
              <strong>cara interaktif, ceria, dan penuh makna</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Misi Kami */}
        <Card className="shadow-md border-sky-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-700">
              <Heart className="w-5 h-5" />
              Misi Kami
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>📖 Metode pembelajaran yang menyenangkan dan ramah anak</li>
              <li>👩‍🏫 Guru berpengalaman dan sabar dalam mengajar anak</li>
              <li>
                💻 Kelas fleksibel — bisa belajar kapan saja dan di mana saja
              </li>
              <li>
                🧠 Pendekatan personal sesuai kemampuan dan karakter setiap anak
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Mengapa Memilih Kami */}
        <Card className="shadow-md border-sky-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-700">
              <User className="w-5 h-5" />
              Mengapa Memilih Darsy?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>Dashboard belajar interaktif untuk memantau progres anak</li>
              <li>Jadwal fleksibel sesuai rutinitas keluarga</li>
              <li>Guru bersertifikat & berpengalaman</li>
              <li>Pendekatan islami yang modern dengan dukungan teknologi</li>
            </ul>
          </CardContent>
        </Card>

        {/* Kontak dan Alamat */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md border-sky-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-700">
                <MapPin className="w-5 h-5" />
                Alamat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Jalan Merpati, Pekanbaru</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-sky-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-700">
                <Phone className="w-5 h-5" />
                Kontak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/6281991671932"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline"
              >
                +62 819-9167-1932
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <Clock className="inline w-4 h-4 mr-1" />
        “Darsy — Teman Ceria Anak Belajar Qur’an”
      </footer>
    </div>
  );
}
