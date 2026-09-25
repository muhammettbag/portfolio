export const portfolioData = {
  personalInfo: {
    name: "Muhammet Bağ",
    role: "Backend Developer",
    description:
      "Bilgisayar Mühendisliği mezunu bir geliştirici olarak 1 yıllık profesyonel sektör tecrübesine sahibim. Bu süreçte web, mobil ve masaüstü uygulamaların backend geliştirme süreçlerinde görev aldım. RESTful API geliştirme, veritabanı işlemleri, sistem ve cihaz entegrasyonları gibi backend süreçlerinde deneyim kazandım. ERP sistemleri üzerinde teknik destek sağlayarak müşterilerin karşılaştığı problemlerin çözüm süreçlerinde aktif rol aldım. Farklı projelerde edindiğim deneyimleri geliştirerek yeni teknolojiler öğrenmeye devam ediyorum.",
    email: "muhammetbag7@gmail.com",
    github: "https://github.com/muhammetbag",
    linkedin: "https://www.linkedin.com/in/muhammetbag/",
    cvUrl: "/cv/MuhammetBag_CV.pdf", // CV dosyanız bu isimle public/cv içine atılacak
  },
  experience: [
    {
      id: 1,
      title: ".NET Developer",
      company: "Dinosoft",
      date: "Haziran 2025 - Temmuz 2026",
      description:
        ".NET teknolojilerini kullanarak ERP muhasebe yazılımlarının bakım ve entegrasyon süreçlerinde aktif rol aldım. POS cihazları da dahil olmak üzere çeşitli fiziksel donanımların yazılım sistemleriyle entegrasyonunu gerçekleştirdim. İnsansız market mobil uygulamasının sistem kurulumu ve cihaz entegrasyon süreçlerini yürüttüm. Veritabanı indeks optimizasyonunu ve periyodik yedekleme işlemlerini otomatize eden, Google Drive API entegrasyonuyla bulut yedeklemesi yapan bir masaüstü uygulaması geliştirdim.",
    },
  ],
  skills: [
    ".NET",
    "C#",
    "ASP.NET Core",
    "React",
    "JavaScript",
    "SQL Server",
    "PostgreSQL",
    "Docker",
    "Git",
    "Linux",
    "Flutter",
  ],
  projects: [
    {
      id: 1,
      title: "VERİ TABANI BAKIM VE YEDEKLEME OTOMASYONU",
      summary:
        "SQL Server veritabanları için indeks fragmantasyon analizi, optimizasyon ve periyodik yedekleme operasyonlarını yöneten, arka planda (background) çalışan bir masaüstü otomasyon aracıdır.",
      fullDescription: "SQL Server veritabanları için indeks fragmantasyon analizi, optimizasyon ve periyodik yedekleme operasyonlarını yöneten, arka planda (background) çalışan bir masaüstü otomasyon aracıdır. Windows Görev Zamanlayıcı (Task Scheduler) entegrasyonuyla görevler programlanmış; kullanıcı herhangi bir manuel müdahalede bulunmadan, uygulama arka planda sessizce çalışarak belirlenen zamanlarda yedekleme ve bakım işlemlerini otomatik olarak gerçekleştirmektedir.",
      tags: ["C#", "Masaüstü Otomasyon"],
      imageUrl: "/images/projects/dino0.png",
      images: [
        "/images/projects/dino0.png",
        "/images/projects/dino1.png",
        "/images/projects/dino3.png"
      ],
    },
    {
      id: 3,
      title: "AKILLI ŞEHİR ROTA ÖNERİ SİSTEMİ - Mobil Uygulama",
      summary:
        "Erzurum şehir içi ulaşımına yönelik Flutter ile geliştirilmiş mobil platform. Görme engelli kullanıcılar için GPS ve sesli asistan desteği.",
      fullDescription: "Erzurum şehir içi ulaşımına yönelik Flutter ile geliştirilmiş mobil platform. Kullanıcının mevcut konumu ve varış noktası alınarak OSRM üzerinden işlenmekte, durak bilgisi gerekmeksizin otobüs hattı ve rota önerisi sunulmaktadır. Görme engeli bulunan kullanıcılar için GPS takipli, TTS ve STT destekli erişilebilirlik modu geliştirilmiştir.",
      tags: [
        "Flutter",
        ".NET 8",
        "SignalR",
        "PostgreSQL",
        "Railway.app",
        "JWT",
        "iyzico",
      ],
      imageUrl: "/images/projects/rota1.jpeg",
      images: [
        "/images/projects/rota1.jpeg",
        "/images/projects/rota2.jpeg",
        "/images/projects/rota3.jpeg",
        "/images/projects/rota4.jpeg",
        "/images/projects/rota5.jpeg"
      ],
    },
    {
      id: 4,
      title: "MÜDEK AKREDİTASYON VE SÜREÇ YÖNETİM SİSTEMİ",
      summary:
        "MÜDEK, akreditasyon süreçlerini dijitalleştiren ve eğitim kalite standartlarını yöneten bir süreç takip platformudur.",
      fullDescription: "MÜDEK, akreditasyon süreçlerini dijitalleştiren ve eğitim kalite standartlarını yöneten bir süreç takip platformudur. Backend geliştirme süreçlerinde aktif rol aldığım bu projede, sistem altyapısı Clean Architecture prensipleri ve CQRS tasarım deseni kullanılarak geliştirilmiştir.",
      tags: [
        ".NET Core",
        "Clean Architecture",
        "CQRS",
        "React",
        "MySQL",
        "Serilog",
        "Docker",
      ],
      imageUrl: "/images/projects/Backend.png",
      images: [
        "/images/projects/Backend.png",
        "/images/projects/Backend (1).png",
        "/images/projects/Backend (2).png",
        "/images/projects/Backend (3).png"
      ],
    },
    {
      id: 5,
      title: "Akıllı Performans Yönetimi ve Koçluk Uygulaması",
      summary:
        "Kullanıcıların bireysel verimliliklerini ve potansiyellerini en üst düzeye çıkarmaları için tasarlanmış, oyunlaştırılmış mobil koçluk platformu.",
      fullDescription: "Kullanıcıların bireysel verimliliklerini ve potansiyellerini en üst düzeye çıkarmaları için tasarlanmış, veri odaklı ve oyunlaştırılmış kapsamlı bir mobil koçluk platformudur. Pomodoro odaklanma seanslarını, hedef tamamlama oranlarını analiz eder.",
      tags: ["Flutter"],
      imageUrl: "/images/projects/kocluk1.jpeg",
      images: [
        "/images/projects/kocluk1.jpeg",
        "/images/projects/kocluk2.jpeg",
        "/images/projects/kocluk_3.png"
      ]
    },
    {
      id: 2,
      title: "AI MARKET - Mobil",
      summary:
        "İnsansız market konseptine yönelik geliştirilmiş mobil uygulama. Flutter ile kullanıcı arayüzleri tasarlanması ve QR entegrasyonu süreçleri.",
      fullDescription: "İnsansız market konseptine yönelik geliştirilmiş mobil uygulama. Flutter ile kullanıcı arayüzleri tasarlanması, markete girişte kullanılan QR kod oluşturma ve kampanya bildirimlerinin iletildiği Push Notification altyapısının entegrasyonu süreçlerinde yer alındım.",
      tags: ["Flutter", "Dart"],
      imageUrl: "",
      images: [],
    },
  ],
};
