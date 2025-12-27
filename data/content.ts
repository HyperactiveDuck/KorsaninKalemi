import { Book } from '../types';

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
    images: {
      image1: "[PLACEHOLDER_BOOK_COVER_1]",
      image2: "[PLACEHOLDER_BOOK_COVER_2]",
      image3: "[PLACEHOLDER_BOOK_COVER_3]"
    },
    headline: {
      line1: "HAİNİN MÜHRÜ",
      line2: "SERİSİ YAYINDA"
    },
    description: "Hainin Mührü serisi şimdi yayında! Okumak için hemen tıkla!",
    link: "https://www.dokuz.com/hainin-muhru" // Assuming a link, or just use #
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
  library: [
    {
      id: "1",
      title: "Gece Yarısı Fısıltıları",
      author: "Övgü Deveci Safi",
      cover: "https://picsum.photos/seed/book1/600/900",
      description: "Şehrin karanlık sokaklarında kaybolan ruhların birbirine dolanan hikayeleri. Her fısıltı bir itiraf, her gölge bir sığınak.",
      purchaseLink: "#",
      chapters: [
        {
          id: "c1",
          title: "Bölüm I: Karanlık Başlangıç",
          subtitle: "Gecenin ilk saatleri",
          comments: [
            { id: "cc1", user: "Okur123", text: "Bu bölüm girişi çok atmosferik.", date: "2 gün önce" },
            { id: "cc2", user: "KitapKurdu", text: "Betimlemeler harika.", date: "1 hafta önce" }
          ],
          content: [
            {
              id: "p1_1",
              text: "Gece, şehrin üzerine ağır bir yorgan gibi çökmüştü. Sokak lambaları, kaldırımlarda titreşen gölgeler yaratıyor, sanki geçmişin hayaletleri dans ediyordu. Leyla, paltosunun yakasını kaldırarak rüzgara karşı yürüdü. Aklında tek bir soru vardı: Geri dönmek mümkün müydü?",
              comments: [
                { id: "c1", user: "Melis", text: "Bu metaforu çok sevdim, 'ağır bir yorgan' hissi çok tanıdık.", date: "1 saat önce" },
                { id: "c2", user: "Caner", text: "Leyla'nın çaresizliği şimdiden hissediliyor.", date: "3 saat önce" }
              ]
            },
            {
              id: "p1_2",
              text: "Kaldırımlar ıslaktı ve her adımında yankılanan topuk sesleri, boş sokakta bir tehdit gibi çınlıyordu. Bir zamanlar tanıdık olan bu mahalle, şimdi ona yabancı bir labirent gibi geliyordu. Her köşebaşı, unutmak istediği bir anıyı saklıyordu.",
              comments: [
                { id: "c3", user: "Elif", text: "Mekan tasviri çok canlı.", date: "1 gün önce" }
              ]
            },
            { id: "p1_3", text: "Birden durdu. Uzaktan gelen bir melodi, rüzgarın uğultusuna karıştı. Bu melodi, çocukluğunun en masum günlerinden, annesinin mırıldandığı o ninniden başkası değildi. Ama burada, bu saatte, bu karanlıkta kim onu hatırlıyor olabilirdi?" }
          ]
        },
        {
          id: "c2",
          title: "Bölüm II: Eski Sahaf",
          subtitle: "Tozlu rafların sırrı",
          content: [
            { id: "p2_1", text: "Eski sahafın kapısında durdu. Tozlu camın ardında, yıllardır aradığı o kitabı gördüğünü sandı. İçeri girdiğinde, havada eski kağıt ve vanilya kokusu vardı. Bu koku, onu çocukluğuna, o masum günlere geri götürdü." },
            { id: "p2_2", text: "Raflar tavana kadar yükseliyordu, her biri binlerce hayatı, binlerce dünyayı barındırıyordu. Kitapların sırtlarındaki altın yaldızlı harfler, loş ışıkta parlıyordu. Parmaklarını bir cildin üzerinde gezdirdi; deri kapak soğuk ve pürüzsüzdü." },
            { id: "p2_3", text: "Yaşlı adam tezgahın arkasından başını kaldırdı. Gözlerinde, binlerce hikayenin ağırlığı vardı. Gözlüklerini burnunun ucuna indirdi ve derin bir iç çekti. 'Seni bekliyordum,' dedi fısıltıyla. Leyla ürperdi. Kaderin ağları, görünmez ipliklerle örülmeye başlamıştı bile." }
          ]
        },
        {
          id: "c3",
          title: "Bölüm III: Sırların Ağırlığı",
          subtitle: "Gerçekler ortaya çıkıyor",
          content: [
            { id: "p3_1", text: "Kitabın kapağını açtığında, sayfaların arasından düşen siyah beyaz fotoğraf yere süzüldü. Eğilip aldı. Fotoğraftaki yüz, aynadaki yüzüne o kadar benziyordu ki, nefesi kesildi." },
            { id: "p3_2", text: "'Bu o,' dedi yaşlı adam, sanki Leyla'nın zihnini okumuş gibi. 'Büyükannen. O da senin gibi sorularla gelmişti buraya. Ve o da senin gibi cevapları bu kitapta aramıştı.'" },
            { id: "p3_3", text: "Leyla'nın elleri titremeye başladı. Yıllardır ailesi hakkında bildiği her şey, bu tozlu dükkanda, bu yabancı adamın sözleriyle sarsılıyordu. Gerçek, bazen en iyi kurgulanmış yalandan bile daha tuhaftı." }
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Camdan Kuleler",
      author: "Övgü Deveci Safi",
      cover: "https://picsum.photos/seed/book2/600/900",
      description: "Modern dünyanın kırılganlığı ve insan ilişkilerinin şeffaf ama keskin doğası üzerine bir deneme. Yükselirken kaybettiğimiz zemin üzerine.",
      purchaseLink: "#",
      chapters: [
        {
          id: "c1",
          title: "Zirve Yalnızlığı",
          content: [
            { id: "p1_1", text: "Plazalar, gökyüzüne meydan okuyan camdan kuleler gibi yükseliyordu. İçlerinde, zamanla yarışan, duygularını toplantı odalarında unutan insanlar yaşıyordu. Kerem, 42. kattaki ofisinden aşağıya, karınca gibi görünen arabalara baktı." },
            { id: "p1_2", text: "Aşağıdaki kaos ona uzaktı, ama içindeki kaos her geçen saniye büyüyordu. Sessizlik, bu yükseklikte en gürültülü şeydi. Camın arkasındaki dünya kusursuz görünüyordu; lekesiz, düzenli ve soğuk." },
            { id: "p1_3", text: "Telefonu titredi. Bir bildirim daha. Bir talep daha. Bir beklenti daha. Modern insanın prangaları görünmezdi, ama ağırlıkları demirden daha fazlaydı." }
          ]
        },
        {
          id: "c2",
          title: "Kırılma Noktası",
          content: [
            { id: "p2_1", text: "Başarı neydi? Bir banka hesabındaki rakamlar mı, yoksa akşam eve döndüğünde seni karşılayan sıcak bir gülümseme mi? Kerem, elindeki kahve bardağını sıkıca kavradı. Camın soğukluğu parmak uçlarını yaktı." },
            { id: "p2_2", text: "O an, camın ne kadar kırılgan olduğunu hatırladı. Tıpkı hayatı gibi. Tek bir çatlak, her şeyi yerle bir edebilirdi. Ve o çatlak, ruhunda çoktan oluşmaya başlamıştı. Dün geceki tartışma, bardağı taşıran son damla değil, bardağı kıran çekiç darbesiydi." },
            { id: "p2_3", text: "Çantasını aldı. Bilgisayarını kapattı. Asansöre doğru yürürken, arkasına bakmadı. Kuleler yerinde duracaktı, ama o, kendi zeminini bulmak zorundaydı." }
          ]
        }
      ]
    }
  ] as Book[]
};