/* --- 1. TEST MANTIĞI (INPUT & HANDLER) --- */
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

/* --- 2. ÇEVİRİLER (METİNLER) --- */
const translations = {
    tr: {
        page_title: "Siber Güvenlik Laboratuvarı 2025",
        page_sub: "OWASP Web • API Security • Automated Threats",
        sect_web: "🌐 OWASP Web Top 10 (2025 Lab Edition)",
        sect_api: "🔌 OWASP API Security Top 10 (2025)",
        sect_oat: "🤖 Automated Threats (OAT)",
        footer: "© 2025 Security Lab. Eğitim ve test amaçlıdır.",
        btn_test: "Test Et",
        lbl_logs: "Saldırı Logları (Terminal)",
        lbl_home: "Ana Sayfa",
        lbl_hint: "İPUCU",
        not_found: "404 - Test Bulunamadı",

        // Mesajlar
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
        msg_success_bola: "[BAŞARILI] BOLA: Admin verisi çekildi.",
        msg_secure_auth: "Yetki kontrolü başarılı.",
        msg_fail_noauth: "[HATA] Kimliksiz istek kabul edildi!",
        msg_req_token: "Token zorunlu.",
        msg_crit_privesc: "[KRİTİK] Yetki Yükseltme Başarılı!",
        msg_secure_param: "Parametre filtrelendi.",
        msg_fail_dos: "[HATA] API DoS koruması yok! Sunucu yanıt vermiyor.",
        msg_info_ratelimit: "İstek sınırı normal.",
        msg_success_bfla: "[BAŞARILI] Kullanıcı yetkisiyle Admin fonksiyonu çalıştı!",
        msg_block_403: "Erişim Engellendi (403).",
        msg_warn_bot: "[UYARI] Bot trafiği tespit edildi (Scalping).",
        msg_info_flow: "Akış normal.",
        msg_success_apisr: "[BAŞARILI] API üzerinden iç ağ tarandı!",
        msg_secure_hook: "Webhook güvenli.",
        msg_fail_cors: "[HATA] CORS '*' olarak ayarlanmış!",
        msg_secure_conf: "CORS Politikası Güvenli.",
        msg_warn_zombie: "[UYARI] Zombi API (v1) hala aktif!",
        msg_info_v2: "Güncel API (v2) kullanılıyor.",
        msg_fail_unsafe: "[HATA] Güvensiz 3. parti veri işlendi!",
        msg_info_clean: "Veri temizlendi.",
        msg_alert_carding: "[ALARM] Toplu kart denemesi tespit edildi!",
        msg_info_trans: "İşlem normal.",
        msg_fail_enum: "[HATA] Hesap numaralandırma mümkün!",
        msg_info_user: "Kullanıcı bulunamadı.",
        msg_success_stuff: "[BAŞARILI] Stuffing saldırısı başarılı!",
        msg_warn_scrape: "[UYARI] Veri kazıma (Scraping) tespit edildi.",
        msg_info_data: "Veri isteği.",
        msg_crit_dos: "[KRİTİK] L7 DoS Saldırısı! Servis çöktü.",
        msg_info_traffic: "Trafik normal.",

        // Senaryolar
        a01_title: "A01: Broken Access Control", a01_desc: "Yetkilendirme ihlalleri ve IDOR.", a01_hint: "User ID: 1",
        a02_title: "A02: Cryptographic Failures", a02_desc: "Hassas verilerin şifresiz iletimi.", a02_hint: "Kredi Kartı No",
        a03_title: "A03: Injection (2025)", a03_desc: "SQL, NoSQL ve Komut Enjeksiyonu.", a03_hint: "' OR '1'='1",
        a04_title: "A04: Insecure Design", a04_desc: "Güvensiz tasarım ve mantık hataları.", a04_hint: "Kupon: FREE100",
        a05_title: "A05: Misconfiguration", a05_desc: "Hatalı yapılandırma.", a05_hint: "admin : admin",
        a06_title: "A06: Vuln. Components", a06_desc: "Eski ve zafiyetli bileşenler.", a06_hint: "Sürüm: v1.0",
        a07_title: "A07: Auth Failures", a07_desc: "Kimlik doğrulama hataları.", a07_hint: "admin123",
        a08_title: "A08: Integrity Failures", a08_desc: "Veri bütünlüğü açıkları.", a08_hint: "object.rce()",
        a09_title: "A09: Logging Failures", a09_desc: "Yetersiz loglama.", a09_hint: "delete_logs",
        a10_title: "A10: SSRF", a10_desc: "Sunucu taraflı istek sahteciliği.", a10_hint: "http://169.254.169.254",

        api1_title: "API1: BOLA", api1_desc: "Nesne düzeyinde yetki kontrolü.", api1_hint: "/api/users/1",
        api2_title: "API2: Broken Auth", api2_desc: "API kimlik doğrulama zafiyetleri.", api2_hint: "Header: None",
        api3_title: "API3: Mass Assignment", api3_desc: "Toplu atama zafiyeti.", api3_hint: "{\"role\":\"admin\"}",
        api4_title: "API4: Resource Cons.", api4_desc: "Rate limit ve DoS.", api4_hint: "Send 1000 requests",
        api5_title: "API5: BFLA", api5_desc: "Fonksiyon düzeyinde yetki.", api5_hint: "DELETE /api/admin",
        api6_title: "API6: Sensitive Flows", api6_desc: "İş akışı ihlali.", api6_hint: "Buy 50 items",
        api7_title: "API7: SSRF (API)", api7_desc: "API tabanlı SSRF.", api7_hint: "Webhook: http://internal",
        api8_title: "API8: Misconfiguration", api8_desc: "Güvensiz yapılandırma.", api8_hint: "Origin: evil.com",
        api9_title: "API9: Inventory", api9_desc: "Eski API yönetimi.", api9_hint: "/api/v1/login",
        api10_title: "API10: Unsafe Cons.", api10_desc: "Güvensiz 3. parti veri.", api10_hint: "Malicious link",

        oat1_title: "OAT-001: Carding", oat1_desc: "Kart doğrulama saldırıları.", oat1_hint: "Kart listesi yükle",
        oat2_title: "OAT-007: Cracking", oat2_desc: "Hesap kırma.", oat2_hint: "user1, user2, user3",
        oat3_title: "OAT-008: Stuffing", oat3_desc: "Sızan verilerle giriş.", oat3_hint: "Combo list",
        oat4_title: "OAT-011: Scraping", oat4_desc: "Veri kazıma.", oat4_hint: "Get All Data",
        oat5_title: "OAT-015: DoS", oat5_desc: "Hizmet reddi saldırısı.", oat5_hint: "High Volume Traffic"
    },
    en: {
        page_title: "Cyber Security Lab 2025",
        page_sub: "OWASP Web • API Security • Automated Threats",
        sect_web: "🌐 OWASP Web Top 10 (2025 Lab Edition)",
        sect_api: "🔌 OWASP API Security Top 10 (2025)",
        sect_oat: "🤖 Automated Threats (OAT)",
        footer: "© 2025 Security Lab. For educational purposes.",
        btn_test: "Test Now",
        lbl_logs: "Attack Logs",
        lbl_home: "Dashboard",
        lbl_hint: "HINT",
        not_found: "Test Not Found",
        msg_success_sql: "[CRITICAL] DB DUMPED!",
        // Diğer İngilizce mesajlar fallback olarak TR'den veya koda gömülü mantıktan gelebilir, 
        // ama burayı kısa tuttum. Önemli olan TR'nin çalışması.
    }
};

/* --- 3. CORE ENGINE (ÇALIŞTIRICI) --- */
document.addEventListener('DOMContentLoaded', () => {
    setupLanguage();
    
    // Eğer test-lab sayfasındaysak (input-area varsa), testi başlat
    if(document.getElementById('lab-interface')) {
        initLab(); 
    }
});

function setupLanguage() {
    const selector = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('lang') || 'tr';
    
    if(selector) {
        selector.value = savedLang;
        selector.addEventListener('change', (e) => {
            localStorage.setItem('lang', e.target.value);
            location.reload(); // Dil değişince sayfayı yenile ki her şey temiz gelsin
        });
    }
    applyLanguage(savedLang);
}

function getTrans(key, lang) {
    // Önce seçili dilde ara, yoksa TR'de ara, yoksa key'i döndür
    if(translations[lang] && translations[lang][key]) return translations[lang][key];
    if(translations['tr'][key]) return translations['tr'][key];
    return key; 
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Statik elementleri çevir
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = getTrans(key, lang);
    });
}

function initLab() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // URL'den ID'yi al (örn: a03)
    const logic = scenariosLogic[id]; // Mantığı çek
    const lang = localStorage.getItem('lang') || 'tr';

    // Eğer ID yoksa veya geçersizse
    if(!logic) {
        document.getElementById('lab-title').innerText = getTrans('not_found', lang);
        document.getElementById('lab-desc').innerText = "";
        document.getElementById('input-area').innerHTML = "";
        return;
    }

    // Başlıkları Doldur
    document.getElementById('lab-title').innerText = getTrans(id + '_title', lang);
    document.getElementById('lab-desc').innerText = getTrans(id + '_desc', lang);
    
    const hintText = getTrans(id + '_hint', lang);
    document.getElementById('lab-hint').innerText = hintText;

    // Input Alanını Oluştur
    const inputArea = document.getElementById('input-area');
    const btnText = getTrans('btn_test', lang);
    
    inputArea.innerHTML = `
        <input type="${logic.type}" id="tester-input" placeholder="${hintText}" style="width:100%; padding:10px; margin-bottom:10px; background:#0f172a; border:1px solid #334155; color:#fff;">
        <button id="execute-btn" class="btn" style="width:100%;">${btnText}</button>
    `;

    // Loglama Sistemi
    const logConsole = document.getElementById('console-logs');
    const log = (text, type = 'info') => {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerText = `> ${text}`;
        logConsole.prepend(entry);
    };

    // Buton Tıklama Olayı
    document.getElementById('execute-btn').addEventListener('click', () => {
        const val = document.getElementById('tester-input').value;
        log(`Payload: ${val}`, 'cmd');
        
        setTimeout(() => {
            const result = logic.handler(val);
            const msg = getTrans(result.k, lang);
            
            if(result.s) {
                log(msg, 'success');
                logConsole.style.border = "1px solid #ef4444";
            } else {
                log(msg, 'error');
            }
        }, 300);
    });
}
