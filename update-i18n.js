const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const tr = JSON.parse(fs.readFileSync('messages/tr.json', 'utf8'));

const enPages = {
  "About": {
    "title": "About Us",
    "subtitle": "Experience, Rigor, and a User-Centric Approach.",
    "hello": "Hello, we’re Tecrix",
    "helloDesc": "You’re here to build something meaningful, and we’re here to help make it happen. As product experts, designers, and engineers, we plug into your team to sharpen your vision, cut through noise, and get you from idea to traction with the leanest, smartest path forward.",
    "whyUs": "Why Us",
    "whyUsDesc": "Because we’ve been in your shoes. Tecrix was built by ex-founders who’ve launched startups, failed fast, raised capital, exited, and everything in between. That journey taught us the hard truths of turning vision into products that actually succeed.",
    "beyondWork": "Beyond work",
    "beyondWorkDesc": "We regularly organize all-hand events to meet as a team and do fun stuff together.",
    "meetFounders": "Meet the Founders",
    "meetFoundersDesc": "Our founding team started their journeys in the corporate world. They studied lean product development through building startups from the ground up with very few resources.",
    "meetTeam": "Meet the Team",
    "meetTeamDesc": "We have a rigorous screening process to identify the best talent, from inception, UX/UI design, and development."
  },
  "ServicesPage": {
    "title": "We design & build innovative products focused on user’s needs",
    "subtitle": "Together, we can transform your vision into a thriving business, be it through a Minimum Viable Product, UX/UI services, or scaling support for your company.",
    "howWeWork": "How we work",
    "howWeWorkDesc": "We believe there are no excuses to build anything less than great technology products. The core of our operations lies in helping you craft and launch tailored, innovative solutions designed to delight your users.",
    "extendedTeam": "Your extended team of co-founders",
    "extendedTeamDesc": "At our core, we design and build high-quality, user-centric software products for entrepreneurs and business leaders.",
    "tangibleResults": "Tangible results",
    "tangibleResultsDesc": "We have an enviable track record of helping two-thirds of our clients achieve VC funding in an ecosystem where only ~0.05% of startups ever see that landmark.",
    "topTalent": "Top Talent",
    "topTalentDesc": "We work with the best and brightest in tech talent to ensure you get high-quality tech architecture.",
    "provenTrack": "Proven Track Record",
    "provenTrackDesc": "With over 80 successful projects delivered, our product, UX/UI, and software development teams consistently turn ideas into impactful digital solutions.",
    "businessMindset": "Business Mindset",
    "businessMindsetDesc": "We know there is more to a successful product than technology, so we will always look at your product from a business standpoint.",
    "userCentric": "User-Centric Approach",
    "userCentricDesc": "We value your end-user above specifications. We take the time to understand your client’s needs and desires."
  },
  "Pricing": {
    "title": "Recent Examples",
    "subtitle": "Here are some examples of projects we worked on over the last few months. This will help you understand how pricing can vary depending on factors like size and complexity.",
    "examples": [
      { "title": "Community Management Platform", "duration": "3 months", "price": "€40k", "desc": "An MVP for a Q&A platform for the beauty industry." },
      { "title": "Arts Marketplace", "duration": "2 months", "price": "€18k", "desc": "Marketplace built to serve the specific needs of an Art’s niche." },
      { "title": "API Middleware Connector", "duration": "5 months", "price": "€90k", "desc": "Software to seamlessly integrate several different third parties in a drag and drop interface." },
      { "title": "Proptech Cloud", "duration": "5 months", "price": "€350k", "desc": "AI tool that analyses several data-points related to a certain geographic area and outputs the forward-looking value of real estate assets." },
      { "title": "Legaltech", "duration": "2 months", "price": "€100k", "desc": "An MVP for a complex AI tool that analyses public rules on securities and advises front-office bankers." }
    ],
    "howWeGet": "How We Get to Our Pricing",
    "howWeGetDesc": "Our pricing is reflected by our lean, user-centric approach to product innovation and software development. This, combined with top industry talent, means our small focused teams deliver projects on time and on budget.",
    "seedProject": "Seed Project Explained",
    "seedProjectDesc": "Our Seed program is a purpose-agnostic app with a highly modular microservices architecture composed by a group of components that, when combined, can be the foundation of a project."
  },
  "Tech": {
    "title": "The tech behind our cutting-edge solutions",
    "subtitle": "Where Lean frameworks & Product innovation meets technical expertise",
    "toolkit": "Our tech toolkit at a glance",
    "toolkitDesc": "We dive deep into your project’s needs to ensure we select the best tools and frameworks for your product.",
    "fullStack": "Full-Stack Applications",
    "fullStackDesc": "When you need a comprehensive full-stack web application, we handle everything from Kubernetes Cluster setup to frontend and backend development.",
    "ai": "Artificial Intelligence",
    "aiDesc": "We develop sophisticated algorithms and integrate machine learning techniques.",
    "dataIntensive": "Data-Intensive Applications",
    "dataIntensiveDesc": "We adeptly manage large-scale databases and integrate cutting-edge analytics and machine learning.",
    "mobile": "Mobile Applications (iOS & Android)",
    "mobileDesc": "We design user-friendly interfaces, ensure optimal performance, and integrate cross-platform compatibility."
  },
  "CaseStudiesPage": {
    "title": "Case Studies",
    "subtitle": "Where Lean frameworks & Product innovation meets technical expertise",
    "studies": [
      { "category": "AI Development", "title": "Auto Repossession Industry", "desc": "Our client is a service provider empowering major players in the vehicle recovery ecosystem." },
      { "category": "AI Development", "title": "Anomaly Detection System", "desc": "FreshAir Sensor offers innovative monitoring devices to detect smoking events and other air-quality anomalies." },
      { "category": "AI Development", "title": "OCR to Digitize Document Data Extraction", "desc": "Based in the United States, this client specializes in medical claims management." },
      { "category": "Mobile App Development", "title": "Moon Tower Tickets", "desc": "The traditional way of purchasing tickets for any small or midscale event requires the customer to travel." },
      { "category": "Mobile App Development", "title": "Stemboard", "desc": "An ed-tech portal where everything is digitalized, from conducting classes to assignment submissions." },
      { "category": "Software Development", "title": "Codebasics", "desc": "Empowering Data Analytics, AI, and Data Science Students with an Immersive Learning Platform." },
      { "category": "Data Analytics", "title": "Fraud Analytics", "desc": "Built a heuristics-based GOFAI engine to process & analyze all the transactions." }
    ]
  }
};

const trPages = {
  "About": {
    "title": "Hakkımızda",
    "subtitle": "Deneyim, Titizlik ve Kullanıcı Odaklı Yaklaşım.",
    "hello": "Merhaba, biz Tecrix'iz",
    "helloDesc": "Anlamlı bir şeyler inşa etmek için buradasınız ve biz bunun gerçekleşmesine yardımcı olmak için buradayız. Ürün uzmanları, tasarımcılar ve mühendisler olarak, vizyonunuzu netleştirmek ve fikirden çekişe kadar en akıllı yolla ilerlemenizi sağlamak için ekibinize katılıyoruz.",
    "whyUs": "Neden Biz",
    "whyUsDesc": "Çünkü sizin yerinizdeydik. Tecrix, start-up'lar kuran, hızlı başarısız olan, sermaye toplayan ve her şeyi yaşamış eski kurucular tarafından oluşturuldu.",
    "beyondWork": "İşin ötesinde",
    "beyondWorkDesc": "Ekip olarak buluşmak ve birlikte eğlenceli şeyler yapmak için düzenli olarak etkinlikler düzenliyoruz.",
    "meetFounders": "Kurucularla Tanışın",
    "meetFoundersDesc": "Kurucu ekibimiz yolculuklarına kurumsal dünyada başladı. Çok az kaynakla sıfırdan girişimler kurarak yalın ürün geliştirmeyi incelediler.",
    "meetTeam": "Ekiple Tanışın",
    "meetTeamDesc": "Başlangıçtan, UX/UI tasarımına ve geliştirmeye kadar en iyi yetenekleri belirlemek için titiz bir tarama sürecimiz var."
  },
  "ServicesPage": {
    "title": "Kullanıcı ihtiyaçlarına odaklı yenilikçi ürünler tasarlıyor ve inşa ediyoruz",
    "subtitle": "Birlikte, vizyonunuzu Minimum Uygulanabilir Ürün, UX/UI hizmetleri veya şirketiniz için ölçeklendirme desteğiyle gelişen bir işletmeye dönüştürebiliriz.",
    "howWeWork": "Nasıl çalışıyoruz",
    "howWeWorkDesc": "Harika teknoloji ürünlerinden daha azını inşa etmek için hiçbir mazeret olmadığına inanıyoruz. Operasyonlarımızın merkezinde, kullanıcılarınızı memnun edecek yenilikçi çözümler üretmenize ve başlatmanıza yardımcı olmak yatıyor.",
    "extendedTeam": "Genişletilmiş kurucu ortaklar ekibiniz",
    "extendedTeamDesc": "Özümüzde, girişimciler ve iş liderleri için yüksek kaliteli, kullanıcı odaklı yazılım ürünleri tasarlıyor ve inşa ediyoruz.",
    "tangibleResults": "Somut sonuçlar",
    "tangibleResultsDesc": "Müşterilerimizin üçte ikisinin VC finansmanı elde etmesine yardımcı olma konusunda kıskanılacak bir geçmişe sahibiz.",
    "topTalent": "En İyi Yetenek",
    "topTalentDesc": "Yüksek kaliteli teknoloji mimarisi almanızı sağlamak için teknoloji yeteneklerindeki en iyi ve en parlak kişilerle çalışıyoruz.",
    "provenTrack": "Kanıtlanmış Geçmiş",
    "provenTrackDesc": "Teslim edilen 80'den fazla başarılı projeyle ekiplerimiz fikirleri etkili dijital çözümlere dönüştürüyor.",
    "businessMindset": "İş Zihniyeti",
    "businessMindsetDesc": "Başarılı bir üründe teknolojiden daha fazlası olduğunu biliyoruz, bu nedenle ürününüze her zaman ticari açıdan bakacağız.",
    "userCentric": "Kullanıcı Odaklı Yaklaşım",
    "userCentricDesc": "Son kullanıcınıza özelliklerden daha çok değer veriyoruz. Müşterinizin ihtiyaçlarını ve arzularını anlamak için zaman ayırıyoruz."
  },
  "Pricing": {
    "title": "Son Örnekler",
    "subtitle": "İşte son birkaç ayda üzerinde çalıştığımız projelerden bazı örnekler. Bu, fiyatlandırmanın boyut ve karmaşıklık gibi faktörlere bağlı olarak nasıl değişebileceğini anlamanıza yardımcı olacaktır.",
    "examples": [
      { "title": "Topluluk Yönetimi Platformu", "duration": "3 ay", "price": "40 bin €", "desc": "Güzellik sektörü için bir Soru-Cevap platformu MVP'si." },
      { "title": "Sanat Pazarı", "duration": "2 ay", "price": "18 bin €", "desc": "Bir Sanat nişinin özel ihtiyaçlarına hizmet etmek için inşa edilmiş pazar yeri." },
      { "title": "API Ara Yazılım Bağlayıcısı", "duration": "5 ay", "price": "90 bin €", "desc": "Çeşitli farklı üçüncü tarafları bir sürükle ve bırak arayüzünde sorunsuz bir şekilde entegre etmek için yazılım." },
      { "title": "Proptech Bulutu", "duration": "5 ay", "price": "350 bin €", "desc": "Belirli bir coğrafi alanla ilgili çeşitli veri noktalarını analiz eden ve gayrimenkul varlıklarının gelecekteki değerini çıkaran yapay zeka aracı." },
      { "title": "Hukuk Teknolojisi (Legaltech)", "duration": "2 ay", "price": "100 bin €", "desc": "Menkul kıymetler üzerindeki kamu kurallarını analiz eden ve bankacılara tavsiyelerde bulunan karmaşık bir yapay zeka aracı için MVP." }
    ],
    "howWeGet": "Fiyatlandırmamıza Nasıl Ulaşıyoruz",
    "howWeGetDesc": "Fiyatlandırmamız, ürün inovasyonuna ve yazılım geliştirmeye yönelik yalın, kullanıcı odaklı yaklaşımımızı yansıtır.",
    "seedProject": "Tohum Projesi Açıklandı",
    "seedProjectDesc": "Tohum programımız, birleştirildiğinde bir projenin temeli olabilecek bir grup bileşenden oluşan, son derece modüler bir mikro hizmet mimarisine sahip, amaca yönelik agnostik bir uygulamadır."
  },
  "Tech": {
    "title": "En son çözümlerimizin arkasındaki teknoloji",
    "subtitle": "Yalın çerçevelerin ve Ürün inovasyonunun teknik uzmanlıkla buluştuğu yer",
    "toolkit": "Bir bakışta teknoloji araç setimiz",
    "toolkitDesc": "Ürününüz için en iyi araçları ve çerçeveleri seçtiğimizden emin olmak için projenizin ihtiyaçlarını derinlemesine inceliyoruz.",
    "fullStack": "Tam Yığın Uygulamaları",
    "fullStackDesc": "Kapsamlı bir tam yığın web uygulamasına ihtiyacınız olduğunda, Kubernetes Kümesi kurulumundan ön uç ve arka uç geliştirmeye kadar her şeyi biz hallederiz.",
    "ai": "Yapay Zeka",
    "aiDesc": "Gelişmiş algoritmalar geliştiriyor ve makine öğrenimi tekniklerini entegre ediyoruz.",
    "dataIntensive": "Veri Yoğun Uygulamalar",
    "dataIntensiveDesc": "Büyük ölçekli veritabanlarını ustaca yönetiyor ve en son analizleri ve makine öğrenimini entegre ediyoruz.",
    "mobile": "Mobil Uygulamalar (iOS & Android)",
    "mobileDesc": "Kullanıcı dostu arayüzler tasarlıyor, optimum performans sağlıyor ve platformlar arası uyumluluğu entegre ediyoruz."
  },
  "CaseStudiesPage": {
    "title": "Örnek Olaylar",
    "subtitle": "Yalın çerçevelerin ve Ürün inovasyonunun teknik uzmanlıkla buluştuğu yer",
    "studies": [
      { "category": "Yapay Zeka Geliştirme", "title": "Otomatik Geri Alma Endüstrisi", "desc": "Müşterimiz, araç kurtarma ekosistemindeki önemli oyuncuları güçlendiren bir hizmet sağlayıcısıdır." },
      { "category": "Yapay Zeka Geliştirme", "title": "Anormallik Tespit Sistemi", "desc": "FreshAir Sensor, sigara içme olaylarını ve diğer hava kalitesi anormalliklerini tespit etmek için yenilikçi izleme cihazları sunar." },
      { "category": "Yapay Zeka Geliştirme", "title": "Belge Veri Çıkarımını Dijitalleştirmek için OCR", "desc": "Amerika Birleşik Devletleri merkezli bu müşteri, tıbbi talep yönetiminde uzmanlaşmıştır." },
      { "category": "Mobil Uygulama Geliştirme", "title": "Ay Kulesi Biletleri", "desc": "Herhangi bir küçük veya orta ölçekli etkinlik için bilet satın almanın geleneksel yolu, müşterinin seyahat etmesini gerektirir." },
      { "category": "Mobil Uygulama Geliştirme", "title": "Stemboard", "desc": "Derslerin yürütülmesinden ödev teslimlerine kadar her şeyin dijitalleştirildiği bir eğitim teknolojisi portalı." },
      { "category": "Yazılım Geliştirme", "title": "Codebasics", "desc": "Veri Analitiği, Yapay Zeka ve Veri Bilimi Öğrencilerini Sürükleyici Bir Öğrenme Platformuyla Güçlendirmek." },
      { "category": "Veri Analitiği", "title": "Dolandırıcılık Analitiği", "desc": "Tüm işlemleri işlemek ve analiz etmek için buluşsal tabanlı bir GOFAI motoru oluşturuldu." }
    ]
  }
};

en.Pages = enPages;
tr.Pages = trPages;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/tr.json', JSON.stringify(tr, null, 2));
console.log('JSON updated successfully!');
