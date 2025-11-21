(function () {
  const STORAGE_KEY = "securityLabLang";
  const SUPPORTED_LANGS = ["tr", "en"];
  const DEFAULT_LANG = "tr";

  // ---- TRANSLATIONS ----
  const translations = {
    tr: {
      "brand.title": "Security Lab",
      "brand.subtitle": "Offensive & defensive security test playground",

      "nav.home": "Ana Sayfa",
      "nav.apiLab": "API Lab",
      "nav.automatedThreats": "Bot & Automated Threats",
      "nav.llmLab": "LLM Lab",
      "nav.login": "Giriş",

      "hero.badge": "Test et · Kır · Ölç · Güçlendir",
      "hero.title": "Kapsamlı Güvenlik Test Laboratuvarı",
      "hero.subtitle":
        "OWASP Top 10, OWASP API Top 10 ve OWASP Automated Threats Top 21 için izole, tekrarlanabilir ve pazarlama dostu bir test ortamı.",
      "hero.primaryCta": "Hızlı saldırı testine başla",
      "hero.secondaryCta": "Labı nasıl kullanacaksın?",
      "hero.panelTitle": "OWASP odaklı saldırı kütüphanesi",
      "hero.pillar.webTitle": "OWASP Top 10 (Web)",
      "hero.pillar.webDesc":
        "Injection, Broken Access Control, SSRF, Security Misconfiguration ve diğer çekirdek zafiyetler.",
      "hero.pillar.apiTitle": "OWASP API Top 10",
      "hero.pillar.apiDesc":
        "Aşırı veri ifşası, zayıf yetkilendirme, rate limit eksikliği gibi API odaklı riskler.",
      "hero.pillar.autoTitle": "Automated Threats Top 21",
      "hero.pillar.autoDesc":
        "Credential stuffing, card testing, scraping, scalping ve diğer bot saldırıları.",
      "hero.panelFootnote":
        "Bu sayfa, tüm OWASP başlıkları için kullanılacak şablondur. Aynı yapı diğer sayfalara kopyalanarak tutarlı deneyim sağlanır.",

      "metrics.attacksTitle": "Saldırı kategorisi",
      "metrics.pagesTitle": "Test sayfası",
      "metrics.modesTitle": "Mod",
      "metrics.modesValue": "Manual · Scripted · Bot",

      "quick.title": "Hızlı saldırı testleri",
      "quick.subtitle":
        "Butonlara tıkladığında, gerçek saldırı mantığını temsil eden bir akış konsolda gösterilir. Bu akış, WAF/CDN/sigorta gibi güvenlik katmanlarını test etmek için kullanılabilir.",
      "quick.sql.title": "SQL Injection (OWASP A03:2021)",
      "quick.sql.desc":
        "Zayıf login sorgusu üzerinden klasik SQL Injection akışını simüle eder; WAF ve input validation davranışını gözlemle.",
      "quick.xss.title": "XSS (Stored / Reflected)",
      "quick.xss.desc":
        "Script içeren kullanıcı girdisinin nasıl işlendiğini gösterir. Tarayıcı tarafında neler olacağını adım adım loglar.",
      "quick.ldap.title": "LDAP Injection",
      "quick.ldap.desc":
        "Zayıf LDAP filtresi kullanan dizin sorgularında nasıl yetkisiz erişime gidilebileceğini simüle eder.",
      "quick.payment.title": "Ödeme & Card Testing (OAT-001)",
      "quick.payment.desc":
        "Test kartı ile gerçekleştirilen, card testing benzeri yoğun denemeleri temsil eder. Gerçek ödeme yapılmaz.",
      "quick.bruteforce.title":
        "Brute Force / Credential Stuffing (OAT-007 / OAT-008)",
      "quick.bruteforce.desc":
        "Rate limit ve hesap kilitleme politikalarının zayıflığını ortaya çıkaran kaba kuvvet denemelerini simüle eder.",

      "buttons.sql": "SQL Injection testini başlat",
      "buttons.xss": "XSS testini başlat",
      "buttons.ldap": "LDAP Injection testini başlat",
      "buttons.payment": "Ödeme akışı testini başlat",
      "buttons.bruteforce": "Brute force testini başlat",
      "buttons.clearConsole": "Konsolu temizle",

      "scenario.sql.name": "SQL Injection",
      "scenario.xss.name": "XSS",
      "scenario.ldap.name": "LDAP Injection",
      "scenario.payment.name": "Ödeme / Card Testing",
      "scenario.bruteforce.name": "Brute Force / Credential Stuffing",

      "console.title": "Saldırı simülasyon konsolu",
      "console.subtitle":
        "Butonlardan bir senaryo seç; burada adım adım neler olduğunu izle.",
      "console.idle": "Hazır",
      "console.running": "Çalışıyor...",
      "console.done": "Tamamlandı.",
      "console.empty":
        "Henüz bir test seçilmedi. Soldan bir senaryo başlat.",
      "console.noScript":
        "Bu senaryo için henüz detaylı bir demo eklenmedi.",

      "how.title": "Bu labı nasıl kullanacaksın?",
      "how.subtitle":
        "Tüm OWASP başlıkları için aynı yapıyı kullanarak hem eğitim hem de pazarlama açısından anlatımı sade, tutarlı ve ikna edici kıl.",
      "how.step1.title": "Hedef OWASP başlığını seç",
      "how.step1.desc":
        "Menüden Web, API veya Automated Threats kategorisini seç ve ilgili OWASP maddesine giden alt sayfaya ilerle.",
      "how.step2.title": "Senaryoyu oku, testi başlat",
      "how.step2.desc":
        "Sayfadaki risk ve iş etkisi açıklamalarını incele; ardından butonlara tıklayarak simülasyonu çalıştır ve davranışı gözle.",
      "how.step3.title": "Ölç, iyileştir, yeniden dene",
      "how.step3.desc":
        "Güvenlik kontrollerini güncelledikten sonra aynı saldırıyı tekrar çalıştır; böylece bir önceki durumla kıyaslama yapabilirsin.",

      "footer.disclaimer":
        "Bu uygulama bilerek zafiyet içerecek şekilde tasarlanmıştır. Sadece izole laboratuvar ortamlarında, eğitim ve güvenlik testi amacıyla kullanılmalıdır.",
      "footer.warning":
        "Üretim ortamına deploy ETME. Gerçek müşteri verisi veya gerçek ödeme bilgisi kullanma."
    },

    en: {
      "brand.title": "Security Lab",
      "brand.subtitle": "Offensive & defensive security test playground",

      "nav.home": "Home",
      "nav.apiLab": "API Lab",
      "nav.automatedThreats": "Bot & Automated Threats",
      "nav.llmLab": "LLM Lab",
      "nav.login": "Login",

      "hero.badge": "Test · Break · Measure · Harden",
      "hero.title": "Comprehensive Security Testing Lab",
      "hero.subtitle":
        "Isolated, repeatable scenarios for OWASP Top 10, OWASP API Top 10 and OWASP Automated Threats Top 21. Designed for both red and blue teams.",
      "hero.primaryCta": "Start quick attack test",
      "hero.secondaryCta": "How to use this lab?",
      "hero.panelTitle": "OWASP-driven attack library",
      "hero.pillar.webTitle": "OWASP Top 10 (Web)",
      "hero.pillar.webDesc":
        "Injection, Broken Access Control, SSRF, Security Misconfiguration and other core risks.",
      "hero.pillar.apiTitle": "OWASP API Top 10",
      "hero.pillar.apiDesc":
        "API-specific risks such as excessive data exposure, broken object level authorization and missing rate limiting.",
      "hero.pillar.autoTitle": "Automated Threats Top 21",
      "hero.pillar.autoDesc":
        "Simulate credential stuffing, card testing, scraping, scalping and other bot-driven attacks.",
      "hero.panelFootnote":
        "This page acts as the reference layout for all OWASP detail pages. Copy the structure to each subpage for a consistent experience.",

      "metrics.attacksTitle": "Attack categories",
      "metrics.pagesTitle": "Test pages",
      "metrics.modesTitle": "Modes",
      "metrics.modesValue": "Manual · Scripted · Bot",

      "quick.title": "Quick attack tests",
      "quick.subtitle":
        "Each button triggers a realistic attack flow in the console. Use these flows to test WAF, CDN and security stack behaviour.",
      "quick.sql.title": "SQL Injection (OWASP A03:2021)",
      "quick.sql.desc":
        "Simulates a classic SQL Injection against a weak login query to observe WAF and validation behaviour.",
      "quick.xss.title": "XSS (Stored / Reflected)",
      "quick.xss.desc":
        "Shows how script-heavy user input is processed and what would happen in the victim’s browser.",
      "quick.ldap.title": "LDAP Injection",
      "quick.ldap.desc":
        "Simulates abuse of weak LDAP filters in directory lookup flows.",
      "quick.payment.title": "Payment & Card Testing (OAT-001)",
      "quick.payment.desc":
        "Represents high-volume test-card attempts similar to card testing activity. No real payment is executed.",
      "quick.bruteforce.title":
        "Brute Force / Credential Stuffing (OAT-007 / OAT-008)",
      "quick.bruteforce.desc":
        "Simulates repeated login attempts to reveal missing rate limiting and account lockout controls.",

      "buttons.sql": "Run SQL Injection test",
      "buttons.xss": "Run XSS test",
      "buttons.ldap": "Run LDAP Injection test",
      "buttons.payment": "Run payment flow test",
      "buttons.bruteforce": "Run brute force test",
      "buttons.clearConsole": "Clear console",

      "scenario.sql.name": "SQL Injection",
      "scenario.xss.name": "XSS",
      "scenario.ldap.name": "LDAP Injection",
      "scenario.payment.name": "Payment / Card Testing",
      "scenario.bruteforce.name": "Brute Force / Credential Stuffing",

      "console.title": "Attack simulation console",
      "console.subtitle":
        "Pick a scenario on the left and follow each step here.",
      "console.idle": "Idle",
      "console.running": "Running...",
      "console.done": "Completed.",
      "console.empty": "No test selected yet. Start a scenario on the left.",
      "console.noScript":
        "No detailed script has been added for this scenario yet.",

      "how.title": "How to use this lab?",
      "how.subtitle":
        "Use a consistent structure across all OWASP items so both security teams and stakeholders easily understand risk, impact and controls.",
      "how.step1.title": "Pick the target OWASP item",
      "how.step1.desc":
        "From the navigation, choose Web, API or Automated Threats and then drill down into the specific OWASP entry.",
      "how.step2.title": "Read the scenario, then run the test",
      "how.step2.desc":
        "Review risk and business impact description, then trigger the simulation and observe the stack behaviour.",
      "how.step3.title": "Measure, improve, re-run",
      "how.step3.desc":
        "After tuning your controls, re-run the same scenario to demonstrate before/after behaviour.",

      "footer.disclaimer":
        "This application is intentionally vulnerable. Use it only in isolated lab environments for education and security testing.",
      "footer.warning":
        "Do NOT deploy to production. Do not use real customer data or real payment information."
    }
  };

  // ---- TEST LOG SCRIPTS (SIMULATION ONLY) ----
  const testLogs = {
    tr: {
      sql: [
        "[client] /api/login endpoint’ine istek hazırlanıyor...",
        "[payload] username=admin' OR 1=1 --  &  password= herhangi bir değer",
        "[server] Girdi doğrudan SQL sorgusuna ekleniyor:",
        "         SELECT * FROM users WHERE username = 'admin' OR 1=1 -- ' AND password = '***'",
        "[effect] WHERE koşulu her zaman TRUE. Tüm kullanıcılar dönüyor → kimlik doğrulama atlandı.",
        "[waf] Bu pattern 'OR 1=1 --' WAF tarafından tespit edilip engellenmeliydi.",
        "[mitigation] Hazırlanmış ifadeler (prepared statement), parametreli sorgular ve bağlam bazlı input validation kullan."
      ],
      xss: [
        "[client] /comments endpoint’ine yorum gönderiliyor...",
        '[payload] <script>alert(\"xss\")</script>',
        "[server] Yorum, output encoding yapılmadan veritabanına kaydediliyor.",
        "[victim] Başka bir kullanıcı sayfayı açtığında script tarayıcıda çalışıyor.",
        "[impact] Session çalma, DOM manipülasyonu, keylogger vb. saldırılar mümkün.",
        "[mitigation] Çıkışta HTML encode et, güvenli şablon motoru kullan, Content Security Policy (CSP) uygula."
      ],
      ldap: [
        "[client] /directory/search için kullanıcılara ait kayıt aranıyor...",
        "[payload] (uid=admin)(|(uid=*)))",
        "[server] Filtre string’i direkt olarak LDAP sorgusuna gömülüyor:",
        "         (&(objectClass=user)(uid=admin)(|(uid=*))))",
        "[effect] Saldırgan ek filtreler ekleyerek yetkisiz tüm kayıtları listeleyebiliyor.",
        "[mitigation] LDAP filtrelerini güvenli builder ile oluştur, kullanıcı girdisini kaçışla, allow-list yaklaşımı kullan."
      ],
      payment: [
        "[client] /payment/charge endpoint’ine test kartı ile istek atılıyor...",
        "[info] Kullanılan kart numarası sadece lab ortamı içindir: 4111 1111 1111 1111",
        "[pattern] Ardışık binlerce küçük tutarlı deneme → card testing davranışı.",
        "[server] Rate limit zayıf veya yok; aynı IP ve kart pattern’leri engellenmiyor.",
        "[impact] Gerçek sistemlerde fraud maliyeti ve işlem ücreti kaybı oluşur.",
        "[mitigation] Velocity limit, device fingerprinting, bin kontrolleri ve 3DS gibi ilave güvenlik adımları uygula."
      ],
      bruteforce: [
        "[client] /login endpoint’ine ardışık giriş denemeleri yapılıyor...",
        "[pattern] Kullanıcı adı sabit, parola listesi sözlük dosyasından çekiliyor.",
        "[server] Başarısız giriş sayısına rağmen hesap kilitlenmiyor.",
        "[effect] Zayıf parola kombinasyonları kısa sürede tahmin edilebiliyor.",
        "[mitigation] Hesap kilitleme politikası, artan gecikme (progressive delay) ve IP bazlı rate limit uygula."
      ]
    },
    en: {
      sql: [
        "[client] Preparing request to /api/login ...",
        "[payload] username=admin' OR 1=1 --  &  password= any value",
        "[server] Input is concatenated directly into the SQL query:",
        "         SELECT * FROM users WHERE username = 'admin' OR 1=1 -- ' AND password = '***'",
        "[effect] WHERE condition is always TRUE. All users returned → authentication bypass.",
        "[waf] Pattern 'OR 1=1 --' should be detected and blocked by WAF.",
        "[mitigation] Use prepared statements, parameterised queries and context-aware input validation."
      ],
      xss: [
        "[client] Sending comment to /comments endpoint ...",
        '[payload] <script>alert(\"xss\")</script>',
        "[server] Comment is stored without proper output encoding.",
        "[victim] When another user loads the page, the script executes in their browser.",
        "[impact] Session hijacking, DOM manipulation, keylogging and other attacks become possible.",
        "[mitigation] HTML-encode output, use a safe template engine and enforce Content Security Policy (CSP)."
      ],
      ldap: [
        "[client] Performing directory lookup via /directory/search ...",
        "[payload] (uid=admin)(|(uid=*)))",
        "[server] Filter string is injected directly into the LDAP query:",
        "         (&(objectClass=user)(uid=admin)(|(uid*))))",
        "[effect] Attacker can extend the filter and retrieve unauthorised records.",
        "[mitigation] Build LDAP filters via safe builders, escape user input and prefer allow-lists."
      ],
      payment: [
        "[client] Sending payment request to /payment/charge using a test card...",
        "[info] Card number is lab-only test data: 4111 1111 1111 1111",
        "[pattern] Thousands of low-amount attempts in sequence → card testing behaviour.",
        "[server] Weak or no rate limiting; repeated IP/card patterns are not blocked.",
        "[impact] On real systems this leads to fraud losses and processing fee costs.",
        "[mitigation] Apply velocity limits, device fingerprinting, BIN checks and additional controls such as 3DS."
      ],
      bruteforce: [
        "[client] Performing repeated login attempts to /login ...",
        "[pattern] Username is fixed, password list comes from a dictionary file.",
        "[server] Account is not locked despite many failed attempts.",
        "[effect] Weak password combinations are eventually guessed.",
        "[mitigation] Enforce account lockout policies, progressive delays and IP-based rate limiting."
      ]
    }
  };

  // ---- LANGUAGE HELPERS ----

  function normalizeLang(lang) {
    if (!lang) return DEFAULT_LANG;
    const lower = String(lang).toLowerCase();
    if (SUPPORTED_LANGS.includes(lower)) return lower;
    if (lower.startsWith("tr")) return "tr";
    if (lower.startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  function getCurrentLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return normalizeLang(stored);
    } catch (_) {
      // ignore storage errors
    }
    if (typeof navigator !== "undefined") {
      return normalizeLang(navigator.language || navigator.userLanguage);
    }
    return DEFAULT_LANG;
  }

  function setCurrentLanguage(lang) {
    const normalized = normalizeLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch (_) {
      // ignore
    }
    document.documentElement.setAttribute("lang", normalized);
    applyTranslations(normalized);
    updateLanguageSwitchUI(normalized);
    return normalized;
  }

  function t(lang, key) {
    return (translations[lang] && translations[lang][key]) || "";
  }

  function applyTranslations(lang) {
    // Elements with text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value) el.textContent = value;
    });

    // Placeholders (if used later)
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      if (value) el.setAttribute("placeholder", value);
    });
  }

  function updateLanguageSwitchUI(lang) {
    const buttons = document.querySelectorAll(".sl-lang-switch__btn");
    buttons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (normalizeLang(btnLang) === lang) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });
  }

  function initLanguageSwitcher() {
    const buttons = document.querySelectorAll(".sl-lang-switch__btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setCurrentLanguage(lang);
      });
    });
  }

  // ---- CONSOLE / TESTS ----

  const SCENARIO_SELECTORS = {
    sql: "#btn-sql-injection",
    xss: "#btn-xss",
    ldap: "#btn-ldap",
    payment: "#btn-payment",
    bruteforce: "#btn-bruteforce"
  };

  let activeTimeout = null;

  function clearConsole() {
    const lang = getCurrentLanguage();
    const outputEl = document.getElementById("console-output");
    const statusEl = document.getElementById("console-status");
    const scenarioEl = document.getElementById("console-scenario");

    if (activeTimeout) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }

    if (outputEl) {
      const msg =
        (translations[lang] && translations[lang]["console.empty"]) ||
        "No test selected yet. Start a scenario on the left.";
      outputEl.textContent = msg;
    }
    if (statusEl) {
      statusEl.textContent =
        (translations[lang] && translations[lang]["console.idle"]) ||
        "Idle";
    }
    if (scenarioEl) {
      scenarioEl.textContent = "-";
    }
  }

  function runScenario(key) {
    const lang = getCurrentLanguage();
    const logsForLang = testLogs[lang] || {};
    const lines = logsForLang[key] || [];

    const outputEl = document.getElementById("console-output");
    const statusEl = document.getElementById("console-status");
    const scenarioEl = document.getElementById("console-scenario");

    if (!outputEl || !statusEl || !scenarioEl) return;

    if (activeTimeout) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }

    const scenarioNameKey = `scenario.${key}.name`;
    const scenarioName =
      (translations[lang] && translations[lang][scenarioNameKey]) ||
      key.toUpperCase();

    scenarioEl.textContent = scenarioName;
    statusEl.textContent =
      (translations[lang] && translations[lang]["console.running"]) ||
      "Running...";

    if (!lines.length) {
      const msg =
        (translations[lang] && translations[lang]["console.noScript"]) ||
        "No detailed script has been added for this scenario yet.";
      outputEl.textContent = msg;
      statusEl.textContent =
        (translations[lang] && translations[lang]["console.done"]) ||
        "Completed.";
      return;
    }

    outputEl.textContent = "";
    let index = 0;

    function step() {
      if (index >= lines.length) {
        statusEl.textContent =
          (translations[lang] && translations[lang]["console.done"]) ||
          "Completed.";
        activeTimeout = null;
        return;
      }
      outputEl.textContent += lines[index] + "\n";
      outputEl.scrollTop = outputEl.scrollHeight;
      index += 1;
      activeTimeout = setTimeout(step, 550);
    }

    step();
  }

  function initTestButtons() {
    Object.entries(SCENARIO_SELECTORS).forEach(([key, selector]) => {
      const btn = document.querySelector(selector);
      if (!btn) return;
      btn.addEventListener("click", () => runScenario(key));
    });

    const clearBtn = document.getElementById("btn-clear-console");
    if (clearBtn) {
      clearBtn.addEventListener("click", clearConsole);
    }
  }

  // ---- INIT ----

  document.addEventListener("DOMContentLoaded", function () {
    const initialLang = getCurrentLanguage();
    setCurrentLanguage(initialLang);
    initLanguageSwitcher();
    initTestButtons();
  });
})();
