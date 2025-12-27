import { Book } from '../types';
import { library } from './library';

export const CONTENT = {

  hero: {
    image: "https://picsum.photos/seed/businessnoir/1600/1200",
    headline: {
      line1: "ANLARI",
      line2: "ÖLÜMSÜZLEŞTİRİN",
      line3: "ÖVGÜ DEVECİ SAFİ İLE"
    },
    subtext: "Mürekkep ve hayal gücüyle insan duygularının derinliklerini keşfetmek. Kalbin görülmeyen köşelerine bir yolculuk.",
    authorSubtitle: "Bu hikâye bittiği gibi kumlara yazılacak ve derin denizin tek bir hırçın dalgasıyla silinip gidecek. Yine de devam etmek isterseniz, ben kimim ki size engel olacağım?",
    cta: "Son Eseri Oku"
  },
  about: {
    books: [
      {
        id: 1,
        image: "[PLACEHOLDER_BOOK_COVER_1]",
        title: "Gece Yarısı Fısıltıları",
        description: "Şehrin karanlık sokaklarında kaybolan ruhların birbirine dolanan hikayeleri.",
        purchaseLinks: [
          { name: "D&R", url: "https://www.dr.com.tr" },
          { name: "Kitapyurdu", url: "https://www.kitapyurdu.com" },
          { name: "Amazon", url: "https://www.amazon.com.tr" }
        ],
        readLink: "#"
      },
      {
        id: 2,
        image: "[PLACEHOLDER_BOOK_COVER_2]",
        title: "Camdan Kuleler",
        description: "Modern dünyanın kırılganlığı ve insan ilişkilerinin şeffaf ama keskin doğası.",
        purchaseLinks: [
          { name: "D&R", url: "https://www.dr.com.tr" },
          { name: "BKM Kitap", url: "https://www.bkmkitap.com" },
          { name: "Idefix", url: "https://www.idefix.com" }
        ],
        readLink: "#"
      },
      {
        id: 3,
        image: "https://placehold.co/600x900/000000/FFFFFF/png?text=?",
        title: "Yakında...",
        description: "Çok Yakında sizlerle...",
        purchaseLinks: [],
        readLink: "#"
      }
    ],
    headline: {
      line1: "HAİNİN MÜHRÜ",
      line2: "SERİSİ YAYINDA"
    },
    description: "Hainin Mührü serisi şimdi yayında! Okumak için hemen tıkla!",
    link: "#"
  },
  philosophy: {
    eyebrow: "Yazar Hakkında",
    headline: {
      top: "BEN",
      bottom: "KİMİM?"
    },
    description: "1995 yılında Ankara’da doğdum. Hacettepe Üniversitesi Güzel Sanatlar Fakültesi Grafik Tasarım Bölümü’nden mezun oldum. Çocukluğumdan beri hayalini kurduğum yazarlık yolculuğuna, kurmaca dünyalar ve güçlü karakterler yaratarak devam ediyorum. Hainin Mührü isimli serimin ilk iki kitabı, Mayıs 2025’te Dokuz Yayınları tarafından yayımlandı. Şu anda serinin üçüncü kitabı üzerinde çalışıyorum.",
    cta: "İletişime Geçin"
  },
  services: {
    images: {
      bigVertical: "https://picsum.photos/seed/confidentwoman/800/1200",
      smallOverlap: "https://picsum.photos/seed/hands/600/800"
    },
    headline: {
      line1: "BENİ",
      line2: "TAKİP EDİN",
      line3: "SOSYAL MEDYA"
    },
    // You can change the placeholder images for the videos below.
    // thumbnail: URL of the video thumbnail
    // link: URL of the YouTube video
    videos: [
      { id: 1, thumbnail: "https://picsum.photos/seed/video1/600/338", title: "Yazarlık Yolculuğum: Nasıl Başladım?", link: "#" },
      { id: 2, thumbnail: "https://picsum.photos/seed/video2/600/338", title: "Karakter Yaratma Süreci", link: "#" },
      { id: 3, thumbnail: "https://picsum.photos/seed/video3/600/338", title: "Hainin Mührü: Soru & Cevap", link: "#" }
    ],
    socials: [
      { platform: "YouTube", url: "https://www.youtube.com/@ovgudeveci", icon: "Youtube" },
      { platform: "Instagram", url: "https://www.instagram.com/ovgudeveci/?hl=tr", icon: "Instagram" }
    ]
  },
  signing: {
    headline: "İMZA GÜNLERİ",
    events: [
      { id: 1, city: "İstanbul", date: "15 Ekim 2025", venue: "Tüyap Kitap Fuarı", location: "Salon 2, Stand 2104" },
      { id: 2, city: "Ankara", date: "22 Ekim 2025", venue: "ATO Congresium", location: "Büyük Salon" },
      { id: 3, city: "İzmir", date: "5 Kasım 2025", venue: "Fuar İzmir", location: "C Holü" }
    ]
  },
  library
};