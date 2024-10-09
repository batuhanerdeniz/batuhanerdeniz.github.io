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
            { isim: "Ayşe Kara", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "01-01-25", link: "#" }] },
            { isim: "Fatma Demir", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "15-12-23", link: "#" }] },
            { isim: "Mehmet Yılmaz", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "10-11-24", link: "#" }] },
            { isim: "Ali Can", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "20-10-23", link: "#" }] },
            { isim: "Zeynep Hüseyin", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "05-09-24", link: "#" }] },
            { isim: "Elif Murat", sertifikalar: [{ sertifika: "Yangın Eğitimi", tarih: "30-08-23", link: "#" }] }
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
        kamyonlar: [
            { isim: "Kamyon 1", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "01-01-25", link: "#" }] },
            { isim: "Kamyon 2", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "15-12-24", link: "#" }] },
            { isim: "Kamyon 3", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "10-11-24", link: "#" }] },
            { isim: "Kamyon 4", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "20-10-23", link: "#" }] },
            { isim: "Kamyon 5", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "05-09-24", link: "#" }] },
            { isim: "Kamyon 6", sertifikalar: [{ sertifika: "Bakım Sertifikası", tarih: "30-08-23", link: "#" }] }
        ]
    },
    ekipmanlar: {
        sapanlar: [
            { isim: "Sapan 1", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "01-12-25", link: "#" }] },
            { isim: "Sapan 2", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "15-11-23", link: "#" }] },
            { isim: "Sapan 3", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "10-10-24", link: "#" }] },
            { isim: "Sapan 4", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "20-09-23", link: "#" }] },
            { isim: "Sapan 5", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "05-08-24", link: "#" }] },
            { isim: "Sapan 6", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "30-07-23", link: "#" }] },
            { isim: "Sapan 7", sertifikalar: [{ sertifika: "Kullanım Sertifikası", tarih: "25-06-24", link: "#" }] }
        ],
        dedektörler: [
            { isim: "Dedektör 1", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "01-11-23", link: "#" }] },
            { isim: "Dedektör 2", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "15-10-24", link: "#" }] },
            { isim: "Dedektör 3", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "10-09-23", link: "#" }] },
            { isim: "Dedektör 4", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "20-08-24", link: "#" }] },
            { isim: "Dedektör 5", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "05-07-23", link: "#" }] },
            { isim: "Dedektör 6", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "30-06-24", link: "#" }] },
            { isim: "Dedektör 7", sertifikalar: [{ sertifika: "Kalibrasyon Sertifikası", tarih: "25-05-23", link: "#" }] }
        ],
        lambalar: [
            { isim: "Lamba 1", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "01-01-24", link: "#" }] },
            { isim: "Lamba 2", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "15-12-23", link: "#" }] },
            { isim: "Lamba 3", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "10-11-24", link: "#" }] },
            { isim: "Lamba 4", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "20-10-23", link: "#" }] },
            { isim: "Lamba 5", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "05-09-24", link: "#" }] },
            { isim: "Lamba 6", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "30-08-23", link: "#" }] },
            { isim: "Lamba 7", sertifikalar: [{ sertifika: "Elektrik Sertifikası", tarih: "25-07-24", link: "#" }] }
        ],
        hortumlar: [
            { isim: "Hortum 1", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "01-12-23", link: "#" }] },
            { isim: "Hortum 2", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "15-11-23", link: "#" }] },
            { isim: "Hortum 3", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "10-10-24", link: "#" }] },
            { isim: "Hortum 4", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "20-09-23", link: "#" }] },
            { isim: "Hortum 5", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "05-08-24", link: "#" }] },
            { isim: "Hortum 6", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "30-07-23", link: "#" }] },
            { isim: "Hortum 7", sertifikalar: [{ sertifika: "Basınç Sertifikası", tarih: "25-06-24", link: "#" }] }
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
        kıyafet: [
            { isim: "Kıyafet 1", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "01-01-24", link: "#" }] },
            { isim: "Kıyafet 2", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "15-12-23", link: "#" }] },
            { isim: "Kıyafet 3", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "10-11-24", link: "#" }] },
            { isim: "Kıyafet 4", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "20-10-23", link: "#" }] },
            { isim: "Kıyafet 5", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "05-09-24", link: "#" }] },
            { isim: "Kıyafet 6", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "30-08-23", link: "#" }] },
            { isim: "Kıyafet 7", sertifikalar: [{ sertifika: "Yangın Sertifikası", tarih: "25-07-24", link: "#" }] }
        ]
    }
};