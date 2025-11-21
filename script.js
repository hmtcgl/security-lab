// Dil Veritabanı (Sözlük)
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_tests: "Tüm Testler",
        nav_about: "Hakkında",
        hero_title: "Web Güvenliği Laboratuvarı",
        hero_subtitle: "OWASP Top 10, API güvenliği ve otomatik tehditleri test etmek için geliştirilmiş modern simülasyon ortamı.",
        hero_btn: "Testlere Başla",
        section_tests_title: "Popüler Güvenlik Testleri",
        card_sql_title: "Test SQL Injection",
        card_sql_desc: "Veritabanı sorgularını manipüle ederek yetkisiz veri erişimini test edin.",
        card_xss_title: "Test XSS (Cross-Site Scripting)",
        card_xss_desc: "Tarayıcı tabanlı saldırıları ve zararlı script enjeksiyonlarını simüle edin.",
        card_ldap_title: "Test LDAP Injection",
        card_ldap_desc: "Dizin hizmetlerine yapılan yetkisiz sorgu manipülasyonlarını inceleyin.",
        card_api_title: "API: Ödeme Manipülasyonu",
        card_api_desc: "API endpointlerindeki veri bütünlüğü ve parametre manipülasyonu açıklarını test edin.",
        card_brute_title: "Test Brute Force",
        card_brute_desc: "Giriş mekanizmalarının kaba kuvvet saldırılarına karşı direncini ölçün.",
        btn_start: "Testi Başlat",
        btn_payment: "Ödeme Yap",
        footer_text: "© 2025 Security Lab. Sadece eğitim ve yasal test amaçlıdır."
    },
    en: {
        nav_home: "Home",
        nav_tests: "All Tests",
        nav_about: "About",
        hero_title: "Web Security Laboratory",
        hero_subtitle: "A modern simulation environment designed to test OWASP Top 10, API security, and automated threats.",
        hero_btn: "Start Testing",
        section_tests_title: "Popular Security Tests",
        card_sql_title: "Test SQL Injection",
        card_sql_desc: "Test unauthorized data access by manipulating database queries.",
        card_xss_title: "Test XSS (Cross-Site Scripting)",
        card_xss_desc: "Simulate browser-based attacks and malicious script injections.",
        card_ldap_title: "Test LDAP Injection",
        card_ldap_desc: "Examine unauthorized query manipulations on directory services.",
        card_api_title: "API: Payment Manipulation",
        card_api_desc: "Test data integrity and parameter manipulation vulnerabilities in API endpoints.",
        card_brute_title: "Test Brute Force",
        card_brute_desc: "Measure the resistance of login mechanisms against brute force attacks.",
        btn_start: "Start Test",
        btn_payment: "Make Payment",
        footer_text: "© 2025 Security Lab. For educational and legal testing purposes only."
    },
    fr: {
        nav_home: "Accueil",
        nav_tests: "Tous les Tests",
        nav_about: "À propos",
        hero_title: "Laboratoire de Sécurité Web",
        hero_subtitle: "Un environnement de simulation moderne conçu pour tester l'OWASP Top 10, la sécurité des API et les menaces automatisées.",
        hero_btn: "Commencer les Tests",
        section_tests_title: "Tests de Sécurité Populaires",
        card_sql_title: "Test Injection SQL",
        card_sql_desc: "Testez l'accès non autorisé aux données en manipulant les requêtes de base de données.",
        card_xss_title: "Test XSS (Cross-Site Scripting)",
        card_xss_desc: "Simulez des attaques par navigateur et des injections de scripts malveillants.",
        card_ldap_title: "Test Injection LDAP",
        card_ldap_desc: "Examinez les manipulations de requêtes non autorisées sur les services d'annuaire.",
        card_api_title: "API: Manipulation de Paiement",
        card_api_desc: "Testez l'intégrité des données et les vulnérabilités de manipulation de paramètres.",
        card_brute_title: "Test Brute Force",
        card_brute_desc: "Mesurez la résistance des mécanismes de connexion contre les attaques par force brute.",
        btn_start: "Démarrer le Test",
        btn_payment: "Effectuer le Paiement",
        footer_text: "© 2025 Security Lab. À des fins éducatives et de tests légaux uniquement."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_tests: "جميع الاختبارات",
        nav_about: "حول",
        hero_title: "مختبر أمان الويب",
        hero_subtitle: "بيئة محاكاة حديثة مصممة لاختبار OWASP Top 10 وأمان API والتهديدات الآلية.",
        hero_btn: "بدء الاختبارات",
        section_tests_title: "اختبارات الأمان الشائعة",
        card_sql_title: "اختبار حقن SQL",
        card_sql_desc: "اختبار الوصول غير المصرح به للبيانات عن طريق التلاعب في استعلامات قاعدة البيانات.",
        card_xss_title: "اختبار XSS (برمجة عبر المواقع)",
        card_xss_desc: "محاكاة الهجمات المستندة إلى المتصفح وحقن النصوص البرمجية الضارة.",
        card_ldap_title: "اختبار حقن LDAP",
        card_ldap_desc: "فحص تلاعب الاستعلام غير المصرح به على خدمات الدليل.",
        card_api_title: "API: التلاعب بالدفع",
        card_api_desc: "اختبار سلامة البيانات وثغرات التلاعب في المعاملات عبر نقاط اتصال API.",
        card_brute_title: "اختبار الهجوم الشامل (Brute Force)",
        card_brute_desc: "قياس مقاومة آليات الدخول ضد هجمات القوة العمياء.",
        btn_start: "بدء الاختبار",
        btn_payment: "إجراء الدفع",
        footer_text: "© 2025 Security Lab. للأغراض التعليمية والاختبار القانوني فقط."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    
    // 1. Kaydedilmiş dili yükle veya varsayılan 'tr' yap
    const savedLang = localStorage.getItem('selectedLanguage') || 'tr';
    setLanguage(savedLang);
    languageSelector.value = savedLang;

    // 2. Dil seçildiğinde tetiklenen olay
    languageSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        localStorage.setItem('selectedLanguage', selectedLang);
    });
});

// Dil Değiştirme Fonksiyonu
function setLanguage(lang) {
    // HTML etiketindeki dil özelliğini güncelle
    document.documentElement.lang = lang;

    // Yönlendirme Ayarı (RTL / LTR)
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl-mode');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl-mode');
    }

    // Tüm çevrilebilir elementleri bul ve güncelle
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Eğer o dil için çeviri varsa uygula
        if (translations[lang] && translations[lang][key]) {
            // Input placeholder ise farklı, normal text ise farklı davran
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}
