const data = {
    personel: [
            { isim: "Ahmet Yılmaz", gorev: "taşeron" ,sertifikalar: [{ sertifika: "İş Güvenliği", tarih: "01-12-25", link: "#" },{ sertifika: "İlk Yardım", tarih: "01-11-24", link: "#" }] },
            { isim: "Mehmet Demir",gorev: "taşeron", sertifikalar: [{ sertifika: "İlk Yardım", tarih: "15-11-25", link: "#" }] },
            { isim: "Ali Veli",gorev: "taşeron", sertifikalar: [{ sertifika: "İş Güvenliği", tarih: "10-11-24", link: "#" }] },
            { isim: "Ayşe Fatma",gorev: "taşeron", sertifikalar: [{ sertifika: "İlk Yardım", tarih: "20-09-25", link: "#" }] },
            { isim: "Seyhan Erdeniz",
             gorev: "İş Güvenliği Uzmanı",
             sertifikalar: [
                { sertifika: "SGK Girişi", tarih: "01-01-25", link: "#" },
                { sertifika: "Sağlık Raporu", tarih: "15-12-25", link: "#" },
                { sertifika: "16 Saat ISG Eğitimi", tarih: "10-07-24", link: "#" },
                { sertifika: "Mesleki Yeterlilik", tarih: "20-06-25", link: "./A Sınıfı - ISG SERTIFIKA.pdf" },
                { sertifika: "Kapalı Alan Eğitimi", tarih: "05-05-24", link: "#" },
                { sertifika: "Yüksekte Çalışma Eğitimi", tarih: "30-04-25", link: "#" },
                { sertifika: "Yüksek Basınçlı Ekipman Eğitimi", tarih: "25-03-24", link: "#" },
                { sertifika: "Katalist Kimyasalla Çalışma Eğitimi", tarih: "01-02-25", link: "#" },
                { sertifika: "İlk Yardım Eğitimi", tarih: "15-01-24", link: "#" },
                { sertifika: "Acil Durum Eğitimi", tarih: "10-12-25", link: "#" },
                { sertifika: "Askıdan Kurtarma Eğitimi", tarih: "20-10-24", link: "#" },
                { sertifika: "KKD Kullanımı", tarih: "05-10-23", link: "#" },


            ] },
            { 
                isim: "Emre Yılmaz",
                gorev: "İş Güvenliği Uzmanı",
                sertifikalar: [
                   { sertifika: "SGK Girişi", tarih: "01-11-24", link: "#" },
                   { sertifika: "Sağlık Raporu", tarih: "15-12-24", link: "#" },
                   { sertifika: "16 Saat ISG Eğitimi", tarih: "10-11-24", link: "#" },
                   { sertifika: "Mesleki Yeterlilik", tarih: "20-11-24", link: "#" },
                   { sertifika: "Kapalı Alan Eğitimi", tarih: "05-05-25", link: "#" },
                   { sertifika: "Yüksekte Çalışma Eğitimi", tarih: "30-04-23", link: "#" },
                   { sertifika: "Yüksek Basınçlı Ekipman Eğitimi", tarih: "25-03-24", link: "#" },
                   { sertifika: "Katalist Kimyasalla Çalışma Eğitimi", tarih: "01-02-23", link: "#" },
                   { sertifika: "İlk Yardım Eğitimi", tarih: "15-01-24", link: "#" },
                   { sertifika: "Acil Durum Eğitimi", tarih: "10-12-23", link: "#" },
                   { sertifika: "Askıdan Kurtarma Eğitimi", tarih: "20-11-24", link: "#" },
                   { sertifika: "KKD Kullanımı", tarih: "05-10-23", link: "#" },
   
   
               ] },
            
            { isim: "Fatma Çelik", gorev: "mühendis", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "01-10-23", link: "#" }] },
            { isim: "Ahmet Demir", gorev: "mühendis", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "15-09-24", link: "#" }] },
            { isim: "Mehmet Kara", gorev: "mühendis", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "10-08-23", link: "#" }] },
            ]
    ,   
    is_makineleri: [
            { isim: "FALSH 2500", 
              tip: "Yıkama Makinesi",
              sertifikalar: [
                { sertifika: "Sigorta", tarih: "01-12-24", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "01-11-23", link: "#" },
                { sertifika: "6 Aylık Bakımlar", tarih: "30-10-24", link: "#" },
                { sertifika: "Kullanım Talimatı", tarih: "05-08-24", link: "#" },

            ] },
            { isim: "LSS EDECHOFF 0182016", 
                tip: "Yıkama Makinesi",
                sertifikalar: [
                  { sertifika: "Yıllık Araç Muayenesi", tarih: "01-12-24", link: "#" },
                  { sertifika: "Trafik Sigortası", tarih: "01-11-23", link: "#" },
                  { sertifika: "Egzoz Muayenesir", tarih: "30-10-24", link: "#" },
                  { sertifika: "Sigorta", tarih: "01-12-24", link: "#" },
                  { sertifika: "Fenni Muayene", tarih: "01-11-23", link: "#" },
                  { sertifika: "6 Aylık Bakımlar", tarih: "30-10-24", link: "#" },
                  { sertifika: "Kullanım Talimatı", tarih: "05-08-24", link: "#" },
  
              ] }


        ],

    ekipmanlar: [


            { isim: "SAPAN 08052200012",
                tip: "Sapan",
              sertifikalar: [
                { sertifika: "Yıllık Test Raporu", tarih: "01-12-25", link: "./Sapan 08052200012.pdf" },
                { sertifika: "3 Aylık Bakımlar", tarih: "15-11-24", link: "#" },
                { sertifika: "Sertifika", tarih: "10-10-25", link: "#" },
                { sertifika: "Kullanım – Bakım Talimatı", tarih: "20-09-24", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "05-08-25", link: "#" },
            ] },
            { isim: "Yaşam Destek Ünitesi 1",
              tip: "Yaşam Destek Ünitesi",
                sertifikalar: [
                { sertifika: "Kontrol Raporu", tarih: "05-03-21", link: "./LSS Yaşam Destek Üniteleri Muayene Raporları.pdf" }
            ] },
            { isim: "24V Trafo",
                tip: "Trafo",
              sertifikalar: [
                { sertifika: "Yıllık Test Raporu", tarih: "01-12-23", link: "#" },
                { sertifika: "3 Aylık Bakımlar", tarih: "09-11-24", link: "#" },
                { sertifika: "Sertifika", tarih: "12-10-24", link: "#" },
                { sertifika: "Kullanım – Bakım Talimatı", tarih: "20-09-23", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "05-08-25", link: "#" },
            ] },
            
        ],
    koruyucuDonanimlar: 
        [{ isim: "Baret 1", tip:"Baret", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "01-12-23", link: "#" }] },
         { isim: "ARPD-0398 Dedektör",
            tip: "Dedektör",
              sertifikalar: [
                { sertifika: "Kalibrasyon Raporu", tarih: "01-12-24", link: "./YAKA DEDEKTÖR 6001_2023.pdf" },
                { sertifika: "CE Sertifika", tarih: "10-10-24", link: "#" },
                { sertifika: "3 Aylık Bakımlar", tarih: "20-09-23", link: "#" },
                { sertifika: "Kullanım Talimatı", tarih: "15-11-23", link: "#" },
            
            ] },
           ],

};