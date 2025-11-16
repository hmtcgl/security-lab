# 🔐 Comprehensive Security Testing Lab

A deliberately vulnerable web application for testing:
- **OWASP Top 10 (2021)**
- **OWASP LLM Top 10**
- **OWASP Automated Threats Top 21**
- **WAF/Bot/DDoS/DoS Protection**
- **CDN Testing**
- **API Security**
- **Account Takeover Scenarios**

## 🎯 Features

### Authentication & Account Takeover
- Login/Register system with multiple vulnerabilities
- Session management issues
- Password reset flaws
- 2FA bypass scenarios

### OWASP Top 10 Coverage
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, XSS, Command)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Software & Data Integrity Failures
9. Security Logging Failures
10. Server-Side Request Forgery (SSRF)

### OWASP LLM Top 10
1. Prompt Injection
2. Insecure Output Handling
3. Training Data Poisoning
4. Model Denial of Service
5. Supply Chain Vulnerabilities
6. Sensitive Information Disclosure
7. Insecure Plugin Design
8. Excessive Agency
9. Overreliance
10. Model Theft

### OWASP Automated Threats Top 21
- Credential Stuffing (OAT-008)
- Credential Cracking (OAT-007)
- Card Cracking (OAT-001)
- Scraping (OAT-011)
- Scalping (OAT-005)
- And more...

### Page Structure
- **2 pages without JavaScript** (for CSP bypass testing)
- **Multiple pages with JavaScript** (XSS, DOM-based attacks)
- **REST API endpoints** (API security testing)
- **File upload** (malicious file testing)
- **Admin panel** (privilege escalation)
- **LLM Chat interface** (AI security testing)

## 📁 Structure

```
/
├── index.html              # Main landing page (with JS)
├── login.html             # Login page (with JS)
├── register.html          # Register page (with JS)
├── profile.html           # User profile (with JS)
├── admin.html             # Admin panel (with JS)
├── static-page1.html      # Static page WITHOUT JS
├── static-page2.html      # Static page WITHOUT JS
├── upload.html            # File upload (with JS)
├── ai-chat.html           # LLM testing interface (with JS)
├── api-test.html          # API testing page (with JS)
├── bot-challenge.html     # Automated threats testing (with JS)
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── auth.js
│   ├── api.js
│   └── llm.js
├── api/
│   └── endpoints.json     # Mock API responses
└── netlify.toml           # Netlify configuration
```

## 🚀 Deployment (Netlify)

1. Push to GitHub repository
2. Connect to Netlify
3. Deploy automatically
4. Start testing!

## ⚠️ Warning

**THIS IS A DELIBERATELY VULNERABLE APPLICATION**
- DO NOT deploy to production
- Use only in isolated testing environments
- For educational and security testing purposes only
