# 🎯 NETLIFY DEPLOYMENT - BAŞTAN SONA DETAYLI REHBER

## 📌 Bu rehber kimin için?
- Hiç deployment yapmadıysanız ✅
- GitHub'ı ilk kez kullanacaksanız ✅
- Netlify nedir bilmiyorsanız ✅
- Adım adım takip etmek istiyorsanız ✅

---

## 🚀 BAŞLAMADAN ÖNCE

### Nelere ihtiyacınız var?

1. **Bilgisayarınızda:**
   - Windows, Mac veya Linux (hepsi çalışır)
   - İnternet bağlantısı
   - Proje dosyaları (security-lab klasörü)

2. **Hesaplar (ÜCRETSİZ):**
   - GitHub hesabı
   - Netlify hesabı

---

## 📝 ADIM 1: HAZIRLIK (5 dakika)

### 1.1 - Proje Dosyalarını İndirin

Eğer Claude'dan indirdiyseniz:
```
✅ security-lab/ klasörü masaüstünüzde olmalı
```

İçinde şunlar olmalı:
```
security-lab/
├── index.html
├── payment.html
├── login.html
├── css/
├── js/
└── ... diğer dosyalar
```

**Kontrol:** 
- Klasörü açın
- `index.html` dosyasını çift tıklayın
- Browser'da açılmalı ✅

---

### 1.2 - Git Kurulumu

#### Windows için:

1. **Git indirin:**
   - https://git-scm.com/download/win
   - "Click here to download" tıklayın
   - İndirilen `.exe` dosyasını çalıştırın

2. **Kurulum:**
   - "Next" → "Next" → "Next" (varsayılan ayarlar yeterli)
   - "Install" tıklayın
   - "Finish" tıklayın

3. **Kontrol:**
   - **Windows tuşu + R** basın
   - `cmd` yazın, Enter
   - Açılan pencerede yazın:
   ```bash
   git --version
   ```
   - Versiyon görürseniz kurulum başarılı! ✅
   - Örnek: `git version 2.43.0`

#### Mac için:

1. **Terminal açın:**
   - **Cmd + Space** basın
   - "Terminal" yazın, Enter

2. **Git kontrol:**
   ```bash
   git --version
   ```
   - Eğer kurulu değilse Mac otomatik kuracak

#### Linux için:

```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

---

## 🔑 ADIM 2: GITHUB HESABI OLUŞTURMA (3 dakika)

### 2.1 - GitHub'a Kayıt Olun

1. **GitHub'a gidin:**
   - https://github.com

2. **Sign up tıklayın** (sağ üst köşe)

3. **Bilgilerinizi girin:**
   ```
   Email: sizin@email.com
   Password: güçlü bir şifre
   Username: kullaniciadi (örn: securitylab123)
   ```

4. **Email doğrulama:**
   - Gelen mailde doğrulama linkine tıklayın

5. **Giriş yapın:**
   - https://github.com/login

✅ GitHub hesabınız hazır!

---

### 2.2 - GitHub'da Repository Oluşturma

**Repository = Proje klasörünüzün GitHub'daki kopyası**

1. **GitHub anasayfada:**
   - Sağ üstte **yeşil "New"** butonu var
   - Veya direkt: https://github.com/new

2. **Repository bilgileri:**
   ```
   Repository name: security-lab
   Description: Security Testing Laboratory
   
   ⚪ Public (herkes görebilir - ücretsiz)
   ⚫ Private (sadece siz - ücretli)
   
   ❌ Initialize this repository with:
       ❌ Add a README file (işaretsiz bırakın!)
       ❌ Add .gitignore (işaretsiz bırakın!)
       ❌ Choose a license (işaretsiz bırakın!)
   ```

3. **"Create repository" tıklayın** (yeşil buton)

4. **Açılan sayfada:**
   - Kodlar göreceksiniz
   - Henüz bir şey yapmayın!
   - Bu sayfayı AÇIK BIRAKIN 🔖

✅ GitHub repository'niz oluşturuldu!

---

## 💻 ADIM 3: DOSYALARI GITHUB'A YÜKLEME (10 dakika)

### 3.1 - Terminal/Command Prompt Açın

#### Windows:
```
1. Windows tuşu + R
2. "cmd" yazın
3. Enter
```

#### Mac:
```
1. Cmd + Space
2. "Terminal" yazın
3. Enter
```

#### Linux:
```
Ctrl + Alt + T
```

---

### 3.2 - Proje Klasörüne Gidin

Terminal'de yazın (ÖRNEK - kendi yolunuzu yazın!):

**Windows:**
```bash
cd C:\Users\KullaniciAdi\Desktop\security-lab
```

**Mac/Linux:**
```bash
cd ~/Desktop/security-lab
```

**💡 İpucu:** 
- Klasörü terminal'e sürükleyip bırakabilirsiniz!
- Otomatik yol yazılacak

**Kontrol:**
```bash
dir     # Windows için
ls      # Mac/Linux için
```
- Dosyaları görmeli siniz (index.html, css/, js/ vs.)

---

### 3.3 - Git'i Başlatın

Terminal'de SU KOMUTLARI SIRAYLA yazın:

**Komut 1:** Git'i başlat
```bash
git init
```

Çıktı:
```
Initialized empty Git repository in ...
```
✅ Git başlatıldı!

---

**Komut 2:** Kullanıcı bilgilerini ayarla (İLK KEZ)
```bash
git config --global user.name "İsminiz"
git config --global user.email "email@adresiniz.com"
```

Örnek:
```bash
git config --global user.name "Ahmet Yilmaz"
git config --global user.email "ahmet@example.com"
```

---

**Komut 3:** Tüm dosyaları ekle
```bash
git add .
```

**. (nokta) = tüm dosyalar demek**

Çıktı: (Boş olabilir - normal!)

---

**Komut 4:** Commit yapın (kaydet)
```bash
git commit -m "Initial commit: Security testing lab"
```

Çıktı:
```
[main (root-commit) abc1234] Initial commit: Security testing lab
 25 files changed, 6000 insertions(+)
 create mode 100644 index.html
 create mode 100644 payment.html
 ...
```

✅ Dosyalar Git'e kaydedildi!

---

**Komut 5:** Main branch oluştur
```bash
git branch -M main
```

(Çıktı olmayabilir - normal!)

---

**Komut 6:** GitHub'ı bağla

⚠️ **ÖNEMLİ:** Kendi GitHub kullanıcı adınızı yazın!

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/security-lab.git
```

**Örnek:**
```bash
git remote add origin https://github.com/ahmetyilmaz/security-lab.git
```

**Nereden bulacaksınız?**
- Daha önce açık bıraktığınız GitHub sayfasında
- "Quick setup" altında URL var
- Kopyala-yapıştır yapın

---

**Komut 7:** GitHub'a yükle (PUSH)
```bash
git push -u origin main
```

**İLK KEZ ise:**
- GitHub kullanıcı adı soracak → Yazın
- Şifre soracak → Yazın
  - **NOT:** Şifre yazarken ekranda görünmez (güvenlik) - yazın ve Enter

**2024'ten sonra GitHub şifre kabul etmiyor!**
Bunun yerine:

1. **GitHub → Settings**
2. **Developer settings** (en alt)
3. **Personal access tokens → Tokens (classic)**
4. **Generate new token**
5. İzinler:
   - ✅ repo
6. **Generate token** tıkla
7. Token'ı kopyala (bir daha görmeyeceksiniz!)
8. Şifre yerine bu token'ı yapıştırın

Çıktı:
```
Enumerating objects: 30, done.
Counting objects: 100% (30/30), done.
...
To https://github.com/username/security-lab.git
 * [new branch]      main -> main
```

✅ **Dosyalar GitHub'a yüklendi!**

---

### 3.4 - Kontrol

1. **GitHub sayfasını yenileyin** (F5)
2. Dosyalarınızı görmeli siniz:
   ```
   ✅ index.html
   ✅ payment.html
   ✅ css/
   ✅ js/
   ✅ ... diğer dosyalar
   ```

**Hepsi oradaysa → Başarılı!** 🎉

---

## 🌐 ADIM 4: NETLIFY HESABI OLUŞTURMA (2 dakika)

### 4.1 - Netlify'a Kayıt

1. **Netlify'a gidin:**
   - https://app.netlify.com/signup

2. **"Sign up with GitHub" tıklayın** (EN KOLAY!)
   - GitHub'la giriş yapın
   - Netlify'a izin verin

**Veya email ile:**
```
Email: sizin@email.com
Password: güçlü şifre
```

3. **Email doğrulama:**
   - Gelen maildeki linke tıklayın

✅ Netlify hesabınız hazır!

---

## 🚀 ADIM 5: NETLIFY'DA DEPLOY (5 dakika)

### 5.1 - Yeni Site Oluştur

1. **Netlify Dashboard:**
   - https://app.netlify.com

2. **"Add new site" butonuna tıklayın**
   - Yeşil buton, ortada

3. **"Import an existing project" seçin**

---

### 5.2 - GitHub'ı Bağla

1. **"Deploy with GitHub" tıklayın**

2. **İLK KEZ:** 
   - "Authorize Netlify" sayfası açılır
   - **"Authorize netlify"** tıklayın (yeşil buton)
   - GitHub şifrenizi girebilir

3. **Repository seçin:**
   - Listenizde **"security-lab"** görünmeli
   - Görmüyorsanız:
     - "Configure the Netlify app on GitHub" tıklayın
     - "All repositories" seçin
     - "Save" tıklayın
     - Geri dönün

4. **"security-lab"** repository'sine tıklayın

---

### 5.3 - Build Ayarları

Açılan sayfada:

```
Owner: [GitHub kullanıcı adınız]
Branch to deploy: main ✅

Build settings:
  Base directory: [BOŞ BIRAKIN]
  Build command: [BOŞ BIRAKIN]
  Publish directory: . (nokta yazın)
  
Functions directory: [BOŞ BIRAKIN]
```

**Sadece "Publish directory"'ye nokta (.) yazın!**

---

### 5.4 - Deploy Başlat

1. **"Deploy [site-name]" butonuna tıklayın**
   - En altta, büyük buton

2. **Deploy başladı!**
   - "Site deploy in progress" göreceksiniz
   - Süre: 1-3 dakika

3. **İlerlemeyi izleyin:**
   - Sayfada dönme animasyonu var
   - "Deploying" yazıyor

4. **Deploy tamamlandı!**
   - **Yeşil "Published"** yazısı göründü mü?
   - **HAZIR!** 🎉

---

### 5.5 - Site URL'inizi Alın

1. **Sayfanın üstünde URL var:**
   ```
   https://random-name-12345.netlify.app
   ```

2. **Bu URL'e tıklayın**
   - Siteniz açılmalı!
   - Ana sayfanızı görmeli siniz!

✅ **SİTENİZ ONLINE!** 🚀

---

## 🎨 ADIM 6: SITE ADINI DEĞİŞTİRİN (Opsiyonel, 2 dakika)

Random isim hoşunuza gitmediyse:

1. **Netlify Dashboard → Site Settings**

2. **"Change site name" butonuna tıklayın**
   - "General" sekmesinde, "Site details" altında

3. **Yeni isim yazın:**
   ```
   my-security-lab
   ```
   - Sadece harf, rakam, tire (-) kullanabilirsiniz
   - Boşluk yok!

4. **"Save" tıklayın**

5. **Yeni URL:**
   ```
   https://my-security-lab.netlify.app
   ```

✅ Site adınız değişti!

---

## ✅ ADIM 7: SİTENİZİ TEST EDİN (5 dakika)

### 7.1 - Temel Kontroller

**Ana Sayfa:**
```
https://YOUR-SITE.netlify.app/
```

Kontrol listesi:
- [ ] Sayfa açıldı mı?
- [ ] Güzel görünüyor mu?
- [ ] Linkler çalışıyor mu?
- [ ] Menü çalışıyor mu?

---

**Ödeme Sayfası:**
```
https://YOUR-SITE.netlify.app/payment.html
```

Kontrol:
- [ ] Form görünüyor mu?
- [ ] Dil seçici var mı (üst menüde)?
- [ ] "Test Kartı Doldur" butonu çalışıyor mu?

---

**Dil Değiştirme:**

1. Üst menüde dil seçiciyi bulun
2. **English** seçin
   - Sayfa İngilizce'ye çevrildi mi? ✅
3. **Français** seçin
   - Fransızca oldu mu? ✅
4. **العربية** seçin
   - Arapça + sağdan sola mı? ✅

---

### 7.2 - Zafiyet Testleri

**SQL Injection Test:**
```
https://YOUR-SITE.netlify.app/search.html
```

1. Arama kutusuna yazın:
   ```
   ' OR '1'='1
   ```
2. Enter
3. Tüm kullanıcıları görmeli siniz! ✅

---

**XSS Test:**
```
https://YOUR-SITE.netlify.app/search.html
```

1. Arama kutusuna:
   ```
   <script>alert('XSS')</script>
   ```
2. Enter
3. XSS payload'u sayfada görünmeli! ✅

---

**IDOR Test:**
```
https://YOUR-SITE.netlify.app/profile.html?user=1
```

URL'yi değiştir:
```
?user=2
?user=3
```

Farklı kullanıcı profilleri görüyorsanız → IDOR çalışıyor! ✅

---

**CVV Brute Force:**
```
https://YOUR-SITE.netlify.app/payment.html
```

1. Sayfayı aşağı kaydır
2. **"Brute Force Başlat"** butonu
3. Tıkla
4. CVV'lerin denendiğini gör! ✅

---

### 7.3 - Console Kontrolleri

**F12** veya **Ctrl+Shift+I** basın (Developer Tools)

**Console sekmesinde:**

```javascript
// Vulnerable functions'ları gör
console.log(window.vulnerableFunctions);

// Auth debug
console.log(window.authDebug);

// Payment functions
console.log(window.paymentFunctions);
```

Bunları görüyorsanız → JavaScript çalışıyor! ✅

---

**LocalStorage kontrol:**

1. **Application** sekmesi (F12'de)
2. **Storage → Local Storage**
3. Site URL'inize tıklayın
4. Verileri görün:
   - language
   - sessionToken
   - vs.

---

## 🔄 ADIM 8: GÜNCELLEME YAPMA (İleride)

Dosyalarda değişiklik yaptıysanız:

### 8.1 - Değişiklikleri GitHub'a Yükle

Terminal'de proje klasöründe:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Updated payment page"

# GitHub'a gönder
git push
```

### 8.2 - Netlify Otomatik Deploy Eder!

- **Hiçbir şey yapmanıza gerek yok!**
- GitHub'a her push'ta Netlify otomatik deploy eder
- 2-3 dakika içinde yeni versiyon yayında!

**İzlemek için:**
```
Netlify Dashboard → Deploys sekmesi
```

---

## 🎯 HIZ REFERANS - ÖZET KOMUTLAR

**İlk kurulum (bir kez):**
```bash
cd proje-klasörü
git init
git config --global user.name "İsminiz"
git config --global user.email "email@adresiniz.com"
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USER/repo.git
git push -u origin main
```

**Güncelleme (her değişiklikte):**
```bash
git add .
git commit -m "Değişiklik açıklaması"
git push
```

---

## 🆘 SORUN GİDERME

### Sorun 1: "git: command not found"

**Çözüm:**
- Git kurulu değil
- ADIM 1.2'ye geri dönün
- Git'i kurun

---

### Sorun 2: "Permission denied (publickey)"

**Çözüm:**
- HTTPS kullanın (SSH değil)
- URL şu formatta olmalı:
  ```
  https://github.com/USER/repo.git
  ```
- Değilse:
  ```bash
  git remote set-url origin https://github.com/USER/repo.git
  ```

---

### Sorun 3: "Repository not found"

**Çözüm:**
1. GitHub'da repository adını kontrol edin
2. Kullanıcı adınızı kontrol edin
3. URL'i düzeltin:
   ```bash
   git remote -v  # Mevcut URL'i görün
   git remote set-url origin DOĞRU_URL
   ```

---

### Sorun 4: Şifre/Token Hatası

**Çözüm:**
- GitHub artık şifre kabul etmiyor
- **Personal Access Token** kullanın:
  1. GitHub → Settings
  2. Developer settings
  3. Personal access tokens
  4. Generate new token (classic)
  5. repo seçin
  6. Token'ı kopyala
  7. Şifre yerine yapıştır

---

### Sorun 5: "Deploy failed" (Netlify'da)

**Çözüm:**
1. Netlify Dashboard → Deploys
2. Başarısız deploy'a tıkla
3. "Deploy log" oku
4. Genelde dosya yolu problemi
5. `netlify.toml` kontrol et:
   ```toml
   [build]
     publish = "."
   ```

---

### Sorun 6: Sayfa açılmıyor (404)

**Çözüm:**
1. URL doğru mu kontrol edin
2. `index.html` dosyası ana klasörde mi?
3. Cache temizle:
   - Ctrl+Shift+Delete
   - "Cached images and files" seç
   - Clear
4. Incognito modda dene

---

### Sorun 7: JavaScript çalışmıyor

**Çözüm:**
1. F12 → Console
2. Error var mı bak
3. Network sekmesinde JS dosyaları yükleniyor mu?
4. Dosya yolları doğru mu:
   ```html
   <script src="js/i18n.js"></script>
   <script src="js/payment.js"></script>
   ```

---

### Sorun 8: Dil değişmiyor

**Çözüm:**
```javascript
// Console'da (F12)
localStorage.clear();
location.reload();
changeLanguage('en');
```

---

## 📞 YARDIM KAYNAKLARI

### Video Tutoriallar:
- **Git/GitHub:** YouTube'da "Git tutorial türkçe" aratın
- **Netlify:** "Netlify deployment türkçe"

### Dökümanlar:
- **Git:** https://git-scm.com/doc
- **GitHub:** https://docs.github.com
- **Netlify:** https://docs.netlify.com

### Topluluk:
- **Stack Overflow:** (İngilizce sorular)
- **GitHub Issues:** Repository'nizde issue açın

---

## ✅ BAŞARI KONTROLÜ

Hepsini yaptınız mı?

- [ ] Git kuruldu
- [ ] GitHub hesabı oluşturuldu
- [ ] Repository oluşturuldu
- [ ] Dosyalar GitHub'a yüklendi
- [ ] Netlify hesabı oluşturuldu
- [ ] Site deploy edildi
- [ ] Site online ve çalışıyor
- [ ] Ödeme sayfası açılıyor
- [ ] Dil değiştirici çalışıyor
- [ ] Zafiyetler test edildi

**HEPSI ✅ İSE TEBRİKLER!** 🎉🎉🎉

---

## 🎯 SONRAKİ ADIMLAR

1. **Test edin:**
   - Her sayfayı tek tek açın
   - Zafiyetleri test edin
   - Not alın

2. **Öğrenin:**
   - OWASP Top 10
   - PCI DSS
   - API Security

3. **Pratik yapın:**
   - Burp Suite kullanın
   - OWASP ZAP deneyin
   - Güvenlik araçlarını öğrenin

4. **Paylaşın:**
   - Arkadaşlarınızla
   - CV'nize ekleyin
   - Portfolio'nuzda gösterin

---

## 💡 PRO İPUÇLARI

1. **Her gün commit atın**
   - GitHub profilinizde yeşil kareler birikir
   - İş başvurularında gösterir

2. **README.md güncelleyin**
   - Proje açıklaması
   - Nasıl kullanılır
   - Ekran görüntüleri

3. **Sertifika alın**
   - Burp Suite Certified Practitioner
   - OWASP sertifikaları
   - Web security kurları

4. **Blog yazın**
   - Keşiflerinizi paylaşın
   - Medium'da yayınlayın
   - İtibar kazanın

---

**YAZAR:** Security Lab Team
**TARİH:** 16 Kasım 2024
**VERSİYON:** 3.0 (Beginner-Friendly)

**İYİ TESTLER!** 🚀🔐💳

Bu rehber size yardımcı oldu mu? ⭐
