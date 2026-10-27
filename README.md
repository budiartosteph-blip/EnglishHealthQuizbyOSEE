# HealthQuizbyOSEE 🩺💰
> **Interactive Medical & Pharmacy Trivia Game by OSEE**  
> Direkayasa balik (*reverse engineered*) dan diadaptasi dari mekanik game show legendaris *Who Wants to Be a Millionaire* (CrazyGames) ke dalam domain **Ilmu Kesehatan, Farmasi, Kedokteran, dan Regulasi BPOM/CDOB**.

![HealthQuizbyOSEE Banner](https://img.shields.io/badge/HealthQuizbyOSEE-Farmasi%20%26%20Kesehatan-blue?style=for-the-badge&logo=medscape)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20WebAudioAPI-amber?style=for-the-badge)
![Status](https://img.shields.io/badge/Offline-100%25%20Zero%20Dependencies-emerald?style=for-the-badge)

---

## 🌟 Fitur Utama & Core Game Mechanics

Game ini dirancang dengan standar atmosfer studio kuis televisi yang imersif dan ketegangan intelektual tingkat tinggi:

### 1. 🪜 15 Tangga Soal Berjenjang (Rp 100.000 s/d Rp 1.000.000.000)
Tingkat kesulitan soal disusun secara ilmiah oleh kurikulum kefarmasian dan medis:
- **Level 1 – 5 (Taraf Dasar - Edukasi Masyarakat & Pola Hidup Sehat)**: Hidrasi, nutrisi, vitamin larut lemak/air, pertolongan pertama luka bakar/terkilir (R.I.C.E), tanda vital, dan gerakan DAGUSIBU Kemenkes.
- **Level 6 – 10 (Taraf Menengah - Farmasi Praktis & Penyakit Tropis)**: Penggolongan logo obat BPOM (Hijau, Biru P.No.1-6, Merah K), terminologi resep Latin (*a.c., p.c., p.r.n.*), bahaya resistensi antibiotik (AMR), interaksi khelasi kalsium/antasida, serta patofisiologi DBD/Diabetes.
- **Level 11 – 15 (Taraf Mahir - Farmakologi Klinis & Regulasi CDOB/BPOM)**: Standar Rantai Dingin (*Cold Chain 2°C s/d 8°C*) PerBPOM CDOB, antidotum spesifik (N-Asetilsistein, Nalokson), bioavailabilitas & enzim CYP3A4, mekanisme batuk kering ACEI bradikinin, hingga antibodi monoklonal HER2 (Trastuzumab) dan kinetika eliminasi orde nol.

### 2. 🛡️ 2 Checkpoint Titik Aman (Safe Havens)
- **Level 5**: Mengunci hadiah aman **Rp 1.000.000**.
- **Level 10**: Mengunci hadiah aman **Rp 32.000.000**.
- Jika pemain gagal di level tinggi, hadiah tidak hangus total, melainkan pemain berhak membawa pulang hadiah aman pada checkpoint terakhir yang telah dilalui.

### 3. 🩺 4 Alat Bantuan Medis Tematik (Health Lifelines)
- 🧪 **50:50 (Uji Lab Eliminasi)**: Sistem otomatis membuang 2 jawaban salah (*distractor*).
- 📊 **Konsensus Nakes (Audience Poll)**: Memunculkan modal dialog grafik batang dinamis persentase voting 100 rekan tenaga kesehatan.
- 🩺 **Telepon Spesialis (Expert Consultation)**: Menghubungi praktisi ahli (**Apt. Budiarto, S.Farm.** atau **dr. Farhan, Sp.A**) yang memberikan analisis rasional dan persentase keyakinan klinis.
- 🔄 **Rujuk Kasus (Switch Question)**: Mengganti soal sulit dengan studi kasus cadangan pada tingkat hadiah yang sama.

### 4. 🔊 Synthetic Web Audio Engine (100% Offline Tanpa MP3)
Dilengkapi synthesizer audio murni berbasis browser **Web Audio API**:
- *Tension Drone* (nada bass atmosfer studio yang berdenyut).
- *Heartbeat Timer Tick* (detak waktu yang semakin cepat di 10 detik terakhir).
- *Answer Lock Suspense* (nada kunci jawaban).
- *Correct Fanfare* & *Wrong Buzzer*.

### 5. 💡 Clinical Pearl & Educational Feedback
Setiap kali menjawab benar atau salah, game menyajikan kartu penjelasan ilmiah (*Clinical Pearl*) yang memperkaya wawasan medis pemain secara interaktif.

---

## 📁 Struktur Berkas Proyek

```text
E:\Belajar GitHub\health-millionaire-quiz\
│
├── index.html          # Antarmuka studio kuis responsif (Tailwind CSS)
├── css/
│   └── style.css       # Efek visual lozenge button, lighting studio, pulse ladder
├── js/
│   ├── audio.js        # Engine Web Audio API (efek suara sintetis 100% offline)
│   ├── questions.js    # Bank soal 15 level (Primary & Alternate Switch Cases)
│   └── game.js         # State controller, timer 45s, lifelines, scoring logic
└── README.md           # Dokumentasi teknis & panduan bermain
```

---

## 🚀 Cara Menjalankan Game

1. **Cara Langsung (1-Klik)**:
   - Cukup buka file `index.html` dengan peramban apa pun (Google Chrome, Microsoft Edge, Firefox, Safari).
   - Klik **"MULAI TANTANGAN SEKARANG"**.

2. **Deploy ke GitHub Pages**:
   - Inisialisasi git dan push ke repository GitHub:
     ```bash
     git init
     git add .
     git commit -m "feat: release HealthQuizbyOSEE interactive trivia game"
     git branch -M main
     git remote add origin https://github.com/USERNAME/health-millionaire-quiz.git
     git push -u origin main
     ```
   - Masuk ke menu **Settings** -> **Pages** -> pilih branch `main` -> Save.
   - Game dapat langsung diakses publik secara online!

---

*Dikembangkan untuk edukasi dan pengayaan wawasan kefarmasian & kesehatan berkelanjutan.*
