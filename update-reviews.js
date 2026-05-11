const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const tr = JSON.parse(fs.readFileSync('messages/tr.json', 'utf8'));

const reviewsEn = [
  { text: "Muhammad is fabulous and very reliable. Muhammad is also a strong eLearning developer.", author: "Jorge Pineda", rating: "5.0" },
  { text: "A tremendous instructional designer that was able to accomplish a significant amount in very little time with very high quality. Would love to work with him again!", author: "Vig / Small economy works", rating: "5.0" },
  { text: "Muhammad was a pleasure to work with. Very fast, efficient, responsive to feedback and communicative. He made it very easy.", author: "E-Learning Course Client (Canada)", rating: "5.0" }
];

const reviewsTr = [
  { text: "Muhammad harika ve çok güvenilir. Aynı zamanda güçlü bir e-Öğrenim geliştiricisi.", author: "Jorge Pineda", rating: "5.0" },
  { text: "Kısa sürede çok yüksek kalitede önemli miktarda iş başarabilen muazzam bir eğitim tasarımcısı. Onunla tekrar çalışmak isterim!", author: "Vig / Small economy works", rating: "5.0" },
  { text: "Muhammad ile çalışmak bir zevkti. Çok hızlı, verimli, geri bildirimlere duyarlı ve iletişim kurmaya açıktı. İşimizi çok kolaylaştırdı.", author: "E-Öğrenim Kursu Müşterisi (Kanada)", rating: "5.0" }
];

en.TestimonialsList = reviewsEn;
tr.TestimonialsList = reviewsTr;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/tr.json', JSON.stringify(tr, null, 2));
console.log('JSON reviews updated successfully!');
