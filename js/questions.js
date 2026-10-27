/**
 * HEALTHQUIZBYOSEE - QUESTION BANK
 * Curated and clinically structured questions spanning 15 levels.
 * Each level contains:
 * - primary: main question
 * - alternate: backup question for "Switch Question / Rujuk Kasus" lifeline
 */

const QUESTION_BANK = {
  1: {
    prize: "Rp 100.000",
    safe: false,
    primary: {
      category: "Pola Hidup Sehat & Hidrasi",
      question: "Berapa liter konsumsi air putih harian yang dianjurkan oleh Kementerian Kesehatan RI untuk orang dewasa dengan aktivitas normal?",
      options: [
        "Kurang dari 500 mL per hari",
        "Sekitar 2 Liter (setara 8 gelas) per hari",
        "Minimal 10 Liter per hari",
        "Hanya saat merasa tenggorokan kering"
      ],
      answer: 1,
      explanation: "Kemenkes RI menganjurkan konsumsi air putih sekitar 2 liter atau setara 8 gelas berukuran 250 mL per hari untuk menjaga hidrasi seluler, fungsi ginjal, dan keseimbangan elektrolit tubuh.",
      pearl: "Dehidrasi ringan (1-2% defisit cairan) dapat menurunkan konsentrasi kognitif dan kinerja memori hingga 15%."
    },
    alternate: {
      category: "Fisiologi Dasar",
      question: "Berapa rentang frekuensi denyut nadi istirahat (resting heart rate) normal pada orang dewasa sehat?",
      options: [
        "20 - 40 denyut per menit",
        "60 - 100 denyut per menit",
        "120 - 160 denyut per menit",
        "180 - 220 denyut per menit"
      ],
      answer: 1,
      explanation: "Denyut jantung istirahat normal pada orang dewasa berkisar antara 60 hingga 100 detak per menit (bpm). Nilai di bawah 60 bpm disebut bradikardia, sedangkan di atas 100 bpm disebut takikardia.",
      pearl: "Atlet terlatih sering memiliki denyut nadi istirahat 40-50 bpm karena efisiensi volume sekuncup jantung yang sangat tinggi."
    }
  },
  2: {
    prize: "Rp 200.000",
    safe: false,
    primary: {
      category: "Biokimia & Nutrisi Klinis",
      question: "Di antara pilihan berikut, manakah kelompok vitamin yang tergolong LARUT DALAM LEMAK sehingga disimpan di jaringan adiposa dan hepar?",
      options: [
        "Vitamin B Kompleks dan Vitamin C",
        "Vitamin B1, B6, dan B12",
        "Vitamin A, D, E, dan K",
        "Vitamin C dan Vitamin P"
      ],
      answer: 2,
      explanation: "Vitamin ADEK larut dalam lemak dan diserap bersama lipid makanan, lalu disimpan dalam hepar dan jaringan lemak. Sebaliknya, Vitamin B dan C larut dalam air sehingga kelebihannya diekskresikan melalui urine.",
      pearl: "Karena disimpan dalam tubuh, konsumsi berlebih vitamin ADEK (terutama Vitamin A dan D) dapat berisiko menyebabkan hipervitaminosis/toksisitas."
    },
    alternate: {
      category: "Anatomi & Endokrinologi",
      question: "Organ tubuh manakah yang memiliki pulau-pulau Langerhans dan memproduksi hormon Insulin untuk mengendalikan kadar gula darah?",
      options: [
        "Kantung Empedu",
        "Pankreas",
        "Limpa (Spleen)",
        "Kelenjar Tiroid"
      ],
      answer: 1,
      explanation: "Pankreas memproduksi hormon insulin melalui sel beta di Pulau Langerhans. Insulin memfasilitasi masuknya glukosa dari peredaran darah ke dalam sel otot dan adiposa.",
      pearl: "Pada Diabetes Melitus Tipe 1 terjadi destruksi autoimun pada sel beta pankreas sehingga produksi insulin terhenti absolut."
    }
  },
  3: {
    prize: "Rp 300.000",
    safe: false,
    primary: {
      category: "Pertolongan Pertama (P3K)",
      question: "Tindakan pertolongan pertama yang paling benar dan tepat menurut protokol medis untuk menangani luka bakar ringan (derajat 1) akibat tersiram air panas adalah:",
      options: [
        "Mengoleskan pasta gigi (odol), kecap, atau mentega",
        "Mengalirkan air bersih mengalir bersuhu ruang selama 10–20 menit",
        "Menempelkan es batu langsung di atas luka bakar",
        "Memecahkan gelembung luka bakar dengan jarum jahit"
      ],
      answer: 1,
      explanation: "Pertolongan pertama luka bakar adalah mendinginkan area luka menggunakan air bersih mengalir bersuhu ruang (bukan air es) selama 10-20 menit untuk menghentikan kerusakan termal jaringan lebih dalam.",
      pearl: "Mengoleskan pasta gigi atau kecap justru memerangkap panas, merusak epitel baru, dan meningkatkan risiko infeksi bakteri sekunder."
    },
    alternate: {
      category: "Pertolongan Pertama Muskuloskeletal",
      question: "Dalam penanganan cedera terkilir (sprain) akut pada pergelangan kaki, manakah prinsip baku pertolongan pertama yang benar?",
      options: [
        "Langsung dipijat dan diurut sekuat tenaga",
        "Protokol R.I.C.E (Rest, Ice, Compression, Elevation)",
        "Diberikan kompres panas mendidih pada 1 jam pertama",
        "Dipaksa berjalan agar otot tidak kaku"
      ],
      answer: 1,
      explanation: "Metode baku cedera ligamen akut adalah RICE: Istirahatkan (Rest), kompres es 15-20 menit (Ice), balut tekan elastis (Compression), dan posisikan lebih tinggi dari jantung (Elevation) untuk meredam edema.",
      pearl: "Memijat cedera akut pada fase inflamasi awal (<48 jam) berisiko merobek pembuluh darah mikroskopis dan memperparah hematoma."
    }
  },
  4: {
    prize: "Rp 500.000",
    safe: false,
    primary: {
      category: "Fisiologi & Hematologi",
      question: "Komponen seluler darah yang mengandung protein hemoglobin dan bertugas mengangkut oksigen dari paru-paru ke seluruh jaringan tubuh adalah:",
      options: [
        "Leukosit (Sel darah putih)",
        "Trombosit (Keping darah)",
        "Eritrosit (Sel darah merah)",
        "Plasma darah"
      ],
      answer: 2,
      explanation: "Eritrosit berbentuk bikonkaf tanpa inti pada mamalia dan kaya akan molekul hemoglobin. Setiap molekul hemoglobin dapat mengikat hingga 4 molekul gas oksigen (O2).",
      pearl: "Masa hidup rata-rata eritrosit dalam sirkulasi manusia adalah sekitar 120 hari sebelum difagositosis oleh makrofag di limpa dan hepar."
    },
    alternate: {
      category: "Antropometri & Epidemiologi",
      question: "Menurut kriteria WHO untuk populasi Asia-Pasifik, rentang Indeks Massa Tubuh (IMT / BMI) yang tergolong 'Berat Badan Normal' adalah:",
      options: [
        "10.0 - 15.0 kg/m²",
        "18.5 - 22.9 kg/m²",
        "25.0 - 29.9 kg/m²",
        "35.0 - 40.0 kg/m²"
      ],
      answer: 1,
      explanation: "Kriteria Asia-Pasifik menetapkan IMT normal pada 18,5 - 22,9 kg/m². Batas kelebihan berat badan (overweight) dimulai pada 23,0 kg/m², dan obesitas pada ≥ 25,0 kg/m² karena risiko kardiovaskular terjadi pada IMT lebih rendah dibanding populasi Kaukasia.",
      pearl: "IMT dihitung dengan rumus: Berat Badan (kg) dibagi dengan Kuadrat Tinggi Badan (m²)."
    }
  },
  5: {
    prize: "Rp 1.000.000",
    safe: true,
    primary: {
      category: "Gerakan Masyarakat Cerdas Obat (GeMa CerMat)",
      question: "Kementerian Kesehatan RI dan Ikatan Apoteker Indonesia (IAI) mengampanyekan pedoman cerdas mengelola obat keluarga yang disingkat 'DAGUSIBU'. Apa kepanjangannya?",
      options: [
        "Daftar, Gunakan, Simpan, dan Buat",
        "Dapatkan, Gunakan, Simpan, dan Buang obat dengan benar",
        "Diskon, Antar, Garansi, dan Subsidi",
        "Dosis, Alergi, Gejala, dan Imunisasi"
      ],
      answer: 1,
      explanation: "DAGUSIBU adalah akronim resmi edukasi kefarmasian: Dapatkan obat di sarana resmi (Apotek/Faskes), Gunakan sesuai indikasi dan aturan pakai, Simpan pada wadah dan suhu yang tepat, serta Buang limbah obat rusak/kedaluwarsa secara benar.",
      pearl: "Membuang antibiotik utuh ke tanah atau selokan tanpa dirusak terlebih dahulu dapat mencemari lingkungan dan memicu seleksi bakteri resisten antibiotik."
    },
    alternate: {
      category: "Pemeriksaan Tanda Vital",
      question: "Berapa rentang nilai saturasi oksigen perifer (SpO2) normal yang diukur menggunakan alat pulse oximeter pada orang dewasa yang bernapas di udara ruangan?",
      options: [
        "50% - 65%",
        "70% - 80%",
        "95% - 100%",
        "Selalu wajib tepat 150%"
      ],
      answer: 2,
      explanation: "Saturasi oksigen perifer (SpO2) normal adalah 95% - 100%. Nilai di bawah 94% mengindikasikan hipoksia ringan hingga sedang yang memerlukan evaluasi klinis dan terapi oksigen.",
      pearl: "Kondisi 'Happy Hypoxia' pada sebagian pasien COVID-19 ditandai SpO2 turun drastis <90% namun pasien tidak merasa sesak napas secara subjektif."
    }
  },
  6: {
    prize: "Rp 2.000.000",
    safe: false,
    primary: {
      category: "Regulasi & Penggolongan Obat BPOM",
      question: "Simbol penandaan pada kemasan obat berupa LINGKARAN HIJAU dengan garis tepi berwarna hitam menandakan bahwa obat tersebut tergolong sebagai:",
      options: [
        "Obat Narkotika",
        "Obat Keras",
        "Obat Bebas (dapat dibeli tanpa resep dokter)",
        "Obat Bebas Terbatas"
      ],
      answer: 2,
      explanation: "Lingkaran hijau bergaris tepi hitam adalah logo resmi Obat Bebas, yaitu obat yang relatif aman digunakan secara mandiri untuk gejala ringan dan dapat dibeli bebas di apotek maupun toko obat berizin.",
      pearl: "Meski berstatus obat bebas, penggunaan parasetamol berlebih (>4 gram/hari pada dewasa) tetap berisiko fatal memicu nekrosis sel hati akut."
    },
    alternate: {
      category: "Regulasi & Penggolongan Obat BPOM",
      question: "Simbol penandaan LINGKARAN BIRU bergaris tepi hitam disertai salah satu dari tanda peringatan P.No.1 hingga P.No.6 pada kemasan merupakan ciri khas golongan:",
      options: [
        "Obat Bebas Terbatas",
        "Jamu Tradisional",
        "Obat Golongan Narkotika",
        "Fitofarmaka Terstandar"
      ],
      answer: 0,
      explanation: "Lingkaran biru bergaris tepi hitam menandakan Obat Bebas Terbatas (dahulu Daftar W). Obat ini sebenarnya tergolong obat keras namun dalam jumlah dan sediaan tertentu masih boleh dibeli tanpa resep dokter dan wajib disertai tanda peringatan (P.No.1 s/d P.No.6).",
      pearl: "Contoh P.No.1: 'Awas! Obat Keras. Bacalah aturan memakainya.' Contoh P.No.2: 'Awas! Obat Keras. Hanya untuk kumur, jangan ditelan.'"
    }
  },
  7: {
    prize: "Rp 4.000.000",
    safe: false,
    primary: {
      category: "Preskripsi & Terminologi Farmasi",
      question: "Dalam penulisan resep obat oleh dokter, singkatan bahasa Latin 'p.c.' (post coenam) memiliki arti petunjuk pemakaian:",
      options: [
        "Sebelum makan (kondisi lambung kosong)",
        "Sesudah makan",
        "Tepat saat suapan makanan pertama",
        "Hanya saat hendak tidur malam"
      ],
      answer: 1,
      explanation: "Singkatan 'p.c.' berasal dari frasa Latin 'post coenam' yang berarti 'sesudah makan'. Ini umum digunakan untuk obat yang berpotensi mengiritasi mukosa lambung (seperti NSAID) atau yang bioavailabilitasnya meningkat bersama makanan.",
      pearl: "Kebalikan dari p.c. adalah 'a.c.' (ante coenam) yang berarti 'sebelum makan' (sekitar 30-60 menit sebelum makan, misal Antasida, Omeprazol, atau Sukralfat)."
    },
    alternate: {
      category: "Preskripsi & Terminologi Farmasi",
      question: "Apakah arti dari singkatan Latin 'p.r.n.' (pro re nata) yang sering ditulis dokter pada signa resep obat pereda nyeri atau mual?",
      options: [
        "Harus dihabiskan tanpa henti",
        "Diminum bergantian setiap jam",
        "Bila perlu / jika keluhan muncul",
        "Diberikan secara suntikan intravena"
      ],
      answer: 2,
      explanation: "'p.r.n.' (pro re nata) berarti 'jika diperlukan' atau 'bila timbul gejala'. Contoh: Paracetamol 500mg tab S.p.r.n. tdd tab 1 (artinya diminum 3 kali sehari 1 tablet hanya bila demam/nyeri timbul).",
      pearl: "Resep antibiotik TIDAK BOLEH ditulis dengan aturan p.r.n. karena memerlukan kadar tunak obat (steady-state concentration) yang konsisten untuk membunuh bakteri."
    }
  },
  8: {
    prize: "Rp 8.000.000",
    safe: false,
    primary: {
      category: "Farmakoterapi & Resistensi Mikroba",
      question: "Mengapa pasien yang mendapatkan terapi antibiotik dari dokter diwajibkan menghabiskan seluruh obat sesuai durasi resep, meskipun gejala penyakitnya sudah sembuh?",
      options: [
        "Agar apotek tidak mengalami kerugian stok obat",
        "Mencegah bakteri mutasi menjadi kebal dan resisten (Antimicrobial Resistance)",
        "Karena antibiotik tidak dapat disimpan lebih dari 24 jam",
        "Supaya berat badan pasien tidak mengalami penurunan mendadak"
      ],
      answer: 1,
      explanation: "Menghentikan antibiotik sebelum durasi terapi tuntas akan menyisakan subpopulasi bakteri yang paling tangguh. Bakteri tersebut dapat bermutasi, mereplikasi diri, dan menghasilkan strain bakteri resisten (AMR) yang tidak mempan lagi dengan obat yang sama.",
      pearl: "WHO menetapkan Antimicrobial Resistance (AMR) sebagai salah satu dari 10 ancaman kesehatan masyarakat global paling berbahaya di dunia saat ini."
    },
    alternate: {
      category: "Interaksi Obat Klinis",
      question: "Mengapa konsumsi antibiotik golongan Tetrasiklin atau Siprofloksasin TIDAK boleh diminum bersamaan dengan susu atau suplemen antasida berkalsium/magnesium?",
      options: [
        "Memicu terbentuknya gas beracun sianida di lambung",
        "Kation divalen (Ca²⁺/Mg²⁺) membentuk senyawa khelat tak larut sehingga obat gagal diserap",
        "Membuat rasa antibiotik menjadi terlalu manis",
        "Menyebabkan destruksi enzim pepsin secara permanen"
      ],
      answer: 1,
      explanation: "Kation multivalen seperti Ca²⁺ (susu), Mg²⁺/Al³⁺ (antasida), dan Fe²⁺ (tablet tambah darah) berikatan secara khelasi dengan cincin tetrasiklin/fluorokuinolon, membentuk kompleks khelat tidak larut yang menurunkan absorpsi obat hingga >80%.",
      pearl: "Solusi klinisnya adalah memberi jeda waktu konsumsi minimal 2 jam sebelum atau 4 jam sesudah minum susu/antasida."
    }
  },
  9: {
    prize: "Rp 16.000.000",
    safe: false,
    primary: {
      category: "Penyakit Menular & Parasitologi",
      question: "Spesies nyamuk manakah yang menjadi vektor biologis utama penularan virus Dengue (penyebab Demam Berdarah Dengue / DBD) dan memiliki karakteristik belang hitam-putih serta aktif menggigit di pagi dan sore hari?",
      options: [
        "Anopheles sundaicus",
        "Culex quinquefasciatus",
        "Aedes aegypti",
        "Mansonia uniformis"
      ],
      answer: 2,
      explanation: "Aedes aegypti (dan Aedes albopictus) adalah vektor primer virus Dengue (famili Flaviviridae). Nyamuk betina memiliki pola aktivitas menggigit 'diurnal' (puncak pada pagi pukul 08.00-10.00 dan sore pukul 15.00-17.00).",
      pearl: "Anopheles adalah vektor malaria (aktif malam hari), sedangkan Culex adalah vektor utama filariasis (kaki gajah) dan Japanese Encephalitis."
    },
    alternate: {
      category: "Patologi Klinik & Diagnostik",
      question: "Berapa rentang kadar Glukosa Darah Puasa (GDP) normal pada orang dewasa yang tidak menderita diabetes melitus setelah berpuasa minimal 8 jam?",
      options: [
        "30 - 50 mg/dL",
        "70 - 99 mg/dL",
        "140 - 199 mg/dL",
        "200 - 300 mg/dL"
      ],
      answer: 1,
      explanation: "Berdasarkan konsensus PERKENI dan ADA: GDP normal adalah 70 - 99 mg/dL. Nilai 100 - 125 mg/dL dikategorikan sebagai Pre-diabetes (Glukosa Darah Puasa Terganggu), dan nilai ≥ 126 mg/dL terindikasi Diabetes Melitus.",
      pearl: "Tes HbA1c mencerminkan rerata kendali glikemik eritrosit selama 2-3 bulan terakhir dengan nilai normal < 5,7%."
    }
  },
  10: {
    prize: "Rp 32.000.000",
    safe: true,
    primary: {
      category: "Regulasi Obat Keras (Daftar G)",
      question: "Simbol LINGKARAN MERAH bergaris tepi hitam dengan HURUF 'K' berwarna hitam di bagian tengahnya merupakan penandaan wajib untuk golongan:",
      options: [
        "Obat Herbal Terstandar",
        "Obat Bebas Terbatas",
        "Obat Keras (hanya dapat diserahkan dengan Resep Dokter)",
        "Kosmetik Medis"
      ],
      answer: 2,
      explanation: "Logo lingkaran merah dengan huruf 'K' kapital adalah tanda Obat Keras (Gevaarlijk / Daftar G). Golongan ini mencakup seluruh antibiotik, hormon, obat suntik, psikotropika, dan obat kardiovaskular yang hanya sah diserahkan apoteker atas resep dokter.",
      pearl: "Penyerahan obat keras tanpa resep dokter di luar daftar DOWA (Daftar Obat Wajib Apotek) merupakan pelanggaran terhadap UU Kesehatan."
    },
    alternate: {
      category: "Farmakologi Kardiovaskular",
      question: "Golongan obat antihipertensi lini pertama manakah yang bekerja spesifik dengan menghambat enzim Angiotensin-Converting Enzyme (ACE) sehingga sintesis Angiotensin II terhambat?",
      options: [
        "Beta-Blocker (contoh: Propranolol, Bisoprolol)",
        "ACE Inhibitor (contoh: Kaptopril, Ramipril, Lisinopril)",
        "Calcium Channel Blocker (contoh: Amlodipin, Nifedipin)",
        "Diuretik Loop (contoh: Furosemid)"
      ],
      answer: 1,
      explanation: "ACE Inhibitor (berakhiran '-pril' seperti Kaptopril, Enalapril, Ramipril) menghambat konversi Angiotensin I menjadi Angiotensin II (suatu vasokonstriktor poten), menghasilkan vasodilatasi arteriol dan penurunan retensi aldosteron.",
      pearl: "Enzim ACE juga memecah bradikinin. Hambatan ACE menyebabkan akumulasi bradikinin di saluran napas, yang memicu efek samping khas berupa batuk kering pada 10-20% pasien."
    }
  },
  11: {
    prize: "Rp 64.000.000",
    safe: false,
    primary: {
      category: "Standar CDOB BPOM & Rantai Dingin",
      question: "Berdasarkan Peraturan BPOM tentang Cara Distribusi Obat yang Baik (CDOB), berapa rentang suhu penyimpanan wajib dalam Cold Chain (Rantai Dingin) untuk vaksin dan produk biologis termo-labil?",
      options: [
        "Suhu beku ekstrem di bawah -50°C",
        "Suhu dingin terkontrol antara +2°C hingga +8°C",
        "Suhu sejuk antara +15°C hingga +25°C",
        "Suhu kamar tropis antara +30°C hingga +37°C"
      ],
      answer: 1,
      explanation: "Standar CDOB BPOM menetapkan suhu Cold Chain untuk sebagian besar vaksin (seperti Hepatitis B, DPT, BCG, TT) dan insulin adalah +2°C s/d +8°C. Paparan suhu beku (<0°C) dapat merusak adjuvant aluminium pada vaksin toksoid.",
      pearl: "Vaksin polio oral (OPV) dapat disimpan pada suhu beku (-15°C s/d -25°C) di tingkat depo pusat, namun di tingkat faskes layanan disimpan pada +2°C s/d +8°C."
    },
    alternate: {
      category: "Manajemen Mutu Vaksin",
      question: "Indikator kimiawi berupa label stiker pada badan botol vaksin yang mengalami perubahan warna bertahap saat terpapar panas kumulatif disebut:",
      options: [
        "Vaccine Vial Monitor (VVM)",
        "Barcode Serial DataMatrix",
        "Hologram Segel Keamanan",
        "Radio Frequency Identification (RFID)"
      ],
      answer: 0,
      explanation: "VVM (Vaccine Vial Monitor) adalah label pemantau panas pada botol vaksin. Jika persegi bagian dalam lebih terang dari lingkaran luar (Kondisi A/B), vaksin dapat digunakan. Jika warna persegi sama atau lebih gelap dari lingkaran (Kondisi C/D), vaksin wajib dibuang.",
      pearl: "VVM tidak mendeteksi paparan beku, melainkan mencatat akumulasi paparan energi panas terhadap waktu secara ireversibel."
    }
  },
  12: {
    prize: "Rp 125.000.000",
    safe: false,
    primary: {
      category: "Toksikologi Klinis & Farmakoterapi Gawat Darurat",
      question: "Seorang pasien dilarikan ke IGD akibat overdosis akut parasetamol (asetaminofen) dosis toksik masif. Antidotum spesifik lini pertama yang bekerja meregenerasi cadangan glutation hepar adalah:",
      options: [
        "Nalokson Hidroklorida",
        "Atropin Sulfat",
        "N-Asetilsistein (NAC)",
        "Flumazenil"
      ],
      answer: 2,
      explanation: "Pada overdosis parasetamol, jalur konjugasi glukuronid jenuh sehingga metabolit reaktif hepatotoksik NAPQI melonjak dan menghabiskan glutation hepar. N-Asetilsistein (NAC) bekerja sebagai donor gugus sulfhidril (-SH) pengganti glutation untuk menginaktivasi NAPQI menjadi sistein/asam merkapturat nontoksik.",
      pearl: "Efektivitas maksimal NAC tercapai jika diberikan dalam jendela waktu emas (golden period) kurang dari 8 jam pasca konsumsi toksik."
    },
    alternate: {
      category: "Toksikologi & Antidotum Spesifik",
      question: "Antidotum antagonis kompetitif reseptor murni yang digunakan secara emergensi untuk membalikkan depresi pernapasan fatal akibat overdosis obat golongan Opioid (seperti Morfin/Fentanil) adalah:",
      options: [
        "Nalokson (Narcan)",
        "Fitomenadion (Vitamin K1)",
        "Pralidoksim (2-PAM)",
        "Deferoksamin"
      ],
      answer: 0,
      explanation: "Nalokson adalah antagonis murni reseptor opioid (mu, kappa, delta) dengan afinitas tinggi yang menggusur agonis opioid dari reseptor di sistem saraf pusat, memulihkan dorongan napas spontan dalam hitungan menit.",
      pearl: "Waktu paruh eliminasi nalokson (sekitar 30-90 menit) lebih singkat dibanding banyak jenis opioid, sehingga pasien harus terus dipantau terhadap risiko depresi napas berulang."
    }
  },
  13: {
    prize: "Rp 250.000.000",
    safe: false,
    primary: {
      category: "Farmakokinetika Klinis Fundamental",
      question: "Parameter farmakokinetika yang didefinisikan sebagai 'fraksi atau persentase dari dosis obat aktif yang mencapai sirkulasi sistemik dalam bentuk utuh' dilambangkan dengan simbol F adalah:",
      options: [
        "Volume Distribusi (Vd)",
        "Bioavailabilitas (Ketersediaan Hayati)",
        "Klirens Renal (Cl)",
        "Waktu Paruh Eliminasi (t1/2)"
      ],
      answer: 1,
      explanation: "Bioavailabilitas (F) adalah fraksi obat terabsorpsi utuh yang mencapai sirkulasi sistemik. Pemberian intravena (IV) memiliki bioavailabilitas absolut 100% (F = 1), sedangkan rute oral biasanya < 100% akibat absorpsi tidak sempurna dan metabolisme lintas pertama (first-pass metabolism) di hepar.",
      pearl: "Uji Ekivalensi / Bioekivalensi (BE) membandingkan kurva AUC (Area Under Curve) dan Cmax obat generik terhadap obat inovator untuk menjamin efikasi terapeutik yang setara."
    },
    alternate: {
      category: "Metabolisme Obat Enzimatik",
      question: "Isoenzim sitokrom P450 di mikrosom hepar manusia manakah yang paling dominan dan bertanggung jawab memetabolisme lebih dari 50% seluruh obat terapeutik yang beredar di pasaran?",
      options: [
        "CYP1A2",
        "CYP2D6",
        "CYP3A4",
        "CYP2E1"
      ],
      answer: 2,
      explanation: "CYP3A4 adalah enzim fase I metabolisme hepar dan usus yang paling melimpah, mengkatalisis metabolisme lebih dari separuh obat klinis (termasuk statin, benzodiazepin, imunosupresan, dan protease inhibitor).",
      pearl: "Jus buah Grapefruit mengandung furanokumarin yang merupakan inhibitor poten CYP3A4 usus, yang dapat meningkatkan kadar obat darah hingga taraf toksik berbahaya."
    }
  },
  14: {
    prize: "Rp 500.000.000",
    safe: false,
    primary: {
      category: "Farmakologi Spesialistik & Efek Toksik",
      question: "Penggunaan obat antihipertensi golongan ACE Inhibitor (seperti Kaptopril atau Ramipril) sering memicu efek samping batuk kering persisten yang refrakter. Mekanisme biokimia utama penyebab efek samping ini adalah:",
      options: [
        "Penumpukan asam laktat di alveolus paru-paru",
        "Akumulasi bradikinin dan substansi P akibat hambatan enzim kininase II oleh obat",
        "Spasme otot diafragma akibat deplesi ion kalsium",
        "Stimulasi berlebih reseptor beta-2 adrenergik bronkus"
      ],
      answer: 1,
      explanation: "Enzim Angiotensin-Converting Enzyme (ACE) identik dengan Kininase II, enzim yang secara fisiologis mendegradasi bradikinin dan substansi P. Penghambatan ACE menyebabkan akumulasi peptida pro-inflamasi ini di mukosa bronkus dan laring, menstimulasi serabut saraf sensorik C dan memicu batuk kering kronis.",
      pearl: "Jika pasien intoleran batuk kering akibat ACEI, terapi dialihkan ke golongan ARB (Angiotensin Receptor Blocker, misal Kandesartan/Losartan) yang tidak menghambat metabolisme bradikinin."
    },
    alternate: {
      category: "Farmakologi Kemoterapi Antimikroba",
      question: "Antibiotik bakterisidal golongan Aminoglikosida (seperti Gentamisin, Amikasin, dan Streptomisin) memiliki indeks terapi sempit dengan dua toksisitas organ utama yang harus dipantau ketat yaitu:",
      options: [
        "Kardiotoksisitas dan Hepatotoksisitas",
        "Ototoksisitas (kerusakan saraf pendengaran VIII) dan Nefrotoksisitas (nekrosis tubular ginjal)",
        "Osteoporosis dan Retinopati",
        "Pankreatitis dan Ulkus Peptikum"
      ],
      answer: 1,
      explanation: "Aminoglikosida terakumulasi secara selektif di sel rambut koklea/vestibular telinga dalam (ototoksisitas yang sering ireversibel) dan sel epitel tubulus proksimal ginjal (nefrotoksisitas yang umumnya reversibel). Oleh karena itu, Therapeutic Drug Monitoring (TDM) kadar puncak (peak) dan palung (trough) wajib dipantau.",
      pearl: "Kombinasi aminoglikosida dengan loop diuretic (seperti Furosemid) sangat dihindari karena meningkatkan risiko ototoksisitas secara sinergis eksponensial."
    }
  },
  15: {
    prize: "Rp 1.000.000.000",
    safe: true,
    primary: {
      category: "Onkologi Presisi & Produk Biologi / Biosimilar",
      question: "Obat antibodi monoklonal rekombinan humanized pertama di dunia yang disetujui FDA (1998) untuk terapi kanker payudara metastatik dengan ekspresi berlebih reseptor Human Epidermal Growth Factor Receptor 2 (HER2) adalah:",
      options: [
        "Rituksimab (MabThera)",
        "Bevasizumab (Avastin)",
        "Trastuzumab (Herceptin)",
        "Infliximab (Remicade)"
      ],
      answer: 2,
      explanation: "Trastuzumab (Herceptin) adalah antibodi monoklonal IgG1 humanized yang menarget domain ekstraseluler IV dari onkoprotein HER2/neu. Ikatan ini memblokir jalur sinyal proliferasi sel kanker HER2-positif dan memicu sitotoksisitas seluler dependen antibodi (ADCC). Penemuannya merevolusi terapi target onkologi presisi modern.",
      pearl: "Rituksimab menarget CD20 pada limfoma sel B; Bevasizumab menarget VEGF untuk anti-angiogenesis; sedangkan Infliximab menarget TNF-alfa pada penyakit autoimun."
    },
    alternate: {
      category: "Farmakokinetika Non-Linier Lanjut",
      question: "Dalam farmakokinetika lanjut, fenomena di mana laju eliminasi suatu obat berlangsung dengan kecepatan tetap (jumlah konstan obat per satuan waktu) tanpa bergantung pada konsentrasi plasma akibat saturasi enzim eliminasi disebut:",
      options: [
        "Kinetika Eliminasi Orde Pertama (Linear Kinetics)",
        "Kinetika Michaelis-Menten / Kinetika Orde Nol (Zero-Order Elimination)",
        "Difusi Pasif Sederhana",
        "Filtrasi Glomerulus Linier"
      ],
      answer: 1,
      explanation: "Pada Kinetika Orde Nol (Kinetika Non-Linier atau Michaelis-Menten yang tersaturasi), enzim pemetabolisme hepar telah jenuh kapasitas maksimumnya (Vmax). Akibatnya, jumlah obat yang dieliminasi konstan per satuan waktu (contoh: Etanol, Fenitoin pada dosis terapi tinggi, Salisilat toksik). Kenaikan dosis kecil dapat memicu lonjakan konsentrasi plasma yang tidak proporsional dan fatal.",
      pearl: "Sebagian besar obat terapeutik pada dosis lazim mengikuti Kinetika Orde Pertama, di mana laju eliminasi proporsional terhadap konsentrasi plasma (fraksi konstan per satuan waktu)."
    }
  }
};

// Lifeline Simulated Consultation Dialogues for Phone a Friend (Konsultasi Spesialis)
const SPECIALIST_DATABASE = {
  pharmacist: {
    name: "Apt. Budiarto, S.Farm. (Spesialis Farmasi Klinis & CDOB)",
    avatar: "👨‍⚕️",
    getAdvice: (level, correctLetter, questionText) => {
      if (level <= 5) {
        return `Halo rekan sejawat! Pertanyaan ini sangat mendasar dalam ilmu kesehatan masyarakat. Saya 100% yakin jawaban yang tepat adalah opsi (${correctLetter}).`;
      } else if (level <= 10) {
        return `Halo! Kasus farmakoterapi ini cukup umum di apotek dan rumah sakit. Berdasarkan regulasi dan pedoman klinis baku, saya 90% yakin jawabannya adalah (${correctLetter}).`;
      } else {
        return `Pertanyaan tingkat spesialis yang luar biasa menantang! Berdasarkan farmakokinetika lanjut dan standar regulasi CDOB BPOM, mekanisme farmakologisnya merujuk kuat ke opsi (${correctLetter}). Keyakinan saya sekitar 80%.`;
      }
    }
  },
  doctor: {
    name: "dr. Farhan, Sp.A (Spesialis Kedokteran Klinis)",
    avatar: "🩺",
    getAdvice: (level, correctLetter, questionText) => {
      if (level <= 5) {
        return `Halo! Dari sudut pandang fisiologi tubuh dasar, ini jelas sekali mengarah ke (${correctLetter}). Silakan dikunci jawabannya!`;
      } else if (level <= 10) {
        return `Halo, dari tinjauan tanda vital dan patofisiologi klinis, opsi (${correctLetter}) adalah diagnosis/tindakan yang paling rasional menurut pedoman medis. Keyakinan 85%.`;
      } else {
        return `Kasus gawat darurat dan terapi target tingkat tinggi! Jika kita evaluasi jalur biokimia dan toksikologinya, saya condong memilih (${correctLetter}). Namun pastikan pertimbangkan kembali ya!`;
      }
    }
  }
};
