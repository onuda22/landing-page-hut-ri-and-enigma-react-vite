# Landing Page - Hari Kemerdekaan Indonesia ke-79 dan Ulang Tahun Perusahaan Enigma ke-5

## Deskripsi Proyek
Proyek ini adalah sebuah landing page yang dibangun menggunakan React dan Tailwind CSS, dengan bantuan plugin Flowbite untuk komponen UI. Tema dari landing page ini adalah perayaan Hari Kemerdekaan Indonesia yang ke-79 dan ulang tahun perusahaan Enigma yang ke-5. Halaman ini dirancang untuk menyampaikan semangat nasionalisme serta penghargaan terhadap perjalanan 5 tahun perusahaan Enigma.

## Pembagian Tugas
- **Tommy**:
  - **Meet Our Team Enigma Page**: Halaman yang memperkenalkan anggota tim Enigma.
  - **Tema Besar HUT RI Page**: Desain halaman dengan tema utama Hari Kemerdekaan Indonesia.

- **Amirul**:
  - **Ketua**: Mengawasi proyek dan memastikan semua bagian selesai tepat waktu.
  - **Merge**: Menggabungkan seluruh komponen halaman.
  - **Enigma Page**: Berkontribusi dalam pembuatan halaman Enigma.
  - **Event**: Mengelola component event terkait.

- **Randy**:
  - **Gallery HUT RI Page**: Membuat galeri gambar untuk perayaan Hari Kemerdekaan.
  - **Pembuatan UI HUT RI**: Merancang halaman UI HUT RI.

- **Irsyad**:
  - **Follow Enigma Page**: Halaman yang mendorong pengunjung mengikuti Enigma di media sosial.
  - **Design Enigma Page**: Desain keseluruhan halaman Enigma.

- **Oki**:
  - **HUT RI Landing Page**: Membangun landing page utama bertema Hari Kemerdekaan Indonesia.
  - **Deploy**: Deployment landing page ke dalam vercel.



## Fitur Utama
- **Responsive Design**: Tampilan halaman yang dapat menyesuaikan dengan berbagai ukuran layar, baik di desktop, tablet, maupun ponsel.
- **Komponen UI dari Flowbite**: Menggunakan plugin Flowbite untuk mempermudah pembuatan komponen seperti navbar, hero section, dan card.
- **Tema Hari Kemerdekaan**: Penggunaan warna-warna khas kemerdekaan seperti merah dan putih, serta elemen dekoratif seperti bendera dan simbol kemerdekaan lainnya.
- **Perayaan Ulang Tahun**: Bagian khusus yang menampilkan perjalanan 5 tahun perusahaan Enigma, lengkap dengan pencapaian dan ucapan selamat.

## Teknologi yang Digunakan
- **React**: Library JavaScript untuk membangun user interface yang interaktif.
- **Tailwind CSS**: Framework CSS untuk styling yang mempermudah pembuatan layout dan desain yang konsisten.
- **Flowbite**: Plugin Tailwind CSS untuk komponen UI yang siap pakai dan dapat disesuaikan.

## Instalasi
Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1. Clone repository:
    ```bash
    git clone <repository-url>
    cd <nama-folder-proyek>
    ```

2. Instal dependensi:
    ```bash
    npx create-react-app <nama-proyek>
    npm install -D tailwindcss postcss autoprefixer
    
    ```
3. Konfigurasi Tailwind dengan menambahkan path file React ke tailwind.config.js:
    
    ```javascript
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```

3. Buka file src/index.css dan tambahkan baris berikut:
    ```javascript
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. Jalankan aplikasi:
    ```bash
    npm run dev
    ```

4. Buka browser dan akses:
    ```
    http://localhost:5173/ (disesuaikan dengan link yang dikeluarkan npm run dev)
    ```

## Cara Penggunaan
- **Navigasi**: Menggunakan navbar di bagian atas halaman untuk berpindah antar bagian seperti Home, About, dan Contact.
- **Hero Section**: Bagian pertama yang menampilkan pesan selamat datang dan tema perayaan.
- **Galeri**: Menampilkan koleksi gambar terkait perayaan hari kemerdekaan dan perjalanan Enigma.

## Kontribusi
Kontribusi sangat dihargai! Silakan fork repository ini, buat branch dengan fitur yang ingin ditambahkan, dan kirimkan pull request.

1. Fork repository ini.
2. Buat branch baru:
    ```bash
    git checkout -b fitur-baru
    ```
3. Commit perubahan Anda:
    ```bash
    git commit -m "Menambahkan fitur baru"
    ```
4. Push ke branch tersebut:
    ```bash
    git push origin fitur-baru
    ```
5. Buat pull request di GitHub.


