// --- DİL VERİTABANI (TRANSLATIONS) ---
const translations = {
    tr: {
        // Nav & Footer
        nav_home: "Ana Sayfa",
        nav_tests: "Tüm Testler",
        nav_about: "Hakkında",
        footer_text: "© 2025 Security Lab. Sadece eğitim ve yasal test amaçlıdır.",
        
        // Ortak Terimler
        lbl_scenario: "Senaryo & Hedef",
        lbl_console: "Sunucu Logları / Terminal",
        lbl_status_safe: "Sistem Güvenli",
        lbl_status_hacked: "⚠️ SİSTEM İHLAL EDİLDİ",
        btn_execute: "Saldırıyı Başlat",
        btn_reset: "Sistemi Sıfırla",

        // SQL Injection Sayfası
        sql_title: "SQL Injection Testi",
        sql_desc: "Giriş formlarını manipüle ederek veritabanı tüm içeriğini dökmeye çalışın.",
        sql_scenario: "Bu bir ürün arama motorudur. Arka planda 'SELECT * FROM products WHERE name = ...' çalışır. Hedefiniz: Tüm gizli ürünleri listelemek.",
        sql_placeholder: "Ürün adı girin (örn: elma)",
        sql_hint: "İpucu: ' OR '1'='1 payload'ını deneyin.",

        // XSS Sayfası
        xss_title: "Cross-Site Scripting (XSS)",
        xss_desc: "Yorum alanına zararlı JS kodu enjekte ederek kullanıcı tarayıcısını ele geçirin.",
        xss_scenario: "Bu bir yorum panosudur. Filtreleme yoktur. Hedefiniz: Ekrana bir 'alert' kutusu çıkartmak.",
        xss_placeholder: "Yorumunuzu yazın...",
        xss_hint: "İpucu: <script>alert(1)</script> deneyin.",

        // LDAP Sayfası
        ldap_title: "LDAP Injection",
        ldap_desc: "Kurumsal giriş panelini, LDAP filtrelerini manipüle ederek atlatın.",
        ldap_scenario: "Arka planda LDAP sorgusu çalışır. Parolayı bilmeden yönetici (admin) olarak giriş yapmaya çalışın.",
        ldap_user_ph: "Kullanıcı Adı",
        ldap_pass_ph: "Parola",
        ldap_hint: "İpucu: Kullanıcı adına * veya admin)(| karakterlerini girin.",
    },
    en: {
        nav_home: "Home",
        nav_tests: "All Tests",
        nav_about: "About",
        footer_text: "© 2025 Security Lab. For educational purposes only.",
        
        lbl_scenario: "Scenario & Goal",
        lbl_console: "Server Logs / Terminal",
        lbl_status_safe: "System Secure",
        lbl_status_hacked: "⚠️ SYSTEM BREACHED",
        btn_execute: "Execute Attack",
        btn_reset: "Reset System",

        sql_title: "SQL Injection Test",
        sql_desc: "Try to dump the entire database content by manipulating input forms.",
        sql_scenario: "This is a product search engine. Backend runs 'SELECT * FROM products WHERE name = ...'. Goal: List all hidden products.",
        sql_placeholder: "Enter product name (e.g., apple)",
        sql_hint: "Hint: Try the payload ' OR '1'='1",

        xss_title: "Cross-Site Scripting (XSS)",
        xss_desc: "Inject malicious JS code into the comment section to hijack user browser.",
        xss_scenario: "This is a comment board. No filtering. Goal: Pop up an 'alert' box.",
        xss_placeholder: "Write your comment...",
        xss_hint: "Hint: Try <script>alert(1)</script>",

        ldap_title: "LDAP Injection",
        ldap_desc: "Bypass the corporate login panel by manipulating LDAP filters.",
        ldap_scenario: "Backend runs an LDAP query. Try to login as admin without knowing the password.",
        ldap_user_ph: "Username",
        ldap_pass_ph: "Password",
        ldap_hint: "Hint: Enter * or admin)(| into the username.",
    },
    fr: {
        nav_home: "Accueil",
        nav_tests: "Tous les Tests",
        nav_about: "À propos",
        footer_text: "© 2025 Security Lab. À des fins éducatives uniquement.",
        
        lbl_scenario: "Scénario & Objectif",
        lbl_console: "Logs Serveur / Terminal",
        lbl_status_safe: "Système Sécurisé",
        lbl_status_hacked: "⚠️ SYSTÈME COMPROMIS",
        btn_execute: "Exécuter l'Attaque",
        btn_reset: "Réinitialiser",

        sql_title: "Test Injection SQL",
        sql_desc: "Essayez d'extraire toute la base de données en manipulant les formulaires.",
        sql_scenario: "Moteur de recherche de produits. Backend : 'SELECT * ...'. Objectif : Lister tous les produits cachés.",
        sql_placeholder: "Nom du produit (ex: pomme)",
        sql_hint: "Indice : Essayez ' OR '1'='1",

        xss_title: "Cross-Site Scripting (XSS)",
        xss_desc: "Injectez du code JS malveillant pour pirater le navigateur.",
        xss_scenario: "Zone de commentaires sans filtre. Objectif : Faire apparaître une 'alert'.",
        xss_placeholder: "Écrivez votre commentaire...",
        xss_hint: "Indice : Essayez <script>alert(1)</script>",

        ldap_title: "Injection LDAP",
        ldap_desc: "Contournez le panneau de connexion en manipulant les filtres LDAP.",
        ldap_scenario: "Requête LDAP en arrière-plan. Essayez de vous connecter en tant qu'admin sans mot de passe.",
        ldap_user_ph: "Nom d'utilisateur",
        ldap_pass_ph: "Mot de passe",
        ldap_hint: "Indice : Entrez * ou admin)(|",
    },
    ar: {
        nav_home: "الرئيسية",
        nav_tests: "جميع الاختبارات",
        nav_about: "حول",
        footer_text: "© 2025 Security Lab. للأغراض التعليمية فقط.",
        
        lbl_scenario: "السيناريو والهدف",
        lbl_console: "سجلات الخادم / المحطة الطرفية",
        lbl_status_safe: "النظام آمن",
        lbl_status_hacked: "⚠️ تم اختراق النظام",
        btn_execute: "تنفيذ الهجوم",
        btn_reset: "إعادة تعيين النظام",

        sql_title: "اختبار حقن SQL",
        sql_desc: "حاول تفريغ قاعدة البيانات بالكامل عن طريق التلاعب في النماذج.",
        sql_scenario: "هذا محرك بحث منتجات. الخلفية تشغل 'SELECT ...'. الهدف: عرض جميع المنتجات المخفية.",
        sql_placeholder: "أدخل اسم المنتج",
        sql_hint: "تلميح: جرب ' OR '1'='1",

        xss_title: "XSS (برمجة عبر المواقع)",
        xss_desc: "حقن كود JS ضار للسيطرة على متصفح المستخدم.",
        xss_scenario: "لوحة تعليقات بدون تصفية. الهدف: إظهار نافذة تنبيه 'alert'.",
        xss_placeholder: "اكتب تعليقك...",
        xss_hint: "تلميح: جرب <script>alert(1)</script>",

        ldap_title: "حقن LDAP",
        ldap_desc: "تجاوز لوحة الدخول بالتلاعب في مرشحات LDAP.",
        ldap_scenario: "استعلام LDAP في الخلفية. حاول الدخول كـ admin بدون كلمة مرور.",
        ldap_user_ph: "اسم المستخدم",
        ldap_pass_ph: "كلمة المرور",
        ldap_hint: "تلميح: أدخل * أو admin)(|",
    }
};

// --- ANA SİSTEM MANTIĞI ---
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTests();
});

function initLanguage() {
    const languageSelector = document.getElementById('language-selector');
    if(!languageSelector) return;

    const savedLang = localStorage.getItem('selectedLanguage') || 'tr';
    setLanguage(savedLang);
    languageSelector.value = savedLang;

    languageSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        localStorage.setItem('selectedLanguage', selectedLang);
    });
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl-mode');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl-mode');
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// --- TEST SİMÜLASYONLARI ---
function initTests() {
    
    // 1. SQL INJECTION LOGIC
    const sqlBtn = document.getElementById('btn-test-sql');
    if(sqlBtn) {
        sqlBtn.addEventListener('click', () => {
            const input = document.getElementById('sql-input').value;
            const logArea = document.getElementById('console-output');
            const resultArea = document.getElementById('sql-result');
            
            // Simüle edilen SQL Sorgusu
            let query = `SELECT * FROM products WHERE name = '${input}'`;
            
            // Ekrana log bas
            logArea.innerHTML += `> Executing: ${query}\n`;

            // HACK CHECK: Eğer inputta ' OR '1'='1 varsa
            if(input.includes("' OR '1'='1")) {
                logArea.innerHTML += `> [WARN] Tautology detected! Dumping DB...\n`;
                logArea.innerHTML += `> [SUCCESS] Access Granted.\n`;
                logArea.className = "console hacked";
                
                resultArea.innerHTML = `
                    <table style="width:100%; border-collapse: collapse; margin-top:10px;">
                        <tr style="border-bottom:1px solid #444"><th>ID</th><th>User</th><th>Password (Hash)</th><th>Credit Card</th></tr>
                        <tr><td>1</td><td>admin</td><td>e10adc3949ba59abbe56e057f20f883e</td><td>4500 **** **** 1234</td></tr>
                        <tr><td>2</td><td>user_test</td><td>5f4dcc3b5aa765d61d8327deb882cf99</td><td>5422 **** **** 9999</td></tr>
                        <tr><td>3</td><td>finance</td><td>be22031148452949485703298387483</td><td>3700 **** **** 0000</td></tr>
                    </table>
                `;
                alert("⚠️ SQL Injection Başarılı! Veritabanı sızdırıldı.");
            } else {
                logArea.innerHTML += `> No results found for '${input}'.\n`;
                resultArea.innerHTML = "<p style='color:#888'>Sonuç bulunamadı.</p>";
            }
        });
    }

    // 2. XSS LOGIC
    const xssBtn = document.getElementById('btn-test-xss');
    if(xssBtn) {
        xssBtn.addEventListener('click', () => {
            const input = document.getElementById('xss-input').value;
            const logArea = document.getElementById('console-output');
            const commentArea = document.getElementById('xss-result');

            logArea.innerHTML += `> Posting comment: "${input}"\n`;

            // HACK CHECK: Basit script kontrolü
            if(input.includes("<script>") && input.includes("</script>")) {
                logArea.innerHTML += `> [DANGER] Script tag detected via DOM!\n`;
                logArea.innerHTML += `> [SUCCESS] Payload Executed.\n`;
                logArea.className = "console hacked";
                
                // XSS Simülasyonu: Gerçekten alert çıkartalım ama güvenli bir şekilde
                setTimeout(() => { alert("XSS ALERT! (Simülasyon: Çerezleriniz çalınabilirdi)"); }, 500);
                
                // Yorumu "bozuk" veya "hacklenmiş" görsel ile ekle
                commentArea.innerHTML = `
                    <div style="background:rgba(255,0,0,0.1); border:1px solid red; padding:10px; margin-top:10px;">
                        <strong>Hacker:</strong> ${input.replace(/</g, "&lt;")} <br>
                        <span style="color:red; font-size:0.8em;">(Script Çalıştı!)</span>
                    </div>
                `;
            } else {
                logArea.innerHTML += `> Comment saved safely.\n`;
                commentArea.innerHTML = `
                    <div style="background:#2b2b2b; padding:10px; margin-top:10px; border-radius:4px;">
                        <strong>Misafir:</strong> ${input}
                    </div>
                `;
            }
        });
    }

    // 3. LDAP LOGIC
    const ldapBtn = document.getElementById('btn-test-ldap');
    if(ldapBtn) {
        ldapBtn.addEventListener('click', () => {
            const user = document.getElementById('ldap-user').value;
            const logArea = document.getElementById('console-output');
            
            // LDAP Sorgu Simülasyonu
            let query = `(&(cn=${user})(userPassword=*))`;
            logArea.innerHTML += `> Building LDAP Query: ${query}\n`;

            // HACK CHECK: Wildcard (*) veya Parantez kapama manipülasyonu
            if(user.includes("*") || user.includes("admin)(")) {
                logArea.innerHTML += `> [WARN] Filter manipulation detected!\n`;
                logArea.innerHTML += `> [SUCCESS] Authentication Bypass Successful.\n`;
                logArea.className = "console hacked";
                alert("🔓 LDAP Injection Başarılı! Admin paneline yönlendiriliyorsunuz (Simülasyon).");
            } else {
                logArea.innerHTML += `> Access Denied: Invalid credentials.\n`;
            }
        });
    }
}
