/**
 * Asisten Belajar Offline - Basis Data Modul Pembelajaran
 * Berisi korpus materi lengkap, glosarium, dan bank soal untuk 10 modul pembelajaran.
 */

const DEFAULT_MODULES = [
  {
    id: "modul_02_biologi",
    code: "MOD-BIO-11-02",
    title: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme",
    shortTitle: "Modul_02_Biologi",
    category: "Biologi",
    fileName: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme.pdf",
    totalPages: 36,
    summary: "Membahas anatomi saluran pencernaan manusia, proses pencernaan mekanik dan kimiawi, fungsi enzim pencernaan (HCl, pepsin, renin, lipase, tripsin, amilase), organ aksesori (hati, kantung empedu, pankreas), penyerapan nutrisi di usus halus, dan gangguan saluran cerna.",
    sections: [
      {
        bab: 1,
        title: "Saluran dan Organ Pencernaan",
        page: 4,
        content: "Sistem pencernaan manusia terdiri dari saluran cerna utama: mulut, kerongkongan (esofagus), lambung (gaster), usus halus (intestinum tenue), usus besar (kolon), dan anus. Proses pencernaan berlangsung secara mekanik (penghalusan makanan oleh gigi dan gerakan peristaltik) serta kimiawi (pemecahan molekul kompleks oleh enzim hidrolisis)."
      },
      {
        bab: 2,
        title: "Pencernaan di Rongga Mulut",
        page: 8,
        content: "Di dalam rongga mulut terjadi pencernaan mekanik oleh gigi dan lidah, serta pencernaan kimiawi oleh getah saliva yang mengandung enzim ptialin (amilase saliva). Enzim ptialin berfungsi menghidrolisis polisakarida (amilum) menjadi maltosa dan dekstrin pada kondisi pH netral sekitar 6,8 - 7,0."
      },
      {
        bab: 3,
        title: "Pencernaan di Lambung dan Enzim Lambung",
        page: 14,
        content: "Asam klorida (HCl) diproduksi sel parietal lambung. Fungsinya: (1) mengaktifkan pepsinogen menjadi pepsin, (2) membunuh bakteri patogen, (3) menciptakan pH asam untuk kerja enzim. Pepsin sendiri berfungsi memecah protein menjadi polipeptida melalui hidrolisis ikatan peptida. Selaput mukosa lambung juga memproduksi enzim renin yang berfungsi mengendapkan kasein dari susu, serta mukus pelindung dinding lambung dari korosi asam lambung."
      },
      {
        bab: 4,
        title: "Pencernaan di Usus Halus dan Sekresi Pankreas",
        page: 20,
        content: "Usus halus terbagi menjadi tiga segmen: duodenum (usus 12 jari), jejunum (usus kosong), dan ileum (usus penyerapan). Pada duodenum terdapat muara saluran dari pankreas (duktus pankreatikus) dan kantung empedu. Pankreas menghasilkan getah pankreas kaya enzim yang meliputi amilase (memecah amilum jadi disakarida), tripsin/kimotripsin (memecah polipeptida jadi peptida sederhana), dan lipase pankreas (menghidrolisis trigliserida jadi asam lemak dan gliserol). Empedu dari hati berfungsi mengemulsi lemak agar mempermudah kerja enzim lipase."
      },
      {
        bab: 5,
        title: "Usus Besar dan Gangguan Sistem Pencernaan",
        page: 28,
        content: "Usus besar (kolon) berfungsi menyerap air dan elektrolit serta membusukkan sisa makanan melalui bantuan bakteri simbiotik Escherichia coli yang juga mensintesis vitamin K dan B12. Gangguan umum meliputi: gastritis (iritasi atau peradangan dinding lambung), konstipasi/sembelit (penyerapan air berlebihan di kolon sehingga feses kering dan keras), dan diare (iritasi dinding usus sehingga penyerapan air terganggu)."
      }
    ],
    qaBank: [
      {
        keywords: ["asam klorida", "hcl", "pepsin", "fungsi asam klorida", "fungsi hcl"],
        answer: "Asam klorida (HCl) diproduksi sel parietal lambung. Fungsinya: (1) mengaktifkan pepsinogen menjadi pepsin, (2) membunuh bakteri patogen, (3) menciptakan pH asam untuk kerja enzim. Pepsin sendiri berfungsi memecah protein menjadi polipeptida melalui hidrolisis ikatan peptida.",
        source: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme - Bab 3, Hal. 14"
      },
      {
        keywords: ["renin", "kasein", "perbedaan renin", "fungsi renin"],
        answer: "Enzim renin dihasilkan di lambung yang berfungsi khusus mengendapkan kasein (protein susu) menjadi parakasein dengan bantuan ion kalsium. Berbeda dengan pepsin yang memecah rantai protein secara luas menjadi polipeptida, renin bertindak sebagai penggumpal protein susu agar tidak lekas lewat lambung.",
        source: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme - Bab 3, Hal. 14"
      },
      {
        keywords: ["pankreas", "lipase", "amilase", "tripsin", "duodenum"],
        answer: "Organ yang memproduksi enzim amilase, tripsin, dan lipase untuk pencernaan di usus halus (duodenum) adalah Pankreas. Enzim-enzim ini dialirkan melalui duktus pankreatikus bersama ion bikarbonat untuk menetralkan asam lambung di duodenum.",
        source: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme - Bab 4, Hal. 20"
      },
      {
        keywords: ["ptialin", "saliva", "mulut", "amilum"],
        answer: "Enzim ptialin (amilase saliva) diproduksi oleh kelenjar ludah di rongga mulut. Fungsinya merombak amilum (karbohidrat kompleks) menjadi molekul maltosa (disakarida) dan glukosa pada rentang pH 6,5 hingga 7,0.",
        source: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme - Bab 2, Hal. 8"
      },
      {
        keywords: ["empedu", "hati", "lemak", "emulsi"],
        answer: "Cairan empedu diproduksi oleh organ hati (hepar) dan ditampung di dalam kantung empedu (vesica fellea). Empedu tidak mengandung enzim pencernaan, melainkan garam-garam empedu yang bertugas mengemulsi lemak menjadi tetesan kecil agar dapat dihidrolisis efektif oleh lipase.",
        source: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme - Bab 4, Hal. 20"
      }
    ],
    quizQuestions: [
      {
        id: "bio_q1",
        question: "Apakah fungsi utama Asam Klorida (HCl) di dalam organ lambung manusia?",
        options: [
          "Mengemulsi lemak menjadi butiran halus",
          "Mengubah protein menjadi asam amino bebas secara langsung",
          "Membunuh mikroorganisme patogen dan mengaktifkan pepsinogen menjadi pepsin",
          "Menyerap glukosa ke dalam pembuluh darah"
        ],
        correctIndex: 2, // C
        explanation: "HCl lambung bersifat sangat asam (pH 1-2). Keasaman ini mematikan bakteri pada makanan serta memicu aktivasi zimogen pepsinogen menjadi enzim pepsin aktif."
      },
      {
        id: "bio_q2",
        question: "Enzim yang berperan mengendapkan kasein (protein susu) di dalam lambung adalah...",
        options: [
          "Pepsin",
          "Renin",
          "Ptialin",
          "Tripsin"
        ],
        correctIndex: 1, // B. Renin
        explanation: "Enzim renin khusus mengendapkan kasein dari susu agar tertahan lebih lama di lambung untuk dicerna oleh pepsin."
      },
      {
        id: "bio_q3",
        question: "Organ manakah yang menghasilkan enzim lipase, amilase, dan tripsin untuk pencernaan di usus halus?",
        options: [
          "Hati (hepar)",
          "Pankreas",
          "Lambung (gaster)",
          "Usus besar (kolon)"
        ],
        correctIndex: 1, // B. Pankreas
        explanation: "Pankreas mengekskresikan getah pankreas yang mengandung enzim amilase pankreas (pemecah amilum), tripsin (pemecah protein), dan lipase pankreas (pemecah emulsi lemak) yang bermuara di usus dua belas jari (duodenum)."
      },
      {
        id: "bio_q4",
        question: "Pencernaan kimiawi karbohidrat pertama kali berlangsung di organ rongga mulut dengan bantuan enzim...",
        options: [
          "Ptialin (amilase saliva)",
          "Lipase lingual",
          "Pepsin",
          "Peptidase"
        ],
        correctIndex: 0, // A. Ptialin
        explanation: "Kelenjar saliva mengeluarkan enzim ptialin untuk memecah amilum menjadi maltosa secara kimiawi sejak makanan dikunyah di mulut."
      },
      {
        id: "bio_q5",
        question: "Bagian usus halus yang berfungsi utama sebagai area absorpsi (penyerapan) sari makanan ke peredaran darah adalah...",
        options: [
          "Duodenum (usus 12 jari)",
          "Jejunum (usus kosong)",
          "Ileum (usus penyerapan)",
          "Sekum (usus buntu)"
        ],
        correctIndex: 2, // C. Ileum
        explanation: "Ileum memiliki dinding yang kaya akan vili (jonjot usus) dan mikrovili untuk memperluas permukaan bidang penyerapan nutrisi."
      }
    ]
  },
  {
    id: "modul_01_sejarah",
    code: "MOD-SEJ-11-01",
    title: "Modul_01_Sejarah_Kemerdekaan_Indonesia",
    shortTitle: "Modul_01_Sejarah",
    category: "Sejarah",
    fileName: "Modul_01_Sejarah_Kemerdekaan_Indonesia.pdf",
    totalPages: 31,
    summary: "Menguraikan kronologi peristiwa menjelang proklamasi kemerdekaan Republik Indonesia: penyerahan Jepang tanpa syarat 14 Agustus 1945, ketegangan golongan muda dan tua, penculikan ke Rengasdengklok 16 Agustus 1945, perumusan naskah di rumah Laksamana Maeda, hingga pembacaan teks 17 Agustus 1945.",
    sections: [
      {
        bab: 1,
        title: "Latar Belakang Kekalahan Jepang",
        page: 3,
        content: "Pada tanggal 14 Agustus 1945, Jepang secara resmi menyerah tanpa syarat kepada Sekutu setelah kota Hiroshima (6 Agustus) dan Nagasaki (9 Agustus) dijatuhi bom atom oleh Amerika Serikat. Berita penyerahan Jepang ini didengar oleh para tokoh pemuda Indonesia melalui siaran radio luar negeri (BBC London), memicu inisiatif proklamasi segera."
      },
      {
        bab: 2,
        title: "Peristiwa Rengasdengklok",
        page: 7,
        content: "Terjadi ketegangan perbedaan pendapat antara golongan tua (Ir. Soekarno dan Drs. Moh. Hatta) dengan golongan muda (Chaerul Saleh, Wikana, Sukarni, dan Darwis). Golongan muda mendesak proklamasi dilakukan tanpa campur tangan PPKI yang dicap bentukan Jepang. Pada dini hari 16 Agustus 1945, pemuda mengamankan Soekarno dan Hatta ke Rengasdengklok, Karawang, demi menjauhkan mereka dari intimidasi militer Jepang."
      },
      {
        bab: 3,
        title: "Perumusan Naskah Proklamasi di Rumah Maeda",
        page: 13,
        content: "Melalui perantara Mr. Ahmad Soebardjo, Soekarno dan Hatta dipulangkan ke Jakarta pada malam 16 Agustus 1945. Perumusan naskah dilakukan di kediaman Laksamana Tadashi Maeda di Jalan Imam Bonjol No. 1 Jakarta. Teks ditulis tangan oleh Ir. Soekarno dan disetujui atas usulan Sukarni agar ditandatangani Soekarno-Hatta atas nama bangsa Indonesia. Naskah kemudian diketik oleh Sayuti Melik dengan penyesuaian ejaan."
      },
      {
        bab: 4,
        title: "Pembacaan Naskah Proklamasi 17 Agustus 1945",
        page: 22,
        content: "Tepat pada hari Jumat, 17 Agustus 1945 pukul 10.00 WIB di kediaman Soekarno, Jalan Pegangsaan Timur No. 56 Jakarta, naskah Proklamasi Kemerdekaan dibacakan. Bendera pusaka Merah Putih yang dijahit tangan oleh Ibu Fatmawati dikibarkan oleh Latief Hendraningrat dan Suhud Sastro Kusumo diiringi lagu Indonesia Raya."
      }
    ],
    qaBank: [
      {
        keywords: ["rengasdengklok", "16 agustus", "penculikan soekarno", "golongan muda"],
        answer: "Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945 dini hari ketika golongan pemuda (Chaerul Saleh, Sukarni, Wikana) membawa Soekarno dan Hatta ke Rengasdengklok, Karawang. Tujuannya mengamankan kedua pemimpin dari pengaruh dan tekanan balatentara Jepang serta mendesak proklamasi kemerdekaan segera diproklamasikan.",
        source: "Modul_01_Sejarah_Kemerdekaan_Indonesia - Bab 2, Hal. 7"
      },
      {
        keywords: ["sayuti melik", "pengetik naskah", "teks proklamasi diketik"],
        answer: "Naskah proklamasi diketik oleh Sayuti Melik. Dalam proses pengetikan dari tulisan tangan Soekarno, Sayuti Melik melakukan beberapa perubahan seperti kata 'tempoh' diubah menjadi 'tempo', 'wakil-wakil bangsa Indonesia' menjadi 'atas nama bangsa Indonesia', dan penulisan tahun '05' (tahun Showa).",
        source: "Modul_01_Sejarah_Kemerdekaan_Indonesia - Bab 3, Hal. 13"
      },
      {
        keywords: ["laksamana maeda", "rumah perumusan", "imam bonjol"],
        answer: "Perumusan naskah proklamasi berlangsung di rumah perwira Angkatan Laut Jepang Laksamana Tadashi Maeda di Jalan Imam Bonjol No. 1, Jakarta, karena rumah dinas perwira AL dianggap memiliki imunitas diplomatik dan aman dari ancaman polisi militer Angkatan Darat Jepang (Kenpeitai).",
        source: "Modul_01_Sejarah_Kemerdekaan_Indonesia - Bab 3, Hal. 13"
      },
      {
        keywords: ["fatmawati", "bendera merah putih", "jahit bendera"],
        answer: "Bendera Merah Putih pertama (Bendera Pusaka) yang dikibarkan saat proklamasi 17 Agustus 1945 dijahit langsung oleh Ibu Fatmawati, istri Bung Karno, menggunakan kain katun merah dan putih.",
        source: "Modul_01_Sejarah_Kemerdekaan_Indonesia - Bab 4, Hal. 22"
      }
    ],
    quizQuestions: [
      {
        id: "sej_q1",
        question: "Siapakah tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah naskah tulisan tangan disepakati?",
        options: [
          "Ahmad Soebardjo",
          "Sayuti Melik",
          "Chaerul Saleh",
          "Sukarni Kartodiwirjo"
        ],
        correctIndex: 1, // B. Sayuti Melik
        explanation: "Sayuti Melik dipercaya mengetik naskah proklamasi yang disusun oleh Soekarno, Hatta, dan Ahmad Soebardjo di rumah Laksamana Maeda."
      },
      {
        id: "sej_q2",
        question: "Alasan utama golongan pemuda membawa Soekarno dan Hatta ke Rengasdengklok pada 16 Agustus 1945 adalah...",
        options: [
          "Menyembunyikan kedua tokoh dari buronan tentara Sekutu",
          "Menjauhkan Soekarno dan Hatta dari pengaruh serta intimidasi tentara Jepang",
          "Membentuk susunan kabinet pertama Republik Indonesia",
          "Mengadakan rapat umum bersama ribuan warga Karawang"
        ],
        correctIndex: 1, // B
        explanation: "Tujuan pemuda membawa kedua pemimpin ke Rengasdengklok adalah agar mereka tidak terpengaruh janji kemerdekaan oleh pihak Jepang dan siap memproklamasikan kemerdekaan atas kekuatan sendiri."
      },
      {
        id: "sej_q3",
        question: "Di manakah lokasi pembacaan naskah Proklamasi Kemerdekaan pada tanggal 17 Agustus 1945?",
        options: [
          "Lapangan Ikada Jakarta",
          "Rumah Laksamana Tadashi Maeda",
          "Jalan Pegangsaan Timur No. 56 Jakarta",
          "Gedung Volksraad Pejambon"
        ],
        correctIndex: 2, // C
        explanation: "Proklamasi dibacakan di kediaman Soekarno di Jl. Pegangsaan Timur No. 56 Jakarta demi menghindari bentrokan senjata dengan tentara Jepang yang berjaga di Lapangan Ikada."
      },
      {
        id: "sej_q4",
        question: "Tokoh pejuang dari golongan tua yang menjadi mediator penjemputan Soekarno-Hatta dari Rengasdengklok ke Jakarta adalah...",
        options: [
          "Mr. Ahmad Soebardjo",
          "Dr. K.R.T. Radjiman Wedyodiningrat",
          "Sutan Sjahrir",
          "Mohammad Yamin"
        ],
        correctIndex: 0, // A. Ahmad Soebardjo
        explanation: "Mr. Ahmad Soebardjo menjamin dengan nyawanya bahwa proklamasi akan dilaksanakan paling lambat 17 Agustus pukul 12.00 WIB, sehingga pemuda mengizinkan Soekarno-Hatta kembali ke Jakarta."
      },
      {
        id: "sej_q5",
        question: "Berita resmi menyerahnya Jepang tanpa syarat kepada Sekutu pertama kali diketahui pemuda Indonesia dari siaran radio...",
        options: [
          "Radio Hoso Kyoku",
          "Radio Rimba Raya",
          "Radio BBC London",
          "Radio Australia"
        ],
        correctIndex: 2, // C. Radio BBC
        explanation: "Sutan Sjahrir dan para pemuda mendengarkan siaran radio luar negeri BBC London yang menyiarkan pidato Kaisar Hirohito mengenai penyerahan Jepang tanpa syarat pada 14 Agustus 1945."
      }
    ]
  },
  {
    id: "modul_03_fisika",
    code: "MOD-FIS-11-03",
    title: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton",
    shortTitle: "Modul_03_Fisika",
    category: "Fisika",
    fileName: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton.pdf",
    totalPages: 31,
    summary: "Mengulas konsep hukum dinamika gerak klasik Sir Isaac Newton: Hukum I (Inersia / Kelembaman), Hukum II (Percepatan gaya massa F = m.a), dan Hukum III (Aksi - Reaksi), serta penerapannya pada bidang miring, gaya gesek statis/kinetis, dan sistem katrol.",
    sections: [
      {
        bab: 1,
        title: "Hukum I Newton (Inersia / Kelembaman)",
        page: 4,
        content: "Hukum I Newton menyatakan bahwa setiap benda akan terus berada dalam keadaan diam atau bergerak lurus beraturan dengan laju tetap, kecuali jika ada gaya luar total (resultan gaya) yang memaksanya mengubah keadaan tersebut. Rumus matematis: ΣF = 0. Sifat benda untuk mempertahankan keadaan geraknya disebut inersia atau kelembaman. Contoh: penumpang mobil terdorong ke depan saat kendaraan direm mendadak."
      },
      {
        bab: 2,
        title: "Hukum II Newton (Dinamika Gerak)",
        page: 10,
        content: "Hukum II Newton menyatakan bahwa laju perubahan momentum berbanding lurus dengan gaya neto yang bekerja padanya. Dalam kerangka massa konstan: percepatan yang dihasilkan berbanding lurus dengan resultan gaya dan berbanding terbalik dengan massa benda. Rumus: ΣF = m · a (F dalam Newton, m dalam kg, a dalam m/s²). Jika balok 5 kg ditarik gaya 20 N di lantai licin, maka percepatannya a = F / m = 20 / 5 = 4 m/s²."
      },
      {
        bab: 3,
        title: "Hukum III Newton (Aksi - Reaksi)",
        page: 18,
        content: "Hukum III Newton menyatakan bila suatu benda memberikan gaya pada benda kedua (gaya aksi), benda kedua akan memberikan gaya yang sama besar namun berlawanan arah pada benda pertama (gaya reaksi). Rumus: F_aksi = - F_reaksi. Karakteristik pasangan aksi-reaksi: besarnya sama, arahnya berlawanan, bekerja pada dua benda yang berbeda, dan terjadi secara serempak. Contoh: semburan gas panas roket ke bawah memicu gaya dorong ke atas."
      }
    ],
    qaBank: [
      {
        keywords: ["hukum i newton", "hukum kelembaman", "inersia", "sigma f 0"],
        answer: "Hukum I Newton (Hukum Kelembaman/Inersia) menyatakan bahwa jika resultan gaya yang bekerja pada suatu benda sama dengan nol (ΣF = 0), maka benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan akan tetap bergerak dengan kecepatan konstan. Contohnya tubuh penumpang terdorong ke depan saat bus direm mendadak.",
        source: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton - Bab 1, Hal. 4"
      },
      {
        keywords: ["hukum ii newton", "rumus f m a", "percepatan gaya massa"],
        answer: "Hukum II Newton menyatakan bahwa percepatan benda berbanding lurus dengan resultan gaya total yang bekerja padanya dan berbanding terbalik dengan massa benda tersebut. Rumusnya: ΣF = m × a (dengan satuan Gaya dalam Newton, massa dalam kg, dan percepatan dalam m/s²).",
        source: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton - Bab 2, Hal. 10"
      },
      {
        keywords: ["hukum iii newton", "aksi reaksi", "f aksi f reaksi"],
        answer: "Hukum III Newton menyatakan gaya aksi dan reaksi: bila benda A memberi gaya pada benda B, maka benda B memberi gaya balik yang sama besar dan berlawanan arah pada benda A (F_aksi = -F_reaksi). Keduanya bekerja pada dua objek yang berbeda dan terjadi secara bersamaan.",
        source: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton - Bab 3, Hal. 18"
      }
    ],
    quizQuestions: [
      {
        id: "fis_q1",
        question: "Sebuah balok bermassa 4 kg berada di atas lantai licin ditarik dengan gaya horizontal konstan sebesar 12 Newton. Percepatan yang dialami balok tersebut adalah...",
        options: [
          "2 m/s²",
          "3 m/s²",
          "48 m/s²",
          "8 m/s²"
        ],
        correctIndex: 1, // B. 3 m/s2
        explanation: "Berdasarkan Hukum II Newton: a = F / m = 12 N / 4 kg = 3 m/s²."
      },
      {
        id: "fis_q2",
        question: "Kecenderungan alami suatu benda untuk mempertahankan keadaan diam atau gerak lurus beraturannya disebut sifat...",
        options: [
          "Elastisitas",
          "Momentum",
          "Kelembaman (Inersia)",
          "Gravitasi"
        ],
        correctIndex: 2, // C
        explanation: "Inersia atau kelembaman adalah ukuran ketahanan benda terhadap perubahan keadaan geraknya, dirumuskan dalam Hukum I Newton."
      },
      {
        id: "fis_q3",
        question: "Manakah yang merupakan syarat mutlak pasangan gaya aksi dan reaksi menurut Hukum III Newton?",
        options: [
          "Bekerja pada benda yang sama dan searah",
          "Besarnya berbeda tergantung kecepatan benda",
          "Bekerja pada dua benda berbeda, berlawanan arah, dan besarnya sama",
          "Terjadi dengan selisih waktu tertentu"
        ],
        correctIndex: 2, // C
        explanation: "Gaya aksi dan reaksi selalu bekerja pada dua benda yang berbeda, sama besar nilainya, dan memiliki garis kerja yang berlawanan arah."
      },
      {
        id: "fis_q4",
        question: "Saat elevator bergerak naik dengan percepatan konstan 'a', berat semu yang dirasakan orang di dalam lift diukur timbangan adalah...",
        options: [
          "N = m (g + a)",
          "N = m (g - a)",
          "N = m · g",
          "N = 0"
        ],
        correctIndex: 0, // A
        explanation: "Dengan ΣF = m · a, gaya normal timbangan N - mg = ma, sehingga N = m(g + a), menyebabkan tubuh terasa lebih berat."
      },
      {
        id: "fis_q5",
        question: "Jika resultan gaya yang bekerja pada benda bernilai nol (ΣF = 0), maka benda tersebut...",
        options: [
          "Pasti dalam keadaan berhenti diam",
          "Pasti sedang mengalami percepatan",
          "Diam atau bergerak lurus dengan kecepatan konstan",
          "Mengalami gerak melingkar beraturan"
        ],
        correctIndex: 2, // C
        explanation: "Kondisi ΣF = 0 mencakup dua kemungkinan setimbang: statis (diam) atau dinamis (GLB dengan kelajuan dan arah konstan)."
      }
    ]
  },
  {
    id: "modul_04_kimia",
    code: "MOD-KIM-11-04",
    title: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi",
    shortTitle: "Modul_04_Kimia",
    category: "Kimia",
    fileName: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi.pdf",
    totalPages: 36,
    summary: "Termodinamika kimia dan kinetika reaksi: perbedaan reaksi eksoterm (ΔH < 0) vs endoterm (ΔH > 0), kalorimeter bom, Hukum Hess, energi ikatan rata-rata, teori tumbukan efektif, energi aktivasi (Arrhenius), dan faktor konsentrasi, luas permukaan, suhu, serta katalisator.",
    sections: [
      {
        bab: 1,
        title: "Sistem dan Lingkungan: Reaksi Eksoterm vs Endoterm",
        page: 4,
        content: "Termokimia mempelajari perubahan energi kalor dalam reaksi kimia. Reaksi eksoterm adalah reaksi yang melepaskan kalor dari sistem ke lingkungan sehingga entalpi sistem berkurang (ΔH < 0) dan suhu lingkungan naik. Reaksi endoterm adalah reaksi yang menyerap kalor dari lingkungan ke sistem sehingga entalpi bertambah (ΔH > 0) dan suhu lingkungan turun."
      },
      {
        bab: 2,
        title: "Perubahan Entalpi Standar dan Hukum Hess",
        page: 13,
        content: "Entalpi pembentukan standar (ΔHf°), penguraian standar (ΔHd°), dan pembakaran standar (ΔHc°). Hukum Hess menyatakan bahwa perubahan entalpi suatu reaksi hanya bergantung pada keadaan awal dan keadaan akhir reaktan dan produk, tidak bergantung pada tahapan atau jalannya mekanisme reaksi."
      },
      {
        bab: 3,
        title: "Teori Tumbukan dan Laju Reaksi",
        page: 25,
        content: "Menurut teori tumbukan, reaksi kimia hanya terjadi jika molekul reaktan bertumbukan dengan orientasi yang tepat dan memiliki energi kinetik yang melampaui Energi Aktivasi (Ea). Laju reaksi dipengaruhi oleh: (1) konsentrasi reaktan, (2) luas permukaan bidang sentuh, (3) suhu larutan, dan (4) katalisator yang menurunkan energi aktivasi reaksi tanpa ikut terkonsumsi permanen."
      }
    ],
    qaBank: [
      {
        keywords: ["eksoterm", "endoterm", "perbedaan eksoterm", "delta h"],
        answer: "Reaksi eksoterm melepaskan kalor ke lingkungan dengan nilai perubahan entalpi bernilai negatif (ΔH < 0) dan menyebabkan suhu lingkungan naik. Reaksi endoterm menyerap kalor dari lingkungan dengan nilai entalpi positif (ΔH > 0) sehingga menyebabkan suhu lingkungan turun.",
        source: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi - Bab 1, Hal. 4"
      },
      {
        keywords: ["hukum hess", "siklus termokimia", "entalpi hess"],
        answer: "Hukum Hess menyatakan bahwa total perubahan entalpi dalam suatu reaksi kimia adalah konstan, terlepas dari apakah reaksi berlangsung dalam satu langkah atau melalui serangkaian tahapan bertingkat. Yang menentukan hanyalah keadaan awal pereaksi dan kondisi akhir hasil reaksi.",
        source: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi - Bab 4, Hal. 13"
      },
      {
        keywords: ["katalis", "katalisator", "energi aktivasi", "laju reaksi"],
        answer: "Katalisator adalah zat yang dapat mempercepat laju reaksi kimia dengan cara menyediakan mekanisme alternatif berenergi aktivasi (Ea) lebih rendah. Di akhir reaksi kimia, katalisator akan terbentuk kembali tanpa mengalami perubahan kimia permanen.",
        source: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi - Bab 7, Hal. 25"
      }
    ],
    quizQuestions: [
      {
        id: "kim_q1",
        question: "Ciri khas dari reaksi kimia eksoterm yang membedakannya dari endoterm adalah...",
        options: [
          "Nilai perubahan entalpi ΔH > 0 dan menyerap kalor dari lingkungan",
          "Nilai perubahan entalpi ΔH < 0 dan melepaskan kalor ke lingkungan",
          "Tidak terjadi perpindahan energi antara sistem dan lingkungan",
          "Suhu sistem selalu menurun tajam"
        ],
        correctIndex: 1, // B
        explanation: "Reaksi eksoterm melepaskan kalor dari sistem ke lingkungan, menghasilkan penurunan total entalpi (ΔH bernilai negatif) dan peningkatan suhu lingkungan sekitarnya."
      },
      {
        id: "kim_q2",
        question: "Hukum yang menyatakan bahwa kalor reaksi tidak tergantung pada lintasan atau tahapan reaksi melainkan hanya pada keadaan awal dan akhir adalah...",
        options: [
          "Hukum Lavoisier",
          "Hukum Proust",
          "Hukum Hess",
          "Hukum Avogadro"
        ],
        correctIndex: 2, // C. Hukum Hess
        explanation: "Hukum Hess merupakan konsekuensi hukum pertama termodinamika di mana fungsi entalpi adalah fungsi keadaan."
      },
      {
        id: "kim_q3",
        question: "Bagaimanakah mekanisme kerja katalis dalam mempercepat laju reaksi kimia?",
        options: [
          "Meningkatkan energi kinetik seluruh partikel molekul pereaksi",
          "Menurunkan ambang batas energi aktivasi (Ea) yang dibutuhkan untuk reaksi",
          "Mengubah tetapan kesetimbangan kimia reaksi",
          "Meningkatkan konsentrasi produk hasil sampingan"
        ],
        correctIndex: 1, // B
        explanation: "Katalisator membuka rute reaksi baru dengan energi aktivasi yang lebih rendah, sehingga lebih banyak molekul memiliki energi cukup untuk bertumbukan efektif."
      },
      {
        id: "kim_q4",
        question: "Manakah tindakan berikut yang akan memperbesar laju reaksi antara kalsium karbonat (batu kapur) dengan asam klorida?",
        options: [
          "Menggunakan bongkahan kalsium karbonat padat besar",
          "Menurunkan suhu larutan asam klorida",
          "Menggunakan serbuk kalsium karbonat halus untuk memperluas bidang sentuh",
          "Mengencerkan larutan asam klorida dengan banyak air"
        ],
        correctIndex: 2, // C
        explanation: "Serbuk memiliki luas permukaan bidang sentuh yang jauh lebih besar dibanding bongkahan, meningkatkan frekuensi tumbukan efektif partikel per satuan waktu."
      },
      {
        id: "kim_q5",
        question: "Kalorimeter bom dirancang khusus untuk mengukur perubahan kalor pada kondisi...",
        options: [
          "Tekanan konstan",
          "Volume konstan",
          "Suhu tidak berubah",
          "Tanpa adanya reaksi pembakaran"
        ],
        correctIndex: 1, // B
        explanation: "Kalorimeter bom merupakan wadah baja kaku tertutup kedap sehingga reaksi pembakaran berlangsung pada volume konstan (ΔV = 0)."
      }
    ]
  },
  {
    id: "modul_05_matematika",
    code: "MOD-MAT-11-05",
    title: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral",
    shortTitle: "Modul_05_Matematika",
    category: "Matematika",
    fileName: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral.pdf",
    totalPages: 36,
    summary: "Konsep dasar kalkulus lanjutan: limit fungsi aljabar mendekati nilai tertentu dan tak hingga, turunan diferensial pertama sebagai laju perubahan sesaat f'(x), aturan rantai fungsi komposisi, aplikasi turunan pada garis singgung dan titik stasioner, serta anti-turunan integral dan luas daerah di bawah kurva.",
    sections: [
      {
        bab: 1,
        title: "Limit Fungsi Aljabar dan Bentuk Tak Tentu",
        page: 4,
        content: "Limit fungsi f(x) mendekati c adalah nilai yang dihampiri f(x) saat x mendekati c baik dari sisi kiri maupun kanan. Pada bentuk tak tentu 0/0 atau ∞/∞, penyelesaian dilakukan dengan metode pemfaktoran aljabar, perkalian bentuk sekawan, atau aturan L'Hopital."
      },
      {
        bab: 2,
        title: "Turunan Pertama dan Aturan Rantai",
        page: 12,
        content: "Turunan pertama f'(x) didefinisikan sebagai limit h->0 [f(x+h) - f(x)] / h, merepresentasikan gradien garis singgung kurva dan laju perubahan sesaat. Aturan rantai digunakan untuk fungsi komposisi y = f(g(x)), dengan dy/dx = (dy/du) · (du/dx). Titik stasioner kurva diperoleh saat f'(x) = 0."
      },
      {
        bab: 3,
        title: "Integral Tak Tentu dan Teorema Dasar Kalkulus",
        page: 25,
        content: "Integral adalah operasi kebalikan (anti-turunan) dari diferensial. Integral tak tentu ∫ x^n dx = (1 / (n+1)) x^(n+1) + C. Menurut Teorema Dasar Kalkulus, integral tentu ∫[a,b] f(x) dx = F(b) - F(a) dapat digunakan untuk menghitung luas bidang datar di bawah kurva fungsi f(x)."
      }
    ],
    qaBank: [
      {
        keywords: ["turunan pertama", "definisi turunan", "f'(x)", "laju perubahan"],
        answer: "Turunan pertama f'(x) dari fungsi f(x) menyatakan laju perubahan nilai f(x) terhadap x pada titik sesaat. Secara geometris, turunan pertama merupakan nilai gradien (kemiringan) garis singgung kurva f(x) di titik tersebut.",
        source: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral - Bab 3, Hal. 12"
      },
      {
        keywords: ["aturan rantai", "fungsi komposisi", "chain rule"],
        answer: "Aturan rantai (chain rule) adalah formula diferensiasi untuk fungsi bersusun (komposisi) y = f(u) dengan u = g(x). Formula perhitungannya adalah dy/dx = (dy/du) × (du/dx).",
        source: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral - Bab 4, Hal. 17"
      },
      {
        keywords: ["titik stasioner", "nilai ekstrem", "f'(x) = 0"],
        answer: "Titik stasioner suatu fungsi kurva f(x) tercapai ketika turunan pertamanya bernilai nol, yaitu f'(x) = 0. Titik ini dapat berupa titik balik maksimum, titik balik minimum, atau titik belok horizontal.",
        source: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral - Bab 5, Hal. 22"
      }
    ],
    quizQuestions: [
      {
        id: "mat_q1",
        question: "Jika f(x) = 3x² - 5x + 7, berapakah nilai turunan pertama f'(x) pada x = 2?",
        options: [
          "7",
          "9",
          "12",
          "1"
        ],
        correctIndex: 0, // A. f'(x)=6x-5, f'(2)=12-5=7
        explanation: "Turunan f'(x) = d/dx(3x² - 5x + 7) = 6x - 5. Untuk x = 2, f'(2) = 6(2) - 5 = 12 - 5 = 7."
      },
      {
        id: "mat_q2",
        question: "Titik stasioner suatu kurva y = f(x) tercapai pada saat kondisi...",
        options: [
          "f(x) = 0",
          "f'(x) = 0",
          "f''(x) > 0",
          "f'(x) mendekati tak terhingga"
        ],
        correctIndex: 1, // B
        explanation: "Titik stasioner terjadi saat gradien garis singgung kurva mendatar, yang berarti turunan pertama bernilai nol: f'(x) = 0."
      },
      {
        id: "mat_q3",
        question: "Berapakah hasil integral tak tentu ∫ (6x² + 4x) dx?",
        options: [
          "2x³ + 2x² + C",
          "12x + 4 + C",
          "3x³ + 4x² + C",
          "6x³ + 2x² + C"
        ],
        correctIndex: 0, // A
        explanation: "∫ 6x² dx = 6 * (x³/3) = 2x³, dan ∫ 4x dx = 4 * (x²/2) = 2x². Sehingga hasilnya 2x³ + 2x² + C."
      },
      {
        id: "mat_q4",
        question: "Berdasarkan Teorema Dasar Kalkulus, integral tentu ∫[a,b] f(x) dx secara geometris merepresentasikan...",
        options: [
          "Panjang kurva antara interval a dan b",
          "Luas netto daerah di bawah kurva f(x) dan di atas sumbu-X antara x = a dan x = b",
          "Keliling bidang penampang",
          "Titik belok asimtot fungsi"
        ],
        correctIndex: 1, // B
        explanation: "Integral tentu merepresentasikan jumlahan luas daerah persegi panjang kecil berhingga di bawah kurva f(x) pada rentang interval [a, b]."
      },
      {
        id: "mat_q5",
        question: "Aturan rantai kalkulus digunakan untuk mencari turunan dari...",
        options: [
          "Perkalian dua fungsi independen",
          "Pembagian dua konstanta",
          "Fungsi komposisi (fungsi bersusun)",
          "Polinomial satu suku"
        ],
        correctIndex: 2, // C
        explanation: "Aturan rantai (chain rule) adalah kaidah diferensiasi fungsi bersusun y = f(g(x)), dirumuskan sebagai dy/dx = dy/du * du/dx."
      }
    ]
  },
  {
    id: "modul_06_sosiologi",
    code: "MOD-SOS-11-06",
    title: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi",
    shortTitle: "Modul_06_Sosiologi",
    category: "Sosiologi",
    fileName: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi.pdf",
    totalPages: 36,
    summary: "Struktur sosial dan stratifikasi dalam masyarakat: konsep stratifikasi vertikal dan diferensiasi horizontal (ras, suku bangsa, klan, agama, gender), teori konflik sosial (Karl Marx, Ralf Dahrendorf, Lewis Coser), serta bentuk akomodasi konflik (mediasi, arbitrase, konsiliasi) dan integrasi sosial multikultural.",
    sections: [
      {
        bab: 1,
        title: "Konsep Struktur Sosial dan Diferensiasi",
        page: 4,
        content: "Struktur sosial mencakup tatanan pola hubungan antarindividu atau kelompok dalam masyarakat. Diferensiasi sosial adalah pembedaan anggota masyarakat secara horizontal tanpa tingkatan hierarki (sejajar), seperti suku, ras, agama, klan, dan jenis kelamin. Tidak ada suku atau agama yang lebih tinggi statusnya dari yang lain secara sosiologis."
      },
      {
        bab: 2,
        title: "Stratifikasi Sosial dan Ketimpangan",
        page: 12,
        content: "Stratifikasi sosial adalah pembedaan anggota masyarakat ke dalam lapisan-lapisan kelas secara bertingkat (vertikal) berdasarkan kriteria kekayaan, kekuasaan, kehormatan, dan ilmu pengetahuan. Sistem stratifikasi terbagi menjadi sistem tertutup (kasta), terbuka (peluang mobilitas sosial berdasar prestasi), dan campuran."
      },
      {
        bab: 3,
        title: "Konflik Sosial dan Akomodasi",
        page: 25,
        content: "Konflik sosial menurut Karl Marx dipicu pertentangan kelas borjuis pemilik modal dan proletar kaum pekerja. Ralf Dahrendorf menekankan distribusi kekuasaan dan otoritas. Bentuk akomodasi penyelesaian konflik: (1) Mediasi (menggunakan pihak ketiga netral sebagai penasihat tanpa hak memutuskan), (2) Arbitrase (pihak ketiga memiliki wewenang mengikat secara hukum), (3) Konsiliasi (mempertemukan keinginan pihak bertikai melalui lembaga khusus)."
      }
    ],
    qaBank: [
      {
        keywords: ["diferensiasi sosial", "diferensiasi horizontal", "perbedaan diferensiasi"],
        answer: "Diferensiasi sosial adalah pengelompokan masyarakat secara horizontal atau sejajar tanpa pembagian tingkatan hierarkis derajat. Contohnya diferensiasi berdasarkan suku bangsa, ras, agama, dan gender, di mana semua entitas memiliki kedudukan martabat yang setara.",
        source: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi - Bab 1, Hal. 4"
      },
      {
        keywords: ["stratifikasi sosial", "lapisan sosial", "kasta", "vertikal"],
        answer: "Stratifikasi sosial adalah pembagian masyarakat ke dalam kelas-kelas sosial bertingkat secara vertikal berdasarkan parameter kekayaan, kekuasaan, tingkat pendidikan, atau keturunan status kehormatan.",
        source: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi - Bab 2, Hal. 12"
      },
      {
        keywords: ["mediasi", "arbitrase", "konsiliasi", "akomodasi konflik"],
        answer: "Perbedaan utama mediasi dan arbitrase: pada Mediasi, pihak ketiga hanya bertindak sebagai penasihat netral dan keputusannya tidak mengikat; sedangkan pada Arbitrase, pihak ketiga (arbitrator) memiliki wewenang sah untuk mengambil keputusan yang bersifat mengikat kedua belah pihak yang bersengketa.",
        source: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi - Bab 3, Hal. 25"
      }
    ],
    quizQuestions: [
      {
        id: "sos_q1",
        question: "Pengelompokan masyarakat berdasarkan ras, etnis, agama, dan gender yang tidak membentuk hierarki tinggi-rendah disebut...",
        options: [
          "Stratifikasi sosial vertikal",
          "Diferensiasi sosial horizontal",
          "Mobilitas sosial antargenerasi",
          "Konsolidasi kelompok tertutup"
        ],
        correctIndex: 1, // B
        explanation: "Diferensiasi sosial bersifat horizontal karena mendudukkan perbedaan ras, suku, dan agama dalam posisi yang sejajar dan setara."
      },
      {
        id: "sos_q2",
        question: "Bentuk penyelesaian konflik di mana pihak ketiga yang dipilih memiliki wewenang untuk memberikan keputusan mutlak dan mengikat disebut...",
        options: [
          "Mediasi",
          "Arbitrase",
          "Kompromi",
          "Koersi"
        ],
        correctIndex: 1, // B. Arbitrase
        explanation: "Dalam arbitrase, pihak ketiga berfungsi sebagai hakim/penentu keputusan yang wajib dipatuhi oleh kedua pihak yang bersengketa."
      },
      {
        id: "sos_q3",
        question: "Menurut teori Karl Marx, akar utama dari dinamika konflik sosial di masyarakat berlandaskan pada...",
        options: [
          "Perbedaan keyakinan spiritual individu",
          "Pertentangan kelas antara kaum borjuis pemilik modal dan proletar pekerja",
          "Distribusi kekuasaan birokrasi pemerintahan",
          "Pergeseran norma demografi antarwilayah"
        ],
        correctIndex: 1, // B
        explanation: "Karl Marx menyoroti pertentangan kepentingan material dan ekonomi antara kelas borjuis yang mengeksploitasi kaum buruh proletar."
      },
      {
        id: "sos_q4",
        question: "Sistem pelapisan sosial tertutup yang tidak memungkinkan individu melakukan perpindahan status sosial sepanjang hidupnya tampak jelas pada sistem...",
        options: [
          "Masyarakat meritokrasi modern",
          "Sistem kasta tradisional",
          "Masyarakat kapitalis industri",
          "Masyarakat perkotaan metropolitan"
        ],
        correctIndex: 1, // B. Kasta
        explanation: "Sistem kasta bersifat tertutup karena status sosial seseorang ditentukan sejak lahir (ascribed status) dan hampir mustahil berpindah."
      },
      {
        id: "sos_q5",
        question: "Konsiliasi sebagai bentuk akomodasi konflik sosial dicirikan oleh proses...",
        options: [
          "Penggunaan kekuatan fisik atau ancaman militer",
          "Pertemuan perwakilan pihak bertikai melalui lembaga khusus untuk mencapai mufakat",
          "Pemisahan paksa kelompok bertikai tanpa musyawarah",
          "Pengabaian masalah hingga perselisihan mereda sendiri"
        ],
        correctIndex: 1, // B
        explanation: "Konsiliasi melibatkan lembaga-lembaga formal tertentu yang mempertemukan pihak yang berselisih untuk mendiskusikan resolusi bersama secara damai."
      }
    ]
  },
  {
    id: "modul_07_geografi",
    code: "MOD-GEO-11-07",
    title: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi",
    shortTitle: "Modul_07_Geografi",
    category: "Geografi",
    fileName: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi.pdf",
    totalPages: 31,
    summary: "Dinamika lapisan batuan bumi (litosfer): struktur internal kerak bumi, mantel dan inti bumi, teori lempeng tektonik (gerak konvergen, divergen, sesar mendatar), tenaga endogen (tektonisme, vulkanisme, seisme) dan tenaga eksogen (pelapukan, erosi, sedimentasi), serta mitigasi bencana geologi.",
    sections: [
      {
        bab: 1,
        title: "Struktur Lapisan Bumi dan Litosfer",
        page: 4,
        content: "Bumi tersusun dari lapisan konsentris: kerak bumi (crust) yang terbagi menjadi kerak benua (sial: silisium-aluminium) dan kerak samudra (sima: silisium-magnesium), mantel bumi (mantle/astenosfer) yang bersifat plastis kental tempat arus konveksi menggerakkan lempeng, serta inti bumi (core: nife - nikel-besi) inti luar cair dan inti dalam padat."
      },
      {
        bab: 2,
        title: "Pergerakan Lempeng Tektonik dan Tenaga Endogen",
        page: 12,
        content: "Pergerakan lempeng tektonik terdiri dari: (1) Gerak Konvergen (saling bertumbukan membentuk palung samudra, pegunungan lipatan, zona subduksi), (2) Gerak Divergen (saling menjauh membentuk punggung tengah samudra / mid-oceanic ridge), dan (3) Gerak Transform / Sesar Mendatar (berpapasan mendatar seperti Sesar San Andreas dan Sesar Semangko Sumatra)."
      },
      {
        bab: 3,
        title: "Vulkanisme, Seisme, dan Tenaga Eksogen",
        page: 22,
        content: "Vulkanisme menghasilkan magma yang naik ke permukaan (efusif dan eksplosif). Seisme (gempa bumi) terjadi akibat pelepasan energi mendadak di patahan batuan bumi; pusat gempa di dalam tanah disebut hiposentrum, dan titik di permukaan tepat di atasnya disebut episentrum. Tenaga eksogen merombak bentang alam melalui pelapukan mekanik/kimiawi/organik, erosi air/angin/gletser, serta sedimentasi."
      }
    ],
    qaBank: [
      {
        keywords: ["litosfer", "kerak bumi", "sial", "sima"],
        answer: "Litosfer adalah lapisan terluar kerak bumi yang padat dan kaku, terdiri dari batuan sedimen, beku, dan metamorf. Litosfer tersusun atas dua lapisan utama: lapisan Sial (Silisium-Aluminium) pembentuk kerak benua, dan lapisan Sima (Silisium-Magnesium) pembentuk kerak samudra.",
        source: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi - Bab 1, Hal. 4"
      },
      {
        keywords: ["konvergen", "divergen", "transform", "lempeng tektonik"],
        answer: "Ada tiga tipe pergerakan lempeng tektonik: Konvergen (lempeng saling bertumbukan, memicu zona subduksi dan jalur gunung api), Divergen (lempeng saling menjauh, membentuk kerak baru di punggung samudra), dan Transform (lempeng saling bergeser mendatar sejajar memicu gempa dangkal kuat).",
        source: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi - Bab 2, Hal. 12"
      },
      {
        keywords: ["hiposentrum", "episentrum", "gempa bumi"],
        answer: "Hiposentrum adalah titik fokus atau pusat terjadinya pelepasan energi gempa bumi yang terletak jauh di dalam perut bumi. Sedangkan episentrum adalah titik proyeksi tegak lurus hiposentrum yang berada persis di permukaan bumi di mana guncangan paling kuat pertama kali dirasakan.",
        source: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi - Bab 3, Hal. 22"
      }
    ],
    quizQuestions: [
      {
        id: "geo_q1",
        question: "Titik di dalam kerak bumi yang menjadi sumber pertama pelepasan gelombang gempa bumi disebut...",
        options: [
          "Episentrum",
          "Hiposentrum",
          "Patahan graben",
          "Kawah maar"
        ],
        correctIndex: 1, // B. Hiposentrum
        explanation: "Hiposentrum adalah pusat gempa di kedalaman bumi, sedangkan episentrum adalah titik permukaan bumi tegak lurus di atas hiposentrum."
      },
      {
        id: "geo_q2",
        question: "Pergerakan dua lempeng tektonik yang saling bertumbukan dan membentuk zona subduksi dinamakan gerak...",
        options: [
          "Divergen",
          "Transform",
          "Konvergen",
          "Epirogenesa positif"
        ],
        correctIndex: 2, // C. Konvergen
        explanation: "Gerak konvergen terjadi ketika dua lempeng mendekat dan bertumbukan, menyebabkan lempeng yang lebih padat menyusup ke bawah mantel (subduksi)."
      },
      {
        id: "geo_q3",
        question: "Lapisan mantel bumi bagian atas yang bersifat semi-plastis dan menjadi tempat mengapungnya lempeng litosfer adalah...",
        options: [
          "Barisfer",
          "Astenosfer",
          "Korteks benua",
          "Inti dalam"
        ],
        correctIndex: 1, // B. Astenosfer
        explanation: "Astenosfer memiliki sifat plastis dan mengalami aliran konveksi termal yang menjadi motor penggerak lempeng-lempeng litosfer."
      },
      {
        id: "geo_q4",
        question: "Batuan sedimen klastik yang terbentuk dari proses pengendapan butiran pasir berdiameter 1/16 mm hingga 2 mm adalah...",
        options: [
          "Batu konglomerat",
          "Batu pasir (sandstone)",
          "Batu serpih (shale)",
          "Batu gamping (limestone)"
        ],
        correctIndex: 1, // B. Batu pasir
        explanation: "Batu pasir merupakan batuan sedimen klastik dengan fraksi butir pasir silika berukuran 0,0625 mm hingga 2 mm."
      },
      {
        id: "geo_q5",
        question: "Contoh fenomena pergerakan lempeng jenis sesar mendatar (transform boundary) di Indonesia adalah patahan...",
        options: [
          "Patahan Lembang di Bandung",
          "Patahan Semangko (The Great Sumatran Fault) di sepanjang Pulau Sumatra",
          "Palung Jawa (Sunda Trench)",
          "Busur Banda"
        ],
        correctIndex: 1, // B. Semangko
        explanation: "Sesar Besar Semangko adalah sesar geser mendatar aktif (strike-slip fault) yang membentang di sepanjang Pegunungan Barisan Pulau Sumatra."
      }
    ]
  },
  {
    id: "modul_08_ekonomi",
    code: "MOD-EKO-11-08",
    title: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal",
    shortTitle: "Modul_08_Ekonomi",
    category: "Ekonomi",
    fileName: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal.pdf",
    totalPages: 31,
    summary: "Manajemen keuangan dan instrumen pasar modal: tujuan pengelolaan likuiditas, solvabilitas, rentabilitas, analisis laporan keuangan neraca laba rugi, instrumen pasar modal saham dan obligasi, reksadana, fungsi Bursa Efek Indonesia (BEI) dan OJK, serta peran kebijakan moneter Bank Indonesia.",
    sections: [
      {
        bab: 1,
        title: "Dasar Manajemen Keuangan dan Rasio Keuangan",
        page: 4,
        content: "Manajemen keuangan mengelola perolehan dan alokasi dana perusahaan untuk memaksimumkan nilai perusahaan. Tiga pilar rasio keuangan: (1) Likuiditas (kemampuan membayar kewajiban jangka pendek lancar), (2) Solvabilitas/Leverage (kemampuan melunasi seluruh utang jangka panjang saat dilikuidasi), dan (3) Profitabilitas/Rentabilitas (kemampuan menghasilkan laba bersih dari modal dan aset yang dioperasikan)."
      },
      {
        bab: 2,
        title: "Struktur Pasar Modal dan Instrumen Finansial",
        page: 14,
        content: "Pasar modal mempertemukan pihak yang membutuhkan dana jangka panjang (emiten) dengan pihak yang kelebihan dana (investor). Instrumen utama: Saham (bukti kepemilikan modal perseroan dengan hak dividen dan capital gain), Obligasi (surat utang dengan kupon bunga berkala dan pengembalian pokok jatuh tempo), serta Reksadana (wadah investasi dana kolektif yang dikelola Manajer Investasi)."
      },
      {
        bab: 3,
        title: "Regulasi Pasar Modal dan Lembaga Keuangan",
        page: 24,
        content: "Bursa Efek Indonesia (BEI) menyelenggarakan perdagangan efek yang teratur, wajar, dan efisien. Otoritas Jasa Keuangan (OJK) bertindak sebagai lembaga independen pengawas dan regulator seluruh kegiatan jasa keuangan di sektor perbankan, pasar modal, dan IKNB. Bank Indonesia (BI) mengatur kebijakan moneter dan stabilitas nilai rupiah melalui suku bunga acuan (BI-Rate)."
      }
    ],
    qaBank: [
      {
        keywords: ["likuiditas", "solvabilitas", "profitabilitas", "rasio keuangan"],
        answer: "Likuiditas mengukur kemampuan perusahaan memenuhi kewajiban jangka pendek (contoh Current Ratio). Solvabilitas mengukur kemampuan melunasi seluruh kewajiban utang jangka panjang (Debt to Equity Ratio). Profitabilitas mengukur efisiensi perusahaan dalam mencetak laba atas aset dan modal (ROA dan ROE).",
        source: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal - Bab 1, Hal. 4"
      },
      {
        keywords: ["saham", "obligasi", "perbedaan saham dan obligasi", "dividen"],
        answer: "Saham adalah bukti penyertaan kepemilikan modal dalam perseroan terbatas dengan imbal hasil berupa dividen dan capital gain, serta memiliki risiko fluktuasi harga saham. Obligasi adalah surat pengakuan utang jangka panjang yang diterbitkan emiten dengan kewajiban membayar bunga (kupon) tetap berkala dan melunasi nilai pokok saat jatuh tempo.",
        source: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal - Bab 2, Hal. 14"
      },
      {
        keywords: ["ojk", "bursa efek indonesia", "bei", "regulator"],
        answer: "Otoritas Jasa Keuangan (OJK) adalah lembaga independen negara yang bertugas mengatur, mengawasi, memeriksa, dan menyidik seluruh aktivitas industri perbankan, pasar modal, asuransi, dan dana pensiun di Indonesia untuk melindungi kepentingan konsumen dan stabilitas keuangan.",
        source: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal - Bab 3, Hal. 24"
      }
    ],
    quizQuestions: [
      {
        id: "eko_q1",
        question: "Instrumen pasar modal yang memberikan hak bukti kepemilikan modal suatu perusahaan kepada investornya dinamakan...",
        options: [
          "Obligasi korporasi",
          "Saham (Equity)",
          "Surat Utang Negara",
          "Sertifikat Bank Indonesia"
        ],
        correctIndex: 1, // B. Saham
        explanation: "Saham merupakan tanda penyertaan modal seseorang atau badan usaha pada suatu perseroan terbatas, memberikan hak atas pembagian dividen."
      },
      {
        id: "eko_q2",
        question: "Rasio keuangan yang mengukur kesanggupan suatu perusahaan dalam melunasi seluruh hutang jangka panjangnya apabila perusahaan tersebut dilikuidasi adalah...",
        options: [
          "Rasio Likuiditas",
          "Rasio Solvabilitas (Leverage)",
          "Rasio Aktivitas",
          "Rasio Profitabilitas"
        ],
        correctIndex: 1, // B. Solvabilitas
        explanation: "Solvabilitas mengukur seberapa jauh aktiva perusahaan dibiayai oleh utang serta kemampuan jangka panjang dalam memenuhi komitmen finansialnya."
      },
      {
        id: "eko_q3",
        question: "Lembaga independen yang bertugas melakukan pengawasan dan regulasi menyeluruh terhadap sektor perbankan dan pasar modal di Indonesia adalah...",
        options: [
          "Badan Pengawas Keuangan dan Pembangunan (BPKP)",
          "Kementerian Keuangan",
          "Otoritas Jasa Keuangan (OJK)",
          "Lembaga Penjamin Simpanan (LPS)"
        ],
        correctIndex: 2, // C. OJK
        explanation: "Sesuai UU No. 21 Tahun 2011, OJK dibentuk untuk menggantikan fungsi Bapepam-LK dan pengawasan perbankan dari Bank Indonesia."
      },
      {
        id: "eko_q4",
        question: "Wadah investasi yang menghimpun dana masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh Manajer Investasi disebut...",
        options: [
          "Reksadana (Mutual Fund)",
          "Deposito on call",
          "Pasar uang valas",
          "Modal ventura"
        ],
        correctIndex: 0, // A. Reksadana
        explanation: "Reksadana memfasilitasi diversifikasi instrumen investasi bagi pemodal kecil dengan pengelolaan profesional oleh Manajer Investasi terdaftar."
      },
      {
        id: "eko_q5",
        question: "Keuntungan yang diperoleh investor saham dari selisih positif antara harga jual yang lebih tinggi dibandingkan harga beli saham disebut...",
        options: [
          "Dividen tunai",
          "Capital gain",
          "Kupon diskonto",
          "Bunga amortisasi"
        ],
        correctIndex: 1, // B. Capital gain
        explanation: "Capital gain adalah laba modal yang diraih saat aset investasi dijual pada harga di atas harga pembelian awal."
      }
    ]
  },
  {
    id: "modul_09_informatika",
    code: "MOD-INF-11-09",
    title: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan",
    shortTitle: "Modul_09_Informatika",
    category: "Informatika",
    fileName: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan.pdf",
    totalPages: 31,
    summary: "Fondasi sistem komputasi modern: arsitektur Von Neumann, komponen CPU (ALU, Control Unit, Register, Clock), hierarki memori (Cache L1/L2/L3, RAM, Storage SSD), representasi data biner heksadesimal, model jaringan OSI 7 layer dan TCP/IP, protokol routing jaringan, pengalamatan IPv4 dan IPv6, serta dasar keamanan siber enkripsi simetris dan asimetris.",
    sections: [
      {
        bab: 1,
        title: "Arsitektur Komputer dan Siklus Instruksi",
        page: 4,
        content: "Arsitektur Von Neumann mendasari sebagian besar komputer modern, terdiri atas: Unit Pemrosesan Pusat (CPU), memori utama, dan antarmuka I/O. Di dalam CPU terdapat: Arithmetic Logic Unit (ALU) yang melakukan kalkulasi aritmatika dan logika boolean; Control Unit (CU) yang mengatur alur jalannya eksekusi program; dan Register sebagai memori internal supercepat untuk penyimpanan sementara data instruksi. Siklus eksekusi CPU: Fetch (jemput instruksi), Decode (terjemahkan instruksi), Execute (jalankan instruksi), dan Writeback."
      },
      {
        bab: 2,
        title: "Model Lapisan Jaringan Komputer (OSI dan TCP/IP)",
        page: 14,
        content: "Model Open Systems Interconnection (OSI) 7 lapis: (7) Application (HTTP, DNS, SSH), (6) Presentation (enkripsi data SSL/TLS), (5) Session (sinkronisasi dialog), (4) Transport (TCP transmisi andal, UDP transmisi cepat tanpa garansi), (3) Network (IP routing dan logis alamat IP), (2) Data Link (frame Ethernet, MAC address, switch), (1) Physical (kabel serat optik, tembaga, sinyal bit radio)."
      },
      {
        bab: 3,
        title: "Protokol Internet dan Pengalamatan IP",
        page: 24,
        content: "Alamat IPv4 berukuran 32 bit dibagi menjadi 4 oktet desimal (contoh: 192.168.1.1), sementara IPv6 berukuran 128 bit dalam format heksadesimal untuk mengantisipasi habisnya kuota alamat global. Domain Name System (DNS) menerjemahkan nama domain yang mudah diingat manusia menjadi alamat IP numerik server."
      }
    ],
    qaBank: [
      {
        keywords: ["von neumann", "arsitektur komputer", "cpu", "alu", "control unit"],
        answer: "Arsitektur Von Neumann menggunakan satu memori penyimpanan bersama untuk program dan data. Di dalam CPU terdapat ALU (Arithmetic Logic Unit) untuk operasi hitung dan logika, Control Unit (CU) pengendali alur instruksi, dan Register untuk memori kerja register internal dengan kecepatan sangat tinggi.",
        source: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan - Bab 1, Hal. 4"
      },
      {
        keywords: ["osi 7 layer", "lapisan osi", "transport", "network layer"],
        answer: "Model OSI terdiri atas 7 lapisan: Physical, Data Link, Network (pengalamatan IP), Transport (TCP/UDP), Session, Presentation (format dan enkripsi), dan Application (interaksi aplikasi pengguna seperti HTTP). Lapisan Transport mengatur kendali aliran dan integritas pengiriman data ujung-ke-ujung (end-to-end).",
        source: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan - Bab 2, Hal. 14"
      },
      {
        keywords: ["perbedaan tcp dan udp", "tcp udp", "transport layer"],
        answer: "TCP (Transmission Control Protocol) bersifat connection-oriented, andal, menjamin urutan paket tiba dengan three-way handshake dan pengecekan retransmisi paket rusak. UDP (User Datagram Protocol) bersifat connectionless, tanpa garansi urutan pengiriman namun sangat cepat dan ringan, cocok untuk live streaming dan game daring.",
        source: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan - Bab 2, Hal. 14"
      }
    ],
    quizQuestions: [
      {
        id: "inf_q1",
        question: "Komponen utama di dalam CPU yang bertugas melakukan operasi perhitungan matematika dasar dan pembandingan logika boolean adalah...",
        options: [
          "Control Unit (CU)",
          "Arithmetic Logic Unit (ALU)",
          "Program Counter (PC)",
          "Instruction Register (IR)"
        ],
        correctIndex: 1, // B. ALU
        explanation: "ALU bertindak sebagai mesin komputasi internal prosesor yang mengeksekusi operasi penambahan, pengurangan, serta perbandingan logika bitwise (AND, OR, NOT, XOR)."
      },
      {
        id: "inf_q2",
        question: "Pada model referensi OSI 7 Layer, lapisan yang bertanggung jawab atas penentuan rute terbaik (routing) dan pengalamatan logis (IP Address) adalah...",
        options: [
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
          "Physical Layer"
        ],
        correctIndex: 1, // B. Network Layer
        explanation: "Network Layer (Lapisan 3) mengelola packet switching, routing antar router berbeda segmen jaringan, dan penomoran IP address."
      },
      {
        id: "inf_q3",
        question: "Panjang ruang alamat pengalamatan Internet Protocol versi 4 (IPv4) dan versi 6 (IPv6) berturut-turut adalah...",
        options: [
          "16 bit dan 64 bit",
          "32 bit dan 128 bit",
          "64 bit dan 256 bit",
          "128 bit dan 512 bit"
        ],
        correctIndex: 1, // B. 32 bit dan 128 bit
        explanation: "IPv4 menggunakan format 32-bit (sekitar 4,3 miliar host), sedangkan IPv6 mengadopsi 128-bit yang mampu menyediakan 3.4 x 10^38 kombinasi alamat unik."
      },
      {
        id: "inf_q4",
        question: "Protokol pada lapisan Transport yang bersifat andal (reliable), connection-oriented, dan menerapkan mekanisme three-way handshake adalah...",
        options: [
          "UDP (User Datagram Protocol)",
          "TCP (Transmission Control Protocol)",
          "ICMP (Internet Control Message Protocol)",
          "ARP (Address Resolution Protocol)"
        ],
        correctIndex: 1, // B. TCP
        explanation: "TCP menjamin seluruh paket data terkirim utuh tanpa korupsi dengan acknowledge number, sequencing, dan flow control."
      },
      {
        id: "inf_q5",
        question: "Layanan jaringan internet yang berfungsi menerjemahkan nama domain (misal: www.belajar.id) ke alamat IP numerik server host adalah...",
        options: [
          "DHCP (Dynamic Host Configuration Protocol)",
          "DNS (Domain Name System)",
          "FTP (File Transfer Protocol)",
          "SNMP (Simple Network Management Protocol)"
        ],
        correctIndex: 1, // B. DNS
        explanation: "DNS berperan sebagai buku telepon internet global yang memetakan hostname teks menjadi alamat IP tujuan."
      }
    ]
  },
  {
    id: "modul_10_bindonesia",
    code: "MOD-IND-11-10",
    title: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik",
    shortTitle: "Modul_10_B.Indonesia",
    category: "Bahasa Indonesia",
    fileName: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik.pdf",
    totalPages: 31,
    summary: "Penulisan teks ilmiah dan kajian sastra: struktur karya tulis ilmiah (Abstrak, Pendahuluan, Landasan Teori, Metodologi, Hasil & Pembahasan, Kesimpulan), kaidah kalimat efektif PUEBI/EYD, pola penalaran deduktif-induktif, unsur intrinsik sastra (tema, tokoh, alur, latar, sudut pandang, amanat), serta gaya bahasa majas kiasan.",
    sections: [
      {
        bab: 1,
        title: "Karakteristik dan Struktur Karya Tulis Akademik",
        page: 4,
        content: "Karya tulis ilmiah menyajikan fakta obyektif dengan bahasa denotatif, lugas, dan bebas dari ambiguitas emosional. Struktur standar meliputi: Abstrak (rangkuman ringkas mencakup tujuan, metodologi, dan temuan utama), Pendahuluan (latar belakang masalah dan rumusan tujuan), Kajian Teori, Metodologi Riset, Hasil dan Analisis Pembahasan, serta Kesimpulan dan Saran Rekomendasi."
      },
      {
        bab: 2,
        title: "Kaidah Kalimat Efektif dan Penalaran Paragraf",
        page: 14,
        content: "Ciri kalimat efektif dalam penulisan ilmiah: (1) Kesepadanan struktur (memiliki subjek dan predikat yang jelas), (2) Keparalelan bentuk kata (kesejajaran afiks), (3) Kehematan kata (menghindari pleonasme atau pemborosan kata), (4) Kecermatan nalar. Paragraf deduktif menempatkan gagasan pokok di awal paragraf, sedangkan paragraf induktif menempatkannya di akhir kalimat penutup."
      },
      {
        bab: 3,
        title: "Unsur Intrinsik Sastra dan Stilistika Majas",
        page: 24,
        content: "Unsur intrinsik prosa naratif meliputi tema (pokok pikiran karya), alur/plot (maju, mundur/flashback, campuran), perwatakan/tokoh (protagonis, antagonis, tritagonis), latar (ruang, waktu, suasana), sudut pandang (orang pertama pelaku utama 'aku', orang ketiga serbatahu 'dia/ia'), dan amanat. Majas metafora membandingkan dua hal secara langsung tanpa kata penghubung pembanding; personifikasi menginsankan benda mati bertindak layaknya manusia."
      }
    ],
    qaBank: [
      {
        keywords: ["kalimat efektif", "ciri kalimat efektif", "pleonasme", "ejaan ilmiah"],
        answer: "Kalimat efektif adalah kalimat yang disusun secara lugas, gramatikal sesuai kaidah EYD/PUEBI, memiliki kesepadanan subjek-predikat yang tegas, keparalelan bentuk afiksasi, serta hemat kata (menghindari pleonasme seperti 'para hadirin sekalian' atau 'sangat indah sekali').",
        source: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik - Bab 2, Hal. 14"
      },
      {
        keywords: ["paragraf deduktif", "paragraf induktif", "deduktif induktif"],
        answer: "Paragraf deduktif adalah paragraf yang gagasan utamanya (kalimat utama) terletak di awal paragraf kemudian diikuti penjelasan kalimat pengembang. Sedangkan paragraf induktif memaparkan penjelasan khusus terlebih dahulu dan meletakkan simpulan gagasan pokok di akhir paragraf.",
        source: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik - Bab 2, Hal. 14"
      },
      {
        keywords: ["unsur intrinsik", "prosa", "sudut pandang", "amanat"],
        answer: "Unsur intrinsik sastra meliputi: Tema, Tokoh dan Penokohan, Alur (Plot), Latar (Setting tempat/waktu/suasana), Sudut Pandang (Point of View orang pertama atau ketiga), dan Amanat (pesan moral edukatif yang disampaikan pengarang kepada pembaca).",
        source: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik - Bab 3, Hal. 24"
      }
    ],
    quizQuestions: [
      {
        id: "ind_q1",
        question: "Paragraf yang menempatkan kalimat utama atau gagasan pokoknya pada awal kalimat paragraf disebut...",
        options: [
          "Paragraf Induktif",
          "Paragraf Deduktif",
          "Paragraf Campuran",
          "Paragraf Narasi Kronologis"
        ],
        correctIndex: 1, // B. Deduktif
        explanation: "Paragraf deduktif diawali dengan pernyataan umum (kalimat utama) yang selanjutnya diuraikan oleh rincian kalimat penjelas."
      },
      {
        id: "ind_q2",
        question: "Perhatikan kalimat: 'Hadirin sekalian dipersilakan untuk dapat segera memasuki ke dalam ruangan rapat.' Kalimat tersebut tidak efektif karena...",
        options: [
          "Mengandung kesalahan konjungsi intrakalimat",
          "Terjadi pleonasme (pemborosan kata: 'hadirin sekalian', 'memasuki ke dalam')",
          "Tidak memiliki subjek yang jelas",
          "Menggunakan kata arkais kuno"
        ],
        correctIndex: 1, // B. Pleonasme
        explanation: "'Hadirin' sudah bermakna jamak tanpa 'sekalian', dan kata 'memasuki' sudah bermakna masuk 'ke dalam', sehingga frasa tersebut rancu dan boros kata."
      },
      {
        id: "ind_q3",
        question: "Gaya bahasa yang memberikan sifat-sifat insani atau tingkah laku manusia kepada benda mati dinamakan majas...",
        options: [
          "Hiperbola",
          "Personifikasi",
          "Metafora",
          "Litotes"
        ],
        correctIndex: 1, // B. Personifikasi
        explanation: "Personifikasi melukiskan benda mati seolah-olah bernyawa dan beraktivitas seperti manusia (contoh: 'angin malam membelai rambutnya')."
      },
      {
        id: "ind_q4",
        question: "Bagian karya tulis ilmiah yang memuat intisari komprehensif berisi latar belakang singkat, tujuan, metodologi, dan temuan hasil penelitian adalah...",
        options: [
          "Kata Pengantar",
          "Abstrak",
          "Daftar Pustaka",
          "Lampiran Hasil Observasi"
        ],
        correctIndex: 1, // B. Abstrak
        explanation: "Abstrak merupakan ringkasan padat 150-250 kata yang menyajikan gambaran menyeluruh isi riset karya ilmiah."
      },
      {
        id: "ind_q5",
        question: "Pengarang novel yang bertindak sebagai narator serbatahu yang mengetahui segala isi hati, pikiran, dan masa lalu tokoh lain menggunakan sudut pandang...",
        options: [
          "Orang pertama pelaku utama ('Aku')",
          "Orang pertama pelaku sampingan",
          "Orang ketiga serbatahu ('Dia' / 'Ia')",
          "Orang kedua direktif"
        ],
        correctIndex: 2, // C
        explanation: "Sudut pandang orang ketiga serbatahu (omniscient third person) memungkinkan narator mengetahui seluruh dimensi pikiran, emosi batin, dan motivasi para tokoh."
      }
    ]
  }
];

// Ekspor ke window global untuk pemakaian lokal offline langsung
if (typeof window !== "undefined") {
  window.DEFAULT_MODULES = DEFAULT_MODULES;
}
