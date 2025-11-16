# 🚀 Netlify ile Deployment - Adım Adım Rehber

## 📋 İçindekiler
1. [Ön Hazırlık](#ön-hazırlık)
2. [GitHub Repository Oluşturma](#github-repository-oluşturma)
3. [Netlify ile Deploy Etme](#netlify-ile-deploy-etme)
4. [Domain Ayarları](#domain-ayarları)
5. [Site Testi](#site-testi)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Ön Hazırlık

### Gerekli Araçlar
- [ ] GitHub hesabı (ücretsiz)
- [ ] Netlify hesabı (ücretsiz)
- [ ] Git kurulu (https://git-scm.com/downloads)
- [ ] Metin editörü (VS Code önerilir)

### Dosya Kontrolü
Projenizde şu dosyalar olmalı:
```
security-lab/
├── index.html
├── login.html
├── payment.html (YENİ!)
├── register.html
├── profile.html
├── admin.html
├── ai-chat.html
├── api-test.html
├── bot-challenge.html
├── upload.html
├── search.html
├── forgot-password.html
├── static-page1.html
├── static-page2.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── main.js
│   ├── i18n.js (YENİ!)
│   └── payment.js (YENİ!)
├── api/
│   └── stats.json
├── netlify.toml
└── README.md
```

---

## 📦 ADIM 1: GitHub Repository Oluşturma

### 1.1 GitHub'da Yeni Repository Oluştur

1. **GitHub'a git:** https://github.com
2. **"New repository" butonuna tıkla** (sağ üst köşe)
3. **Repository bilgilerini gir:**
   - Repository name: `security-lab`
   - Description: `Comprehensive Security Testing Laboratory`
   - ✅ Public
   - ❌ Initialize with README (zaten var)
4. **"Create repository" tıkla**

### 1.2 Lokal Olarak Git Başlat

Terminal/Command Prompt'u aç ve proje klasörüne git:

```bash
# Proje klasörüne git
cd /path/to/security-lab

# Git'i başlat (ilk kez)
git init

# Tüm dosyaları staging area'ya ekle
git add .

# İlk commit
git commit -m "Initial commit: Security testing lab with payment system"

# GitHub repository'yi remote olarak ekle
# [YOUR-USERNAME] yerine GitHub kullanıcı adınızı yazın
git remote add origin https://github.com/tolgahmtcgl@gmail.com/security-lab.git

# Main branch'e push et
git branch -M main
git push -u origin main
```

### 1.3 Başarılı Upload Kontrolü

1. GitHub repository sayfanızı yenileyin
2. Tüm dosyaların görünür olduğunu kontrol edin
3. `payment.html` ve `js/i18n.js` dosyalarının olduğunu doğrulayın

---

## 🌐 ADIM 2: Netlify ile Deploy Etme

### Metod 1: GitHub Üzerinden Deploy (ÖNERİLEN)

#### 2.1 Netlify'a Giriş Yap

1. **Netlify'a git:** https://app.netlify.com
2. **"Sign up" veya "Log in" tıkla**
3. **"GitHub" ile giriş yap** (en kolay yöntem)
4. GitHub ile Netlify'ı authorize et

#### 2.2 Yeni Site Oluştur

1. **"Add new site"** butonuna tıkla
2. **"Import an existing project"** seç
3. **"Deploy with GitHub"** seç
4. Netlify'a GitHub erişimi ver (ilk kez sorulacak)

#### 2.3 Repository Seç

1. Açılan listede **"security-lab"** repository'nizi bulun
2. **Repository'ye tıklayın**

#### 2.4 Build Ayarları

```
Branch to deploy: main
Build command: (BOŞ BIRAKIN)
Publish directory: . (nokta işareti)
```

**"Deploy site"** butonuna tıklayın!

#### 2.5 Deploy İşlemi

- Deploy süreci 1-3 dakika sürer
- **"Site deploy in progress"** mesajını göreceksiniz
- Yeşil **"Published"** yazısı göründüğünde hazır!

### Metod 2: Drag & Drop ile Deploy (HIZLI TEST)

#### 2.1 Netlify Drop'a Git

1. https://app.netlify.com/drop adresine git
2. Proje klasörünüzü **sürükle-bırak** yapın
3. Deploy otomatik başlayacak!

**NOT:** Bu metod güncelleme yapmanızı zorlaştırır. Kalıcı projeler için Metod 1 önerilir.

### Metod 3: Netlify CLI (Gelişmiş Kullanıcılar)

```bash
# Netlify CLI kur
npm install -g netlify-cli

# Netlify'a login ol
netlify login

# Proje klasörüne git
cd /path/to/security-lab

# Deploy et
netlify deploy

# Production'a deploy et
netlify deploy --prod
```

---

## 🔗 ADIM 3: Site URL'inizi Alın

Deploy tamamlandıktan sonra:

### 3.1 Site URL'ini Bul

1. Netlify dashboard'unuzda **site adına tıklayın**
2. Üstte **"Site overview"** sekmesinde URL'i göreceksiniz
3. Format: `https://RANDOM-NAME-12345.netlify.app`

### 3.2 Site Adını Değiştir (Opsiyonel)

1. **"Site settings"** tıkla
2. **"Change site name"** tıkla
3. İstediğiniz adı yazın: `my-security-lab`
4. **"Save"** tıkla
5. Yeni URL: `https://my-security-lab.netlify.app`

---

## 🎨 ADIM 4: Özel Domain Bağlama (Opsiyonel)

### 4.1 Domain Satın Al (Gerekirse)

- Namecheap: https://namecheap.com
- GoDaddy: https://godaddy.com
- Google Domains: https://domains.google

### 4.2 Domain'i Netlify'a Bağla

1. Netlify dashboard → **"Domain settings"**
2. **"Add custom domain"**
3. Domain adınızı girin: `security-lab.com`
4. **DNS ayarlarını** domain sağlayıcınızda yapın:

```
Type: A Record
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR-SITE.netlify.app
```

5. DNS propagation için 24-48 saat bekleyin

---

## 🧪 ADIM 5: Site Testi

### 5.1 Temel Kontroller

Sitenizi test edin:

1. **Ana Sayfa:** `https://YOUR-SITE.netlify.app/`
   - ✅ Tüm kategoriler görünüyor mu?
   - ✅ Linkler çalışıyor mu?

2. **Ödeme Sayfası:** `https://YOUR-SITE.netlify.app/payment.html`
   - ✅ Form açılıyor mu?
   - ✅ Dil değiştirici çalışıyor mu?
   - ✅ Test kartı doldur butonu çalışıyor mu?

3. **Dil Değiştirme:**
   - ✅ Türkçe → İngilizce çalışıyor mu?
   - ✅ Arapça'da RTL (sağdan sola) aktif mi?

### 5.2 Zafiyet Testleri

1. **SQL Injection:** `/search.html`
   ```
   Test: ' OR '1'='1
   ```

2. **XSS:** `/search.html`
   ```
   Test: <script>alert('XSS')</script>
   ```

3. **IDOR:** `/profile.html?user=1`
   ```
   Test: user=2, user=3
   ```

4. **CVV Brute Force:** `/payment.html`
   ```
   "Brute Force Başlat" butonuna tıkla
   ```

### 5.3 Browser Console Kontrolleri

**F12** veya **Ctrl+Shift+I** ile geliştirici konsolunu aç:

```javascript
// Vulnerable functions'ı kontrol et
console.log(window.vulnerableFunctions);
console.log(window.authDebug);
console.log(window.paymentFunctions);

// Test credentials
authDebug.bypassAuth();

// Dil değiştir
changeLanguage('en');
changeLanguage('fr');
changeLanguage('ar');
```

---

## 🔧 ADIM 6: Güncelleme Yapma

### 6.1 Dosya Değişiklikleri

Lokal olarak dosyaları düzenleyin, sonra:

```bash
# Değişiklikleri stage'e al
git add .

# Commit yap
git commit -m "Updated payment page translations"

# GitHub'a push et
git push origin main
```

### 6.2 Otomatik Deploy

- **Netlify her push'ta otomatik deploy eder!**
- Deploy durumunu: https://app.netlify.com/sites/YOUR-SITE/deploys
- 2-3 dakika içinde yeni versiyon yayında!

---

## 🛠️ Troubleshooting

### Sorun 1: "Site does not exist"

**Çözüm:**
```bash
# Repository doğru mu kontrol et
git remote -v

# Yanlışsa düzelt
git remote set-url origin https://github.com/[USER]/security-lab.git
```

### Sorun 2: "Deploy failed"

**Çözüm:**
1. Netlify dashboard → "Deploys" → "Deploy log"
2. Hata mesajını oku
3. Genelde dosya yolu hatasıdır
4. `netlify.toml` dosyasını kontrol et

### Sorun 3: Sayfalar Yüklenmiyor

**Çözüm:**
1. Browser cache temizle: `Ctrl+Shift+Delete`
2. Incognito/Private modda dene
3. Console'da error var mı kontrol et (F12)

### Sorun 4: Dil Değişmiyor

**Çözüm:**
```javascript
// Console'da test et
localStorage.clear();
location.reload();

// Manuel olarak dil değiştir
changeLanguage('en');
```

### Sorun 5: JavaScript Çalışmıyor

**Çözüm:**
1. `/js/` klasörünün deploy edildiğini kontrol et
2. Network tab'da (F12) JS dosyaları yükleniyor mu?
3. Console'da syntax error var mı?

### Sorun 6: CORS Hataları

**Çözüm:**
`netlify.toml` dosyasını kontrol et:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
```

---

## 📊 ADIM 7: Analytics & Monitoring

### 7.1 Netlify Analytics Aktifleştir

1. Site dashboard → **"Analytics"** tab
2. **"Enable analytics"** ($9/month - opsiyonel)
3. Veya Google Analytics kullan (ücretsiz)

### 7.2 Google Analytics Ekleme

`index.html` ve diğer sayfalara `<head>` içine:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Test Senaryoları

### Ödeme Güvenliği Testleri

1. **PCI DSS Compliance:**
   ```bash
   # DevTools → Application → Local Storage
   # Kart bilgilerinin plain text olduğunu gör
   ```

2. **CVV Storage:**
   ```javascript
   // Console'da
   localStorage.getItem('savedCards')
   // CVV'nin saklandığını gör (ASLA yapılmamalı!)
   ```

3. **CVV Brute Force:**
   - `/payment.html` sayfasına git
   - "Brute Force Başlat" tıkla
   - Rate limiting olmadığını gözlemle

4. **Card Testing:**
   ```
   Farklı kart numaraları ile hızlı denemeler yap
   Bot detection olmadığını test et
   ```

### Çoklu Dil Testleri

1. **Türkçe → İngilizce:**
   ```javascript
   changeLanguage('en');
   // Tüm metinlerin çevrildiğini gör
   ```

2. **Arapça RTL:**
   ```javascript
   changeLanguage('ar');
   // Sayfanın sağdan sola döndüğünü gör
   ```

3. **LocalStorage Persistence:**
   ```javascript
   changeLanguage('fr');
   location.reload();
   // Dil seçiminin kalıcı olduğunu gör
   ```

---

## 📱 Mobil Test

### Responsive Test

1. **DevTools açarak:**
   - `Ctrl+Shift+M` (Toggle device toolbar)
   - Farklı cihazları dene:
     - iPhone 12
     - iPad
     - Galaxy S20

2. **Gerçek Cihazda:**
   - Netlify URL'i telefonunda aç
   - Tüm fonksiyonları test et

---

## 🔐 Güvenlik Notları

### Production'da Yapılması Gerekenler

**⚠️ Bu lab kasıtlı olarak güvensizdir! Gerçek projede:**

1. ❌ Kart bilgilerini localStorage'da SAKLAMAYIN
2. ❌ CVV'yi ASLA saklamayın
3. ✅ HTTPS kullanın (Netlify otomatik sağlar)
4. ✅ PCI DSS compliant payment gateway kullanın
5. ✅ 3D Secure implementasyonu yapın
6. ✅ Rate limiting ekleyin
7. ✅ Fraud detection sistemi kurun
8. ✅ Card data'yı tokenize edin

---

## 🎓 Öğrenme Kaynakları

### PCI DSS
- Official: https://www.pcisecuritystandards.org/
- PCI DSS v4.0: https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0.pdf

### Payment Security
- OWASP Payment Testing: https://owasp.org/www-project-web-security-testing-guide/
- Stripe Security: https://stripe.com/docs/security

### Penetration Testing
- Burp Suite: https://portswigger.net/burp
- OWASP ZAP: https://www.zaproxy.org/

---

## 📞 Destek & Yardım

### Netlify Support
- Docs: https://docs.netlify.com/
- Community: https://answers.netlify.com/
- Status: https://netlifystatus.com/

### GitHub Issues
Sorun yaşarsanız GitHub repository'nizde issue açabilirsiniz.

---

## ✅ Deployment Checklist

Deploy öncesi kontrol listesi:

- [ ] Git repository oluşturuldu
- [ ] Tüm dosyalar commit edildi
- [ ] GitHub'a push yapıldı
- [ ] Netlify'da site oluşturuldu
- [ ] Deploy başarılı oldu
- [ ] Site URL'i çalışıyor
- [ ] Ana sayfa açılıyor
- [ ] Payment sayfası çalışıyor
- [ ] Dil değişimi çalışıyor
- [ ] Tüm JS dosyaları yükleniyor
- [ ] Console'da critical error yok
- [ ] Mobilde responsive çalışıyor

---

## 🎉 Tebrikler!

Security testing lab'ınız artık online ve test edilmeye hazır!

**Site URL'iniz:** `https://YOUR-SITE.netlify.app`

### Sonraki Adımlar:

1. 🔍 OWASP Top 10 testlerine başla
2. 💳 PCI DSS zafiyet testleri yap
3. 🤖 Bot ve automation testleri
4. 🌐 API security testleri
5. 📱 Mobile security testleri

**İyi testler! 🚀**

---

## 📄 Ek Notlar

### Ücretsiz Netlify Limitleri

- **Bandwidth:** 100GB/ay
- **Build minutes:** 300 dakika/ay
- **Sites:** Sınırsız
- **Team members:** 1 (ücretsiz planda)

Bu lab için **tamamen yeterli**!

### Önemli URL'ler

- Netlify Dashboard: https://app.netlify.com
- Site Admin: `https://app.netlify.com/sites/YOUR-SITE`
- Deploy Logs: `https://app.netlify.com/sites/YOUR-SITE/deploys`
- Analytics: `https://app.netlify.com/sites/YOUR-SITE/analytics`

### Backup

Deployment sonrası yedek almayı unutmayın:

```bash
# GitHub zaten bir backup ama local backup da iyi:
cd /path/to/security-lab
zip -r security-lab-backup.zip .
```

---

**Son Güncelleme:** 16 Kasım 2024
**Versiyon:** 2.0 (Payment & Multi-language support added)
