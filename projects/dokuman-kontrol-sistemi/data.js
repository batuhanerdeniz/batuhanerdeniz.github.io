const data = {
    personel: {
        işçiler: [
            { isim: "Ahmet Yılmaz", sertifikalar: [
                { sertifika: "İş Güvenliği", tarih: "01-12-25", link: "#" },
                { sertifika: "İlk Yardım", tarih: "01-11-24", link: "#" }
            ] },
            { isim: "Mehmet Demir", sertifikalar: [{ sertifika: "İlk Yardım", tarih: "15-11-25", link: "#" }] },
            { isim: "Ali Veli", sertifikalar: [{ sertifika: "İş Güvenliği", tarih: "10-11-24", link: "#" }] },
            { isim: "Ayşe Fatma", sertifikalar: [{ sertifika: "İlk Yardım", tarih: "20-09-25", link: "#" }] },
            { isim: "Hasan Hüseyin", sertifikalar: [{ sertifika: "İş Güvenliği", tarih: "05-08-25", link: "#" }] },
            { isim: "Zeynep Elif", sertifikalar: [{ sertifika: "İlk Yardım", tarih: "30-10-24", link: "#" }] },
            { isim: "Murat Can", sertifikalar: [{ sertifika: "İş Güvenliği", tarih: "25-06-24", link: "#" }] }
        ],
        işGüvenliği: [
            { 
             isim: "Seyhan Erdeniz",
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
            
        
        ],
        mühendisler: [
            { isim: "Fatma Çelik", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "01-10-23", link: "#" }] },
            { isim: "Ahmet Demir", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "15-09-24", link: "#" }] },
            { isim: "Mehmet Kara", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "10-08-23", link: "#" }] },
            { isim: "Ali Yılmaz", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "20-07-24", link: "#" }] },
            { isim: "Zeynep Can", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "05-06-23", link: "#" }] },
            { isim: "Elif Hüseyin", sertifikalar: [{ sertifika: "Mühendislik Sertifikası", tarih: "30-05-24", link: "#" }] }
        ]
    },
    isMakineleri: {
        ekskavatörler: [
            { isim: "Ekskavatör 1", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "01-12-24", link: "#" }] },
            { isim: "Ekskavatör 2", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "01-11-23", link: "#" }] },
            { isim: "Ekskavatör 3", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "30-10-24", link: "#" }] },
            { isim: "Ekskavatör 4", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "20-09-25", link: "#" }] },
            { isim: "Ekskavatör 5", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "05-08-24", link: "#" }] },
            { isim: "Ekskavatör 6", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "30-07-25", link: "#" }] },
            { isim: "Ekskavatör 7", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "25-06-24", link: "#" }] }
        ],
        diğer: [
            { isim: "FALSH 2500", 
              sertifikalar: [
                { sertifika: "Sigorta", tarih: "01-12-24", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "01-11-23", link: "#" },
                { sertifika: "6 Aylık Bakımlar", tarih: "30-10-24", link: "#" },
                { sertifika: "Kullanım Talimatı", tarih: "05-08-24", link: "#" },

            ] },
            { isim: "LSS EDECHOFF 0182016", 
                sertifikalar: [
                  { sertifika: "Yıllık Araç Muayenesi", tarih: "01-12-24", link: "#" },
                  { sertifika: "Trafik Sigortası", tarih: "01-11-23", link: "#" },
                  { sertifika: "Egzoz Muayenesir", tarih: "30-10-24", link: "#" },
                  { sertifika: "Sigorta", tarih: "01-12-24", link: "#" },
                  { sertifika: "Fenni Muayene", tarih: "01-11-23", link: "#" },
                  { sertifika: "6 Aylık Bakımlar", tarih: "30-10-24", link: "#" },
                  { sertifika: "Kullanım Talimatı", tarih: "05-08-24", link: "#" },
  
              ] },


        ]
    },
    ekipmanlar: {
        sapanlar: [
            { isim: "SAPAN 08052200012",
              sertifikalar: [
                { sertifika: "Yıllık Test Raporu", tarih: "01-12-25", link: "./Sapan 08052200012.pdf" },
                { sertifika: "3 Aylık Bakımlar", tarih: "15-11-24", link: "#" },
                { sertifika: "Sertifika", tarih: "10-10-25", link: "#" },
                { sertifika: "Kullanım – Bakım Talimatı", tarih: "20-09-24", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "05-08-25", link: "#" },
            ] },
            ],
        yaşamDestekUnitesi: [
            { isim: "Yaşam Destek Ünitesi", sertifikalar: [
                { sertifika: "Kontrol Raporu", tarih: "05-03-21", link: "./LSS Yaşam Destek Üniteleri Muayene Raporları.pdf" }] },
            
        ],
        trafolar: [
            { isim: "24V Trafo",
              sertifikalar: [
                { sertifika: "Yıllık Test Raporu", tarih: "01-12-23", link: "#" },
                { sertifika: "3 Aylık Bakımlar", tarih: "09-11-24", link: "#" },
                { sertifika: "Sertifika", tarih: "12-10-24", link: "#" },
                { sertifika: "Kullanım – Bakım Talimatı", tarih: "20-09-23", link: "#" },
                { sertifika: "Fenni Muayene", tarih: "05-08-25", link: "#" },
            ] },
            
        ]
    },
    koruyucuDonanimlar: {
        baret: [
            { isim: "Baret 1", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "01-12-23", link: "#" }] },
            { isim: "Baret 2", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "15-11-23", link: "#" }] },
            { isim: "Baret 3", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "10-10-24", link: "#" }] },
            { isim: "Baret 4", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "20-09-23", link: "#" }] },
            { isim: "Baret 5", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "05-08-24", link: "#" }] },
            { isim: "Baret 6", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "30-07-23", link: "#" }] },
            { isim: "Baret 7", sertifikalar: [{ sertifika: "Güvenlik Sertifikası", tarih: "25-06-24", link: "#" }] }
        ],
        dedektör: [
            { isim: "ARPD-0398 Dedektör",
              sertifikalar: [
                { sertifika: "Kalibrasyon Raporu", tarih: "01-12-24", link: "./YAKA DEDEKTÖR 6001_2023.pdf" },
                { sertifika: "CE Sertifika", tarih: "10-10-24", link: "#" },
                { sertifika: "3 Aylık Bakımlar", tarih: "20-09-23", link: "#" },
                { sertifika: "Kullanım Talimatı", tarih: "15-11-23", link: "#" },
            
            ] },
           ],
    }
};