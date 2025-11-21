/* --- 1. SENARYO MANTIĞI (LOGIC ONLY) --- */
// Metinler buradan kaldırıldı, aşağıya 'translations' kısmına taşındı.
const scenariosLogic = {
    // OWASP WEB TOP 10
    'a01': { type: 'input', handler: (v) => v === '1' ? {s:true, k:'msg_success_idor'} : {s:false, k:'msg_fail_access'} },
    'a02': { type: 'input', handler: (v) => v.length > 10 ? {s:true, k:'msg_fail_crypto'} : {s:false, k:'msg_fail_input'} },
    'a03': { type: 'input', handler: (v) => (v.includes("' OR '1'='1") || v.includes('1=1')) ? {s:true, k:'msg_success_sql'} : {s:false, k:'msg_fail_sql'} },
    'a04': { type: 'input', handler: (v) => v === 'FREE100' ? {s:true, k:'msg_success_logic'} : {s:false, k:'msg_fail_coupon'} },
    'a05': { type: 'input', handler: (v) => v === 'admin:admin' ? {s:true, k:'msg_success_default'} : {s:false, k:'msg_fail_login'} },
    'a06': { type: 'input', handler: (v) => v === 'v1.0' ? {s:true, k:'msg_warn_outdated'} : {s:false, k:'msg_secure_ver'} },
    'a07': { type: 'password', handler: (v) => v === 'admin123' ? {s:true, k:'msg_success_login'} : {s:false, k:'msg_fail_pass'} },
    'a08': { type: 'input', handler: (v) => v.includes('rce()') ? {s:true, k:'msg_crit_rce'} : {s:false, k:'msg_secure_obj'} },
    'a09': { type: 'input', handler: (v) => v === 'delete_logs' ? {s:true, k:'msg_alert_nolog'} : {s:false, k:'msg_info_log'} },
    'a10': { type: 'input', handler: (v) => v.includes('169.254') || v.includes('localhost') ? {s:true, k:'msg_success_ssrf'} : {s:false, k:'msg_block_ssrf'} },

    // API SECURITY TOP 10
    'api1': { type: 'input', handler: (v) => v.includes('/1') ? {s:true, k:'msg_success_bola'} : {s:false, k:'msg_secure_auth'} },
    'api2': { type: 'input', handler: (v) => v.toLowerCase().includes('none') ? {s:true, k:'msg_fail_noauth'} : {s:false, k:'msg_req_token'} },
    'api3': { type: 'input', handler: (v) => v.includes('admin') ? {s:true, k:'msg_crit_privesc'} : {s:false, k:'msg_secure_param'} },
    'api4': { type: 'input', handler: (v) => v.includes('1000') ? {s:true, k:'msg_fail_dos'} : {s:false, k:'msg_info_ratelimit'} },
    'api5': { type: 'input', handler: (v) => v.includes('DELETE') ? {s:true, k:'msg_success_bfla'} : {s:false, k:'msg_block_403'} },
    'api6': { type: 'input', handler: (v) => v.includes('50') ? {s:true, k:'msg_warn_bot'} : {s:false, k:'msg_info_flow'} },
    'api7': { type: 'input', handler: (v) => v.includes('internal') ? {s:true, k:'msg_success_apisr'} : {s:false, k:'msg_secure_hook'} },
    'api8': { type: 'input', handler: (v) => v.includes('evil.com') ? {s:true, k:'msg_fail_cors'} : {s:false, k:'msg_secure_conf'} },
    'api9': { type: 'input', handler: (v) => v.includes('v1') ? {s:true, k:'msg_warn_zombie'} : {s:false, k:'msg_info_v2'} },
    'api10': { type: 'input', handler: (v) => v.includes('malicious') ? {s:true, k:'msg_fail_unsafe'} : {s:false, k:'msg_info_clean'} },

    // AUTOMATED THREATS
    'oat1': { type: 'input', handler: (v) => v.length > 5 ? {s:true, k:'msg_alert_carding'} : {s:false, k:'msg_info_trans'} },
    'oat2': { type: 'input', handler: (v) => v.includes(',') ? {s:true, k:'msg_fail_enum'} : {s:false, k:'msg_info_user'} },
    'oat3': { type: 'input', handler: (v) => v.toLowerCase().includes('combo') ? {s:true, k:'msg_success_stuff'} : {s:false, k:'msg_fail_login'} },
    'oat4': { type: 'input', handler: (v) => v.includes('All') ? {s:true, k:'msg_warn_scrape'} : {s:false, k:'msg_info_data'} },
    'oat5': { type: 'input', handler: (v) => v.includes('High') ? {s:true, k:'msg_crit_dos'} : {s:false, k:'msg_info_traffic'} }
};

/* --- 2. ÇEVİRİ VERİTABANI (TÜM METİNLER BURADA) --- */
const translations = {
    tr: {
        // UI Genel
        page_title: "Siber Güvenlik Laboratuvarı 2025",
        page_sub: "OWASP Web • API Security • Automated Threats",
        sect_web: "🌐 OWASP Web Top 10 (2025 Lab Edition)",
        sect_api: "🔌 OWASP API Security Top 10 (2025)",
        sect_oat: "🤖 Automated Threats (OAT)",
        footer: "© 2025 Security Lab. Eğitim ve test amaçlıdır.",
        btn_test: "Test Et",
        btn_start: "Saldırıyı Başlat",
        lbl_logs: "Saldırı Logları (Terminal)",
        lbl_home: "Ana Sayfa",
        lbl_hint: "İPUCU / HINT",
        not_found: "404 - Test Bulunamadı",

        // Mesajlar (Loglar)
        msg_success_idor: "[BAŞARILI] Admin paneline erişildi! (IDOR Başarılı)",
        msg_fail_access: "Erişim reddedildi.",
        msg_fail_crypto: "[HATA] Kritik veri şifresiz tespit edildi.",
        msg_fail_input: "Veri girilmedi.",
        msg_success_sql: "[KRİTİK] DB DUMPED! Tablo içeriği sızdı.",
        msg_fail_sql: "Enjeksiyon başarısız.",
        msg_success_logic: "[BAŞARILI] Tasarım hatası: Sınırsız indirim!",
        msg_fail_coupon: "Kupon geçersiz.",
        msg_success_default: "[BAŞARILI] Varsayılan (Default) hesap açık!",
        msg_fail_login: "Giriş başarısız.",
        msg_warn_outdated: "[UYARI] v1.0 sürümünde bilinen CVE zafiyetleri var!",
        msg_secure_ver: "Sürüm güvenli.",
        msg_success_login: "[BAŞARILI] Zayıf parola tespit edildi.",
        msg_fail_pass: "Parola yanlış.",
        msg_crit_rce: "[KRİTİK] Güvensiz deserialization ile RCE çalıştı!",
        msg_secure_obj: "Bütünlük hatası yok.",
        msg_alert_nolog: "[ALARM] Kritik işlem yapıldı ancak LOG KAYDI YOK!",
        msg_info_log: "Loglama aktif.",
        msg_success_ssrf: "[BAŞARILI] Cloud Metadata servisine erişildi!",
        msg_block_ssrf: "SSRF girişimi engellendi.",
        
        // API & OAT Mesajları (Örnekler)
        msg_success_bola: "[BAŞARILI] BOLA: Admin verisi çekildi.",
        msg_secure_auth: "Yetki kontrolü başarılı.",
        msg_fail_noauth: "[HATA] Kimliksiz istek kabul edildi!",
        msg_req_token: "Token zorunlu.",
        msg_crit_privesc: "[KRİTİK] Yetki Yükseltme Başarılı!",
        msg_secure_param: "Parametre filtrelendi.",
        msg_alert_carding: "[ALARM] Carding saldırısı tespit edildi!",
        msg_info_trans: "İşlem normal.",

        // Senaryo Başlık & Açıklamalar & İpuçları
        // Format: [id]_title, [id]_desc, [id]_hint
        
        // A01 - A10
        a01_title: "A01: Broken Access Control", a01_desc: "Yetkilendirme ihlalleri ve IDOR testleri.", a01_hint: "User ID: 1 (Admin)",
        a02_title: "A02: Cryptographic Failures", a02_desc: "Hassas verilerin şifresiz iletimi.", a02_hint: "Kredi kartı no girin",
        a03_title: "A03: Injection (2025)", a03_desc: "SQL, NoSQL, Command Injection testleri.", a03_hint: "' OR '1'='1",
        a04_title: "A04: Insecure Design", a04_desc: "Güvensiz tasarım ve mantık hataları.", a04_hint: "Kupon: FREE100",
        a05_title: "A05: Security Misconfig", a05_desc: "Hatalı yapılandırma ve varsayılan hesaplar.", a05_hint: "admin : admin",
        a06_title: "A06: Vuln. Components", a06_desc: "Eski bileşen taraması.", a06_hint: "Sürüm: v1.0",
        a07_title: "A07: Identification Failures", a07_desc: "Kimlik doğrulama hataları.", a07_hint: "admin123",
        a08_title: "A08: Integrity Failures", a08_desc: "Veri bütünlüğü ve CI/CD hataları.", a08_hint: "Payload: object.rce()",
        a09_title: "A09: Logging Failures", a09_desc: "Yetersiz loglama.", a09_hint: "Giriş: delete_logs",
        a10_title: "A10: SSRF", a10_desc: "Sunucu taraflı istek sahteciliği.", a10_hint: "http://169.254.169.254",

        // API1 - API10
        api1_title: "API1: BOLA", api1_desc: "Nesne düzeyinde yetki kontrolü.", api1_hint: "/api/users/1",
        api2_title: "API2: Broken Auth", api2_desc: "API kimlik doğrulama hataları.", api2_hint: "Header: None",
        api3_title: "API3: Broken Object Property", api3_desc: "Mass Assignment zafiyeti.", api3_hint: "{\"role\":\"admin\"}",
        api4_title: "API4: Resource Consumption", api4_desc: "Rate limit ve DoS testleri.", api4_hint: "Send 1000 requests",
        api5_title: "API5: BFLA", api5_desc: "Fonksiyon düzeyinde yetki.", api5_hint: "DELETE /api/admin",
        api6_title: "API6: Sensitive Flows", api6_desc: "İş akışı kötüye kullanımı.", api6_hint: "Buy 50 items (Bot)",
        api7_title: "API7: SSRF (API)", api7_desc: "API tabanlı SSRF.", api7_hint: "Webhook: http://internal",
        api8_title: "API8: Misconfiguration", api8_desc: "CORS ve hata mesajları.", api8_hint: "Origin: evil.com",
        api9_title: "API9: Improper Inventory", api9_desc: "Eski API endpointleri.", api9_hint: "/api/v1/login",
        api10_title: "API10: Unsafe Consumption", api10_desc: "3. parti veri tüketimi.", api10_hint: "Malicious link",

        // OAT1 - OAT5
        oat1_title: "OAT-001: Carding", oat1_desc: "Kart doğrulama saldırıları.", oat1_hint: "Kart listesi yükle",
        oat2_title: "OAT-007: Cracking", oat2_desc: "Hesap numaralandırma.", oat2_hint: "user1, user2, user3",
        oat3_title: "OAT-008: Stuffing", oat3_desc: "Sızan verilerle giriş.", oat3_hint: "Combo list yükle",
        oat4_title: "OAT-011: Scraping", oat4_desc: "Veri kazıma botları.", oat4_hint: "Get All Data",
        oat5_title: "OAT-015: DoS", oat5_desc: "Uygulama katmanı DoS.", oat5_hint: "High Volume Traffic"
    },
    en: {
        page_title: "Cyber Security Lab 2025",
        page_sub: "OWASP Web • API Security • Automated Threats",
        sect_web: "🌐 OWASP Web Top 10 (2025 Lab Edition)",
        sect_api: "🔌 OWASP API Security Top 10 (2025)",
        sect_oat: "🤖 Automated Threats (OAT)",
        footer: "© 2025 Security Lab. For educational purposes.",
        btn_test: "Test Now",
        btn_start: "Execute Attack",
        lbl_logs: "Attack Logs (Terminal)",
        lbl_home: "Dashboard",
        lbl_hint: "HINT",
        not_found: "404 - Test Not Found",

        // Messages
        msg_success_idor: "[SUCCESS] Admin panel accessed! (IDOR Success)",
        msg_fail_access: "Access denied.",
        msg_fail_crypto: "[FAIL] Sensitive data sent in cleartext.",
        msg_fail_input: "No data entered.",
        msg_success_sql: "[CRITICAL] DB DUMPED! Table content leaked.",
        msg_fail_sql: "Injection failed.",
        msg_success_logic: "[SUCCESS] Design flaw: Unlimited discount!",
        msg_fail_coupon: "Invalid coupon.",
        msg_success_default: "[SUCCESS] Default credentials active!",
        msg_fail_login: "Login failed.",
        msg_warn_outdated: "[WARN] CVE vulnerabilities found in v1.0!",
        msg_secure_ver: "Version secure.",
        msg_success_login: "[SUCCESS] Weak password detected.",
        msg_fail_pass: "Incorrect password.",
        msg_crit_rce: "[CRITICAL] RCE via insecure deserialization!",
        msg_secure_obj: "Object integrity verified.",
        msg_alert_nolog: "[ALERT] Critical action performed WITHOUT LOGS!",
        msg_info_log: "Logging active.",
        msg_success_ssrf: "[SUCCESS] Accessed Cloud Metadata service!",
        msg_block_ssrf: "SSRF attempt blocked.",
        msg_success_bola: "[SUCCESS] BOLA: Admin data retrieved.",
        msg_secure_auth: "Auth check passed.",
        msg_fail_noauth: "[FAIL] Unauthenticated request accepted!",
        msg_req_token: "Token required.",
        msg_crit_privesc: "[CRITICAL] Privilege Escalation Successful!",
        msg_secure_param: "Parameter sanitized.",
        msg_alert_carding: "[ALERT] Carding attack detected!",
        msg_info_trans: "Transaction normal.",

        // Scenarios (Mapping ID to Text)
        a01_title: "A01: Broken Access Control", a01_desc: "Auth violations & IDOR tests.", a01_hint: "User ID: 1 (Admin)",
        a02_title: "A02: Cryptographic Failures", a02_desc: "Cleartext transmission of sensitive data.", a02_hint: "Enter credit card no",
        a03_title: "A03: Injection (2025)", a03_desc: "SQL, NoSQL, Command Injection.", a03_hint: "' OR '1'='1",
        a04_title: "A04: Insecure Design", a04_desc: "Insecure design & logic flaws.", a04_hint: "Coupon: FREE100",
        a05_title: "A05: Security Misconfig", a05_desc: "Misconfiguration & default accounts.", a05_hint: "admin : admin",
        a06_title: "A06: Vuln. Components", a06_desc: "Outdated component scanning.", a06_hint: "Version: v1.0",
        a07_title: "A07: Identification Failures", a07_desc: "Auth & session failures.", a07_hint: "admin123",
        a08_title: "A08: Integrity Failures", a08_desc: "Data integrity & CI/CD flaws.", a08_hint: "Payload: object.rce()",
        a09_title: "A09: Logging Failures", a09_desc: "Insufficient logging.", a09_hint: "Input: delete_logs",
        a10_title: "A10: SSRF", a10_desc: "Server-Side Request Forgery.", a10_hint: "http://169.254.169.254",

        api1_title: "API1: BOLA", api1_desc: "Object level authorization.", api1_hint: "/api/users/1",
        api2_title: "API2: Broken Auth", api2_desc: "API authentication flaws.", api2_hint: "Header: None",
        api3_title: "API3: Broken Object Property", api3_desc: "Mass Assignment vuln.", api3_hint: "{\"role\":\"admin\"}",
        api4_title: "API4: Resource Consumption", api4_desc: "Rate limiting & DoS.", api4_hint: "Send 1000 requests",
        api5_title: "API5: BFLA", api5_desc: "Function level auth.", api5_hint: "DELETE /api/admin",
        api6_title: "API6: Sensitive Flows", api6_desc: "Business flow abuse.", api6_hint: "Buy 50 items (Bot)",
        api7_title: "API7: SSRF (API)", api7_desc: "API-driven SSRF.", api7_hint: "Webhook: http://internal",
        api8_title: "API8: Misconfiguration", api8_desc: "CORS & Error messages.", api8_hint: "Origin: evil.com",
        api9_title: "API9: Improper Inventory", api9_desc: "Deprecated API endpoints.", api9_hint: "/api/v1/login",
        api10_title: "API10: Unsafe Consumption", api10_desc: "3rd party data consumption.", api10_hint: "Malicious link",

        oat1_title: "OAT-001: Carding", oat1_desc: "Payment manipulation.", oat1_hint: "Upload card list",
        oat2_title: "OAT-007: Cracking", oat2_desc: "Account enumeration.", oat2_hint: "user1, user2, user3",
        oat3_title: "OAT-008: Stuffing", oat3_desc: "Credential stuffing.", oat3_hint: "Upload combo list",
        oat4_title: "OAT-011: Scraping", oat4_desc: "Data scraping bots.", oat4_hint: "Get All Data",
        oat5_title: "OAT-015: DoS", oat5_desc: "App layer DoS.", oat5_hint: "High Volume Traffic"
    },
    fr: {
        page_title: "Laboratoire de Sécurité 2025",
        page_sub: "OWASP Web • Sécurité API • Menaces Automatisées",
        sect_web: "🌐 OWASP Web Top 10 (Édition Lab 2025)",
        sect_api: "🔌 Sécurité API Top 10 (2025)",
        sect_oat: "🤖 Menaces Automatisées (OAT)",
        footer: "© 2025 Security Lab. À des fins éducatives.",
        btn_test: "Tester",
        btn_start: "Lancer l'attaque",
        lbl_logs: "Journaux d'attaque (Terminal)",
        lbl_home: "Accueil",
        lbl_hint: "INDICE",
        not_found: "404 - Test introuvable",

        // FR Messages Generic Placeholder (Örnek)
        msg_success_sql: "[CRITIQUE] DB DUMPED! Contenu de la table divulgué.",
        msg_fail_sql: "L'injection a échoué.",
        // ... (Diğer mesajlar EN ile aynı kalabilir veya tek tek çevrilebilir)

        a01_title: "A01: Contrôle d'accès défaillant", a01_desc: "Violations d'autorisation & IDOR.", a01_hint: "ID Utilisateur: 1 (Admin)",
        a03_title: "A03: Injection (2025)", a03_desc: "SQL, NoSQL, Injection de commande.", a03_hint: "' OR '1'='1",
        // ... Diğer başlıklar benzer mantıkla buraya eklenir ...
        // (Hata olmaması için kodun devamında fallback mekanizması kullanacağız)
    },
    ar: {
        page_title: "مختبر الأمن السيبراني 2025",
        page_sub: "OWASP Web • أمان API • التهديدات الآلية",
        sect_web: "🌐 OWASP Web Top 10 (إصدار 2025)",
        sect_api: "🔌 أمان API Top 10 (2025)",
        sect_oat: "🤖 التهديدات الآلية (OAT)",
        footer: "© 2025 Security Lab. للأغراض التعليمية.",
        btn_test: "اختبار",
        btn_start: "بدء الهجوم",
        lbl_logs: "سجلات الهجوم (Terminal)",
        lbl_home: "الرئيسية",
        lbl_hint: "تلميح",
        not_found: "404 - الاختبار غير موجود",

        msg_success_sql: "[حرج] تم تفريغ قاعدة البيانات!",
        
        a01_title: "A01: كسر التحكم في الوصول", a01_desc: "انتهاكات التصريح و IDOR.", a01_hint: "مستخدم: 1 (مشرف)",
        a03_title: "A03: الحقن (Injection)", a03_desc: "حقن SQL و Command.", a03_hint: "' OR '1'='1",
        // ...
    }
};

/* --- 3. CORE ENGINE --- */
document.addEventListener('DOMContentLoaded', () => {
    setupLanguage();
    if(document.getElementById('lab-interface')) {
        initLab();
    } else {
        // Index sayfasındaysak kartları güncelle (Dinamik Çeviri)
        updateDashboardCards();
    }
});

function setupLanguage() {
    const selector = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('lang') || 'tr';
    if(selector) {
        selector.value = savedLang;
        selector.addEventListener('change', (e) => {
            const newLang = e.target.value;
            localStorage.setItem('lang', newLang);
            applyLanguage(newLang);
        });
    }
    applyLanguage(savedLang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // 1. Statik HTML elementlerini çevir
    const t = translations[lang] || translations['en']; // Fallback to EN
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(t[key]) el.innerText = t[key];
    });

    // 2. Eğer Index sayfasındaysak, kart başlıklarını da güncelle
    if(!document.getElementById('lab-interface')) {
        updateDashboardCards(lang);
    } else {
        // 3. Test sayfasındaysak, test başlıklarını güncelle
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if(id) updateLabTexts(id, lang);
    }
}

function getTrans(key, lang) {
    // Güvenli çeviri fonksiyonu (Eğer dilde yoksa İngilizce getir)
    const dict = translations[lang] || translations['en'];
    return dict[key] || translations['en'][key] || key;
}

function updateDashboardCards(lang = localStorage.getItem('lang') || 'tr') {
    // Tüm senaryo kartlarını bul ve çevirilerini yapıştır
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Linkten ID'yi çek (test-lab.html?id=a01)
        const href = card.getAttribute('href');
        if(href && href.includes('id=')) {
            const id = href.split('id=')[1];
            
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            
            if(titleEl) titleEl.innerText = getTrans(`${id}_title`, lang);
            if(descEl) descEl.innerText = getTrans(`${id}_desc`, lang);
        }
    });
}

function updateLabTexts(id, lang) {
    // Test sayfasındaki dinamik metinleri güncelle
    const titleEl = document.getElementById('lab-title');
    const descEl = document.getElementById('lab-desc');
    const hintEl = document.getElementById('lab-hint');
    const inputEl = document.getElementById('tester-input');

    if(titleEl) titleEl.innerText = getTrans(`${id}_title`, lang);
    if(descEl) descEl.innerText = getTrans(`${id}_desc`, lang);
    if(hintEl) hintEl.innerText = getTrans(`${id}_hint`, lang);
    if(inputEl) inputEl.placeholder = getTrans(`${id}_hint`, lang);
}

function initLab() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const logic = scenariosLogic[id];
    const lang = localStorage.getItem('lang') || 'tr';

    if(!logic) {
        document.getElementById('lab-title').innerText = getTrans('not_found', lang);
        return;
    }

    // İlk yüklemede metinleri bas
    updateLabTexts(id, lang);
    
    const inputArea = document.getElementById('input-area');
    let inputHTML = `<input type="${logic.type}" id="tester-input" placeholder="...">`;
    
    // Butonun kendisi de çevrilebilir (data-key var ama JS ile yeniden basıyoruz)
    const btnText = getTrans('btn_start', lang);
    inputArea.innerHTML = inputHTML + `<button id="execute-btn" class="btn">${btnText}</button>`;
    
    // Placeholder'ı tekrar güncelle (innerHTML sıfırladığı için)
    updateLabTexts(id, lang);

    const logConsole = document.getElementById('console-logs');
    const log = (text, type = 'info') => {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerText = `> ${text}`;
        logConsole.prepend(entry);
    };

    document.getElementById('execute-btn').addEventListener('click', () => {
        const val = document.getElementById('tester-input').value;
        log(`Payload: ${val.substring(0, 40)}...`, 'cmd');
        
        setTimeout(() => {
            const result = logic.handler(val);
            // Sonucu çeviri tablosundan çek
            const msg = getTrans(result.k, localStorage.getItem('lang') || 'tr');
            
            if(result.s) {
                log(msg, 'success');
                logConsole.style.border = "1px solid #ef4444";
            } else {
                log(msg, 'error');
            }
        }, 400);
    });
}