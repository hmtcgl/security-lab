document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('language-selector');
    const elements = document.querySelectorAll('[data-tr]');

    // Sayfa yüklendiğinde varsayılan dili veya kaydedilmiş dili ayarla
    let currentLang = localStorage.getItem('lang') || 'tr';
    langSelector.value = currentLang;
    setLanguage(currentLang);

    // Dil seçimi değiştiğinde
    langSelector.addEventListener('change', (event) => {
        const newLang = event.target.value;
        localStorage.setItem('lang', newLang);
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        elements.forEach(element => {
            const key = element.getAttribute('data-tr');
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        });
        // Ayrıca, dil seçicinin başlığını da güncelle (isteğe bağlı)
        const selectedOption = langSelector.querySelector(`option[value="${lang}"]`);
        if (selectedOption) {
             // Opsiyon içeriğini değiştirmek yerine, sadece doğru dilin seçili olmasını sağlıyoruz
        }
    }

    // Çeviri Sözlüğü (Tüm metinler buradan yönetilecek)
    // Şimdilik sadece index.html için gerekli olan metinler eklendi.
    // Diğer sayfaların metinleri sonraki adımlarda eklenecektir.
    const translations = {
        'nav-home': {
            tr: 'Ana Sayfa',
            en: 'Home'
        },
        'nav-tests': {
            tr: 'Tüm Testler',
            en: 'All Tests'
        },
        'hero-title': {
            tr: 'Web Güvenliği Laboratuvarınıza Hoş Geldiniz.',
            en: 'Welcome to Your Web Security Lab.'
        },
        'hero-subtitle': {
            tr: 'OWASP Top 10, API Top 10 ve Automated Threats odaklı güncel güvenlik zafiyetlerini keşfedin, anlayın ve test edin.',
            en: 'Discover, understand, and test current security vulnerabilities focused on OWASP Top 10, API Top 10, and Automated Threats.'
        },
        'section-tests-title': {
            tr: 'Popüler Güvenlik Testleri',
            en: 'Popular Security Tests'
        },
        // SQL Injection Card
        'card-sql-title': { tr: 'Test SQL Injection', en: 'Test SQL Injection' },
        'card-sql-desc': {
            tr: 'En sık rastlanan zafiyetlerden birini test edin. Veritabanı sorgularının nasıl manipüle edilebileceğini görün.',
            en: 'Test one of the most common vulnerabilities. See how database queries can be manipulated.'
        },
        'card-sql-btn': { tr: 'Testi Başlat', en: 'Start Test' },

        // XSS Card
        'card-xss-title': { tr: 'Test XSS (Cross-Site Scripting)', en: 'Test XSS (Cross-Site Scripting)' },
        'card-xss-desc': {
            tr: 'Kötü amaçlı istemci tarafı betiklerin bir kullanıcıya nasıl enjekte edilebileceğini keşfedin.',
            en: 'Discover how malicious client-side scripts can be injected into a user\'s browser.'
        },
        'card-xss-btn': { tr: 'Testi Başlat', en: 'Start Test' },

        // LDAP Card
        'card-ldap-title': { tr: 'Test LDAP Injection', en: 'Test LDAP Injection' },
        'card-ldap-desc': {
            tr: 'Dizin hizmetlerine (LDAP) yapılan sorgularda yetkilendirme ve kimlik doğrulama zafiyetlerini gözlemleyin.',
            en: 'Observe authorization and authentication vulnerabilities in queries made to directory services (LDAP).'
        },
        'card-ldap-btn': { tr: 'Testi Başlat', en: 'Start Test' },

        // Payment/API Card
        'card-payment-title': { tr: 'API Testi: Ödeme İşlemi', en: 'API Test: Payment Transaction' },
        'card-payment-desc': {
            tr: 'API güvenliği zafiyetlerini (Örn: BOLA) test etmek için tasarlanmış sahte ödeme işlemini gözden geçirin.',
            en: 'Review a dummy payment transaction designed to test API security flaws (e.g., BOLA).'
        },
        'card-payment-btn': { tr: 'Ödeme Sayfasına Git', en: 'Go to Payment Page' },

        // Brute Force Card
        'card-brute-title': { tr: 'Test Brute Force', en: 'Test Brute Force' },
        'card-brute-desc': {
            tr: 'Kimlik doğrulama mekanizmalarının parola denemelerine karşı ne kadar dayanıklı olduğunu ölçün.',
            en: 'Measure the resilience of authentication mechanisms against repeated password attempts.'
        },
        'card-brute-btn': { tr: 'Testi Başlat', en: 'Start Test' },

        // Footer
        'footer-text': {
            tr: '© 2025 Security Lab. Eğitim ve Test Amaçlıdır.',
            en: '© 2025 Security Lab. For Educational and Testing Purposes Only.'
        }
    };
});
