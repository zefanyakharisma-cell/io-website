import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

type Img = { src: string; small?: string; alt: string; width?: number; height?: number };

/**
 * Student Mobility → Inbound, from KUI's spec (WEBSITE IO, "NEW UPDATED")
 * and its linked Google Doc "Narasi page Inbound Student Exchange Program".
 */
export const inboundIntro: L = {
  en: "Petra Christian University welcomes international students to become part of its vibrant academic community in Surabaya, Indonesia. Through its international programs, PCU fosters cross-cultural understanding, academic collaboration, and meaningful global engagement, providing students with opportunities to broaden their international perspectives and experiences.",
  id: "Universitas Kristen Petra menyambut mahasiswa internasional untuk menjadi bagian dari komunitas akademik yang dinamis di Surabaya, Indonesia. Melalui program internasionalnya, Petra menumbuhkan pemahaman lintas budaya, kolaborasi akademik, dan keterlibatan global yang bermakna, sehingga mahasiswa dapat memperluas wawasan dan pengalaman internasional mereka.",
};

/** The three pages under Inbound. */
export const inboundPrograms: { slug: string; title: L; kind: L; summary: L; image: Img }[] = [
  {
    slug: "student-exchange",
    title: { en: "Inbound Student Exchange Program", id: "Program Pertukaran Mahasiswa Inbound" },
    kind: { en: "Undergraduate · 1–2 semesters", id: "Sarjana · 1–2 semester" },
    summary: { en: "One or two semesters at Petra for students of our partner universities, under an MoU or MoA.", id: "Satu atau dua semester di Petra bagi mahasiswa universitas mitra, berdasarkan MoU atau MoA." },
    image: media.campus["gazebo-study"],
  },
  {
    slug: "short-programs",
    title: { en: "Short-Term & Non-Degree Programs", id: "Program Jangka Pendek & Non-Gelar" },
    kind: { en: "Non-degree · iCOP, ASP, PSP, Indonesian Spectrum", id: "Non-gelar · iCOP, ASP, PSP, Indonesian Spectrum" },
    summary: { en: "Academic learning, cultural immersion and community engagement, from a few weeks to a year.", id: "Pembelajaran akademik, imersi budaya dan pengabdian masyarakat, dari beberapa minggu hingga satu tahun." },
    image: media.mobility["psp-batik"],
  },
  {
    slug: "experiences",
    title: { en: "Experiences", id: "Pengalaman" },
    kind: { en: "Stories from our global community", id: "Cerita dari komunitas global kami" },
    summary: { en: "Welcome dinners, city tours, outings and farewells — in photos, videos and testimonies.", id: "Welcome dinner, city tour, jalan-jalan dan perpisahan — dalam foto, video dan testimoni." },
    image: media.mobility["cultural-night"],
  },
];

export const exchangeIntro: L = {
  en: "International students from our global partner institutions are welcome to study at Petra Christian University for one or two semesters through our Academic Exchange Program at undergraduate level, based on an existing Memorandum of Understanding (MoU) or Memorandum of Agreement (MoA) between PCU and their home university.",
  id: "Mahasiswa internasional dari institusi mitra global kami dipersilakan belajar di Universitas Kristen Petra selama satu atau dua semester melalui Program Pertukaran Akademik jenjang sarjana, berdasarkan Memorandum of Understanding (MoU) atau Memorandum of Agreement (MoA) yang berlaku antara Petra dan universitas asal.",
};

/** Fact Sheet. */
export const factSheet = {
  nomination: {
    title: { en: "1. Nomination by home institution", id: "1. Nominasi oleh institusi asal" } satisfies L,
    body: { en: "The home institution's exchange coordinator must submit an official nomination by email to head-mobility@petra.ac.id, including the student's:", id: "Koordinator pertukaran institusi asal wajib mengirim nominasi resmi melalui email ke head-mobility@petra.ac.id, berisi data mahasiswa berikut:" } satisfies L,
    fields: [
      { en: "Full name", id: "Nama lengkap" },
      { en: "Student ID number", id: "Nomor induk mahasiswa" },
      { en: "Current semester", id: "Semester saat ini" },
      { en: "Field of study / major", id: "Bidang studi / jurusan" },
      { en: "Phone or WhatsApp number", id: "Nomor telepon atau WhatsApp" },
      { en: "Email address", id: "Alamat email" },
    ] satisfies L[],
  },
  application: {
    title: { en: "2. Student application and registration", id: "2. Pendaftaran mahasiswa" } satisfies L,
    body: [
      { en: "Once the nomination has been submitted, the nominated student receives an email from the International Office of PCU with the registration instructions and application procedures.", id: "Setelah nominasi diterima, mahasiswa yang dinominasikan akan menerima email dari Kantor Urusan Internasional Petra berisi petunjuk pendaftaran dan prosedur aplikasi." },
      { en: "Complete the application form and upload all supporting documents before the deadline.", id: "Lengkapi formulir aplikasi dan unggah semua dokumen pendukung sebelum batas waktu." },
      { en: "Applications submitted after the deadline without prior notice, or with incomplete documents, will not be accepted.", id: "Aplikasi yang dikirim setelah batas waktu tanpa pemberitahuan, atau dengan dokumen tidak lengkap, tidak akan diterima." },
    ] satisfies L[],
  },
  qualification: [
    { en: "Enrolled as a full-time student at your home institution during the exchange period", id: "Terdaftar sebagai mahasiswa penuh waktu di institusi asal selama masa pertukaran" },
    { en: "Average GPA of 2.75 out of 4.0, or equivalent", id: "IPK rata-rata 2,75 dari 4,0, atau setara" },
    { en: "Open to 2nd, 3rd and 4th-year students", id: "Terbuka bagi mahasiswa tahun ke-2, ke-3 dan ke-4" },
  ] satisfies L[],
  language: { en: "Minimum TOEFL iBT 61, TOEFL PBT 500, TOEFL CBT 173, IELTS 6.0, CEFR B1 or Duolingo 100", id: "Minimal TOEFL iBT 61, TOEFL PBT 500, TOEFL CBT 173, IELTS 6.0, CEFR B1 atau Duolingo 100" } satisfies L,
  courses: [
    { en: "Minimum load: 12 credit units per semester (about 4–6 courses)", id: "Beban minimal: 12 SKS per semester (sekitar 4–6 mata kuliah)" },
    { en: "Maximum load: 18 credit units per semester (about 6–9 courses)", id: "Beban maksimal: 18 SKS per semester (sekitar 6–9 mata kuliah)" },
    { en: "Registered to one host department, but you may take non-prerequisite courses from other departments", id: "Terdaftar di satu program studi, namun dapat mengambil mata kuliah tanpa prasyarat dari program studi lain" },
  ] satisfies L[],
  passportValidity: [
    { en: "At least 6 months for a stay of up to 60 days", id: "Minimal 6 bulan untuk tinggal hingga 60 hari" },
    { en: "At least 12 months for a stay of up to 180 days", id: "Minimal 12 bulan untuk tinggal hingga 180 hari" },
    { en: "At least 18 months for a stay of up to 1 year", id: "Minimal 18 bulan untuk tinggal hingga 1 tahun" },
    { en: "At least 30 months for a stay of up to 2 years", id: "Minimal 30 bulan untuk tinggal hingga 2 tahun" },
  ] satisfies L[],
  passportNote: { en: "Scan the ID page together with the adjacent page as a single file.", id: "Pindai halaman identitas beserta halaman sebelahnya dalam satu file." } satisfies L,
  documents: [
    { en: "Colour scan of your passport identification page (see validity rules)", id: "Pindaian berwarna halaman identitas paspor (lihat ketentuan masa berlaku)" },
    { en: "CV", id: "CV" },
    { en: "Latest academic transcript", id: "Transkrip akademik terbaru" },
    { en: "Latest senior high school / vocational school diploma", id: "Ijazah SMA / SMK terakhir" },
    { en: "Proof of health insurance with all-risk protection", id: "Bukti asuransi kesehatan dengan perlindungan menyeluruh" },
    { en: "Proof of English proficiency score", id: "Bukti skor kemampuan bahasa Inggris" },
    { en: "Bank statement in your own name, in English, showing at least USD 2,000 (with the latest 3 months of transactions)", id: "Rekening koran atas nama sendiri, dalam bahasa Inggris, dengan saldo minimal USD 2.000 (beserta transaksi 3 bulan terakhir)" },
    { en: "Colour photo in formal clothes (with collar) on a plain white background, JPG/JPEG, at least 2 MB", id: "Pas foto berwarna berpakaian formal (berkerah) dengan latar putih polos, JPG/JPEG, minimal 2 MB" },
    { en: "Recommendation letter from your home university's advisor or International Office", id: "Surat rekomendasi dari dosen wali atau Kantor Internasional universitas asal" },
    { en: "Travel plan while staying in Indonesia", id: "Rencana perjalanan selama tinggal di Indonesia" },
    { en: "Statement Form (downloadable from the registration link)", id: "Statement Form (dapat diunduh dari tautan pendaftaran)" },
    { en: "Financial Guarantee Form (downloadable from the registration link)", id: "Financial Guarantee Form (dapat diunduh dari tautan pendaftaran)" },
    { en: "Medical Form (downloadable from the registration link)", id: "Medical Form (dapat diunduh dari tautan pendaftaran)" },
  ] satisfies L[],
  visa: [
    { en: "Once your registration is complete and your documents are approved, PCU applies for your study visa on your behalf.", id: "Setelah pendaftaran selesai dan dokumen disetujui, Petra akan mengajukan visa studi atas nama Anda." },
    { en: "Do NOT book flights or make travel arrangements until the International Office has confirmed that your study visa has been issued and sent you the visa document.", id: "JANGAN memesan tiket pesawat atau mengatur perjalanan sebelum Kantor Urusan Internasional mengonfirmasi visa studi Anda telah terbit dan mengirimkan dokumen visanya." },
  ] satisfies L[],
  dormitory: [
    { en: "PCU does not currently provide on-campus dormitories. Incoming exchange students are helped to arrange accommodation at an off-campus dormitory near the university that partners with PCU.", id: "Petra saat ini tidak menyediakan asrama di dalam kampus. Mahasiswa pertukaran dibantu mendapatkan akomodasi di asrama luar kampus dekat universitas yang bermitra dengan Petra." },
    { en: "You don't need to book it yourself — the International Office handles the booking. You pay for the accommodation when you arrive in Surabaya.", id: "Anda tidak perlu memesan sendiri — Kantor Urusan Internasional akan mengurus pemesanan. Pembayaran akomodasi dilakukan saat tiba di Surabaya." },
  ] satisfies L[],
};

/** Inbound mobility contacts (Fact Sheet → Connect with us). */
export const inboundContacts: { role: L; phone: string; email: string }[] = [
  { role: { en: "Director of International Office", id: "Direktur Kantor Urusan Internasional" }, phone: "+62 31 298 3865", email: "io-director@petra.ac.id" },
  { role: { en: "Head of Student Mobility Division", id: "Kepala Divisi Mobilitas Mahasiswa" }, phone: "+62 31 298 3867", email: "head-mobility@petra.ac.id" },
  { role: { en: "Staff of Student Mobility Division", id: "Staf Divisi Mobilitas Mahasiswa" }, phone: "+62 31 298 3188", email: "staff-mobility@petra.ac.id" },
];

export const coursesOffered: L = {
  en: "The list of courses offered for each academic period is shared with nominated students by email, together with the registration instructions and procedures.",
  id: "Daftar mata kuliah yang ditawarkan setiap periode akademik akan dikirim kepada mahasiswa yang dinominasikan melalui email, bersama petunjuk dan prosedur pendaftaran.",
};

/** Academic calendar for incoming exchange students. */
export const academicCalendar: { semester: L; nomination: L; application: L; begin: L; end: L }[] = [
  { semester: { en: "Fall", id: "Gasal (Fall)" }, nomination: { en: "15 May", id: "15 Mei" }, application: { en: "30 May", id: "30 Mei" }, begin: { en: "1st week of September", id: "Minggu ke-1 September" }, end: { en: "3rd week of January", id: "Minggu ke-3 Januari" } },
  { semester: { en: "Spring", id: "Genap (Spring)" }, nomination: { en: "15 November", id: "15 November" }, application: { en: "30 November", id: "30 November" }, begin: { en: "3rd week of March", id: "Minggu ke-3 Maret" }, end: { en: "2nd week of July", id: "Minggu ke-2 Juli" } },
];

export const inboundHowToApply: { title: L; body: L }[] = [
  { title: { en: "Contact your home university", id: "Hubungi universitas asal" }, body: { en: "Tell your home university's International Office or exchange coordinator you are interested, and ask about the nomination process.", id: "Sampaikan minat Anda kepada Kantor Internasional atau koordinator pertukaran universitas asal, dan tanyakan proses nominasinya." } },
  { title: { en: "Get nominated", id: "Dapatkan nominasi" }, body: { en: "Your home coordinator must officially nominate you to PCU before you can apply.", id: "Koordinator universitas asal wajib menominasikan Anda secara resmi ke Petra sebelum Anda dapat mendaftar." } },
  { title: { en: "Receive the instructions", id: "Terima petunjuk" }, body: { en: "PCU's International Office emails you the registration link, guidelines and next steps.", id: "Kantor Urusan Internasional Petra mengirim tautan pendaftaran, panduan dan langkah berikutnya melalui email." } },
  { title: { en: "Apply and upload documents", id: "Daftar dan unggah dokumen" }, body: { en: "Fill in the online form and upload all required documents before the deadline.", id: "Isi formulir online dan unggah semua dokumen yang diperlukan sebelum batas waktu." } },
  { title: { en: "Wait for confirmation", id: "Tunggu konfirmasi" }, body: { en: "We review your documents and tell you the outcome. Don't book flights until your study visa has been issued.", id: "Kami meninjau dokumen Anda dan memberi tahu hasilnya. Jangan memesan tiket sebelum visa studi terbit." } },
];

export const inboundFees = {
  intro: { en: "Exchange students under an active exchange agreement with PCU are exempt from tuition fees at PCU. You keep paying tuition to your home institution during the exchange, according to its policies.", id: "Mahasiswa pertukaran dengan perjanjian pertukaran aktif dengan Petra dibebaskan dari biaya kuliah di Petra. Anda tetap membayar biaya kuliah ke institusi asal selama masa pertukaran, sesuai kebijakannya." } satisfies L,
  ownCosts: [
    { en: "Accommodation", id: "Akomodasi" },
    { en: "Transportation and travel", id: "Transportasi dan perjalanan" },
    { en: "Passport and visa", id: "Paspor dan visa" },
    { en: "Visa and stay permit", id: "Visa dan izin tinggal" },
    { en: "Medical and health insurance", id: "Asuransi medis dan kesehatan" },
    { en: "Travel insurance", id: "Asuransi perjalanan" },
    { en: "Personal and daily living expenses", id: "Kebutuhan pribadi dan sehari-hari" },
    { en: "Any other incidental expenses", id: "Biaya tak terduga lainnya" },
  ] satisfies L[],
};

export const livingCosts = {
  intro: { en: "Prepare a reasonable budget for books, food, accommodation and daily expenses while studying in Surabaya.", id: "Siapkan anggaran yang wajar untuk buku, makan, akomodasi dan kebutuhan sehari-hari selama belajar di Surabaya." } satisfies L,
  items: [
    { item: { en: "Meals (on campus)", id: "Makan (di kampus)" }, cost: { en: "USD 1–3 per meal", id: "USD 1–3 per makan" } },
    { item: { en: "Meals (shopping mall)", id: "Makan (pusat perbelanjaan)" }, cost: { en: "USD 3–8 per meal", id: "USD 3–8 per makan" } },
    { item: { en: "Off-campus dormitory (boarding house)", id: "Asrama luar kampus (kos)" }, cost: { en: "USD 250–300 per month", id: "USD 250–300 per bulan" } },
    { item: { en: "Regular taxi", id: "Taksi reguler" }, cost: { en: "USD 5–15 per trip, by distance", id: "USD 5–15 per perjalanan, tergantung jarak" } },
    { item: { en: "Gojek or Grab", id: "Gojek atau Grab" }, cost: { en: "USD 2–6 per trip, by distance", id: "USD 2–6 per perjalanan, tergantung jarak" } },
    { item: { en: "Personal expenses", id: "Kebutuhan pribadi" }, cost: { en: "USD 150–300 per month, by lifestyle", id: "USD 150–300 per bulan, tergantung gaya hidup" } },
  ] satisfies { item: L; cost: L }[],
};

/** Short-Term Programs intro (Doc). Programme details live in mobility.ts → signatureProgrammes. */
export const shortTermIntro: L = {
  en: "Petra Christian University (PCU) offers a variety of short-term international programs that provide students with opportunities to experience academic learning, cultural immersion, community engagement, and cross-cultural collaboration. Through these programs, international students can explore Indonesia, develop new perspectives, build global connections, and gain meaningful learning experiences beyond the classroom.",
  id: "Universitas Kristen Petra menawarkan beragam program internasional jangka pendek yang memberi mahasiswa kesempatan merasakan pembelajaran akademik, imersi budaya, pengabdian masyarakat, dan kolaborasi lintas budaya. Melalui program ini, mahasiswa internasional dapat menjelajahi Indonesia, mengembangkan perspektif baru, membangun jejaring global, dan memperoleh pengalaman belajar yang bermakna di luar kelas.",
};

/** Experiences (Doc → "Stories from Our Global Community"). Photos are stand-ins until KUI sends the event photos. */
export const inboundExperiences = {
  intro: { en: "Discover firsthand experiences from students who have joined international programs and activities at Petra Christian University. Each story highlights a journey of learning, cultural discovery, personal growth and meaningful connections across borders.", id: "Temukan pengalaman langsung mahasiswa yang mengikuti program dan kegiatan internasional di Universitas Kristen Petra. Setiap cerita menyoroti perjalanan belajar, penemuan budaya, pertumbuhan pribadi, dan hubungan bermakna lintas batas." } satisfies L,
  events: [
    { title: { en: "Welcome Dinner", id: "Welcome Dinner" }, images: [media.mobility["cultural-night"], media.mobility["international-day"]] },
    { title: { en: "City Tour", id: "City Tour" }, images: [media.mobility["museum-group"], media.mobility["spectra-museum"], media.mobility["psp-bus"]] },
    { title: { en: "Outing", id: "Outing" }, images: [media.mobility.bromo, media.mobility["asp-group"], media.mobility["spectra-cooking"]] },
    { title: { en: "Farewell Dinner", id: "Farewell Dinner" }, images: [media.mobility["asp-event"], media.mobility.henna] },
  ] satisfies { title: L; images: Img[] }[],
};

/** Visa overview. Drafted from Indonesian immigration practice — TO CONFIRM by KUI before publishing. */
export const visa = {
  types: [
    {
      name: { en: "Student visa (study permit)", id: "Visa pelajar (izin belajar)" },
      who: { en: "Exchange and degree students staying a semester or longer", id: "Mahasiswa pertukaran dan bergelar yang tinggal satu semester atau lebih" },
      note: { en: "Petra acts as your sponsor. After arrival it is converted into a limited-stay permit (ITAS/KITAS).", id: "Petra bertindak sebagai sponsor. Setelah tiba, visa dikonversi menjadi izin tinggal terbatas (ITAS/KITAS)." },
    },
    {
      name: { en: "Visit visa / visa on arrival", id: "Visa kunjungan / visa on arrival" },
      who: { en: "Short programmes of a few weeks", id: "Program singkat beberapa minggu" },
      note: { en: "Eligibility depends on your nationality and the activity. Check with KUI before you book.", id: "Kelayakan bergantung pada kewarganegaraan dan kegiatan. Konsultasikan dengan KUI sebelum memesan tiket." },
    },
  ] satisfies { name: L; who: L; note: L }[],
  /** Process from Indonesian university and government guides — see visaYarsi, visaBinus sources. */
  steps: [
    { title: { en: "Letter of acceptance", id: "Surat penerimaan" }, body: { en: "Petra accepts you into your programme.", id: "Petra menerima Anda di program pilihan." } },
    { title: { en: "Study permit", id: "Izin belajar" }, body: { en: "Petra, as your sponsor, requests a study permit from the Ministry.", id: "Petra, sebagai sponsor, mengajukan izin belajar ke Kementerian." } },
    { title: { en: "Visa approval", id: "Persetujuan visa" }, body: { en: "Petra applies for your visa; you receive the approval or e-visa.", id: "Petra mengajukan visa Anda; Anda menerima persetujuan atau e-visa." } },
    { title: { en: "Arrive in Indonesia", id: "Tiba di Indonesia" }, body: { en: "Enter Indonesia with your visa and passport.", id: "Masuk ke Indonesia dengan visa dan paspor." } },
    { title: { en: "Biometrics & ITAS", id: "Biometrik & ITAS" }, body: { en: "Register biometrics at immigration and receive your stay permit (ITAS/KITAS).", id: "Rekam biometrik di imigrasi dan terima izin tinggal (ITAS/KITAS)." } },
    { title: { en: "Report to KUI", id: "Lapor ke KUI" }, body: { en: "KUI completes your local registration in your first week.", id: "KUI menyelesaikan pelaporan setempat di minggu pertama." } },
  ] satisfies { title: L; body: L }[],
  documents: [
    { en: "Letter of acceptance", id: "Surat penerimaan" },
    { en: "Passport — at least 18 months valid for a one-year stay (longer for two years)", id: "Paspor — berlaku minimal 18 bulan untuk tinggal satu tahun (lebih lama untuk dua tahun)" },
    { en: "Passport-size photos", id: "Pas foto" },
    { en: "Proof of funds", id: "Bukti dana" },
    { en: "Health certificate", id: "Surat keterangan sehat" },
  ] satisfies L[],
  cost: { en: "Visa and stay-permit fees follow current Indonesian immigration rates. KUI will confirm the amount for your programme.", id: "Biaya visa dan izin tinggal mengikuti tarif imigrasi Indonesia yang berlaku. KUI akan mengonfirmasi jumlahnya untuk program Anda." } satisfies L,
};

/** Living in Indonesia. Drafted general guidance — TO CONFIRM by KUI. */
export const dosAndDonts = {
  dos: [
    { en: "Dress modestly on campus and at places of worship", id: "Berpakaian sopan di kampus dan tempat ibadah" },
    { en: "Use your right hand to give, receive and eat", id: "Gunakan tangan kanan untuk memberi, menerima dan makan" },
    { en: "Carry a copy of your passport and stay permit", id: "Bawa salinan paspor dan izin tinggal" },
    { en: "Tell KUI if you change address or travel outside Surabaya", id: "Beri tahu KUI jika pindah alamat atau bepergian ke luar Surabaya" },
    { en: "Greet people and ask before taking photos of them", id: "Sapa orang dan minta izin sebelum memotret mereka" },
  ] satisfies L[],
  donts: [
    { en: "Don't work, paid or unpaid, on a student visa", id: "Jangan bekerja, berbayar atau tidak, dengan visa pelajar" },
    { en: "Don't bring or use drugs — penalties in Indonesia are severe", id: "Jangan membawa atau memakai narkoba — hukumannya sangat berat di Indonesia" },
    { en: "Don't overstay your visa or permit", id: "Jangan melewati masa berlaku visa atau izin tinggal" },
    { en: "Don't show public displays of affection", id: "Jangan bermesraan di tempat umum" },
    { en: "Don't speak disrespectfully about religion or the state", id: "Jangan berbicara tidak hormat tentang agama atau negara" },
  ] satisfies L[],
};

