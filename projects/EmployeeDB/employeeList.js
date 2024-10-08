const departments = {
    "İK": [
        { ad: "Ahmet", soyad: "Yılmaz", telefon: "123-456-7890", adres: "123 Ana Cadde", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Ayşe", soyad: "Kara", telefon: "987-654-3210", adres: "456 Çınar Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Mehmet", soyad: "Demir", telefon: "321-654-9870", adres: "789 Akasya Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "yok", saglik: "tam" },
        { ad: "Fatma", soyad: "Çelik", telefon: "654-321-0987", adres: "101 Meşe Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "eksik" },
        { ad: "Ali", soyad: "Şahin", telefon: "111-222-3333", adres: "202 Gül Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "eksik", saglik: "tam" },
        { ad: "Zeynep", soyad: "Koç", telefon: "444-555-6666", adres: "303 Lale Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Hasan", soyad: "Öztürk", telefon: "777-888-9999", adres: "404 Menekşe Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "yok", saglik: "tam" },
        { ad: "Elif", soyad: "Yıldırım", telefon: "000-111-2222", adres: "505 Papatya Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "eksik" },
        { ad: "Murat", soyad: "Aydın", telefon: "333-444-5555", adres: "606 Karanfil Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Emine", soyad: "Güneş", telefon: "666-777-8888", adres: "707 Sümbül Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" }
    ],
    "BT": [
        { ad: "Ali", soyad: "Kaya", telefon: "555-555-5555", adres: "789 Meşe Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Veli", soyad: "Taş", telefon: "444-444-4444", adres: "101 Çam Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Ayşe", soyad: "Gül", telefon: "333-333-3333", adres: "202 Çınar Sokak", isGuvenligi: "yok", iseGiris: "eksik", sigorta: "tam", saglik: "tam" },
        { ad: "Fatma", soyad: "Er", telefon: "222-222-2222", adres: "303 Kavak Sokak", isGuvenligi: "tam", iseGiris: "yok", sigorta: "eksik", saglik: "tam" },
        { ad: "Hüseyin", soyad: "Yıldız", telefon: "111-111-1111", adres: "404 Söğüt Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "yok", saglik: "eksik" },
        { ad: "Merve", soyad: "Kurt", telefon: "666-666-6666", adres: "505 Ardıç Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Kemal", soyad: "Aslan", telefon: "777-777-7777", adres: "606 Sedir Sokak", isGuvenligi: "tam", iseGiris: "yok", sigorta: "tam", saglik: "tam" },
        { ad: "Gül", soyad: "Çiçek", telefon: "888-888-8888", adres: "707 Ladin Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "eksik", saglik: "yok" },
        { ad: "Can", soyad: "Deniz", telefon: "999-999-9999", adres: "808 Ihlamur Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Ece", soyad: "Bulut", telefon: "000-000-0000", adres: "909 Kestane Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "tam" }
    ],
    "Finans": [
        { ad: "Ahmet", soyad: "Kara", telefon: "111-111-1111", adres: "404 Söğüt Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "yok", saglik: "eksik" },
        { ad: "Mehmet", soyad: "Beyaz", telefon: "666-666-6666", adres: "505 Ardıç Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Ayşe", soyad: "Yeşil", telefon: "777-777-7777", adres: "606 Sedir Sokak", isGuvenligi: "tam", iseGiris: "yok", sigorta: "tam", saglik: "tam" },
        { ad: "Fatma", soyad: "Mavi", telefon: "888-888-8888", adres: "707 Ladin Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "eksik", saglik: "yok" },
        { ad: "Ali", soyad: "Kırmızı", telefon: "999-999-9999", adres: "808 Ihlamur Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Veli", soyad: "Sarı", telefon: "000-000-0000", adres: "909 Kestane Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "tam" },
        { ad: "Zeynep", soyad: "Mor", telefon: "123-123-1234", adres: "101 Çam Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Hasan", soyad: "Turuncu", telefon: "234-234-2345", adres: "202 Çınar Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Elif", soyad: "Pembe", telefon: "345-345-3456", adres: "303 Kavak Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "yok", saglik: "tam" },
        { ad: "Murat", soyad: "Gri", telefon: "456-456-4567", adres: "404 Söğüt Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "eksik" }
    ],
    "Pazarlama": [
        { ad: "İrem", soyad: "Güneş", telefon: "999-999-9999", adres: "808 Palmiye Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Deniz", soyad: "Yıldız", telefon: "000-000-0000", adres: "909 Servi Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "tam" },
        { ad: "Ece", soyad: "Deniz", telefon: "111-111-1111", adres: "101 Çam Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Can", soyad: "Bulut", telefon: "222-222-2222", adres: "202 Çınar Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Gül", soyad: "Çiçek", telefon: "333-333-3333", adres: "303 Kavak Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "yok", saglik: "tam" },
        { ad: "Kemal", soyad: "Aslan", telefon: "444-444-4444", adres: "404 Söğüt Sokak", isGuvenligi: "tam", iseGiris: "eksik", sigorta: "tam", saglik: "eksik" },
        { ad: "Merve", soyad: "Kurt", telefon: "555-555-5555", adres: "505 Ardıç Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Hüseyin", soyad: "Yıldız", telefon: "666-666-6666", adres: "606 Sedir Sokak", isGuvenligi: "yok", iseGiris: "tam", sigorta: "tam", saglik: "yok" },
        { ad: "Fatma", soyad: "Er", telefon: "777-777-7777", adres: "707 Ladin Sokak", isGuvenligi: "eksik", iseGiris: "tam", sigorta: "tam", saglik: "tam" },
        { ad: "Ayşe", soyad: "Gül", telefon: "888-888-8888", adres: "808 Ihlamur Sokak", isGuvenligi: "tam", iseGiris: "tam", sigorta: "tam", saglik: "tam" }
    ]
};