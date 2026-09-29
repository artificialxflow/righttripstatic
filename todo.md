# todo.md — فرانت‌اند «حقوق گردشگری» / حق‌گرد

**محدوده:** HTML + CSS + JS + Tailwind CDN — بدون بک‌اند  
**فونت:** محلی `assets/fonts/Vazirmatn-*.woff2`  
**RTL | ریسپانسیو | تم لایت + عناصر رنگی**

---

## جدول تطبیق: ۱۱ خدمت ↔ roadmap ↔ prototype

| # | خدمت | فاز سند | صفحه فرانت | پنل ادمین |
|---|------|---------|------------|-----------|
| 1 | بانک قوانین | ۳–۵ | `pages/laws.html` | `content.html` |
| 2 | دستیار AI | ۶–۸ | `pages/assistant.html` | `ai.html` |
| 3 | حقوق گردشگر | ۳–۵ | `pages/traveler.html` | — |
| 4 | حقوق فعالان | ۳–۵ | `pages/business.html` | — |
| 5 | قراردادساز | ۶–۸ | `pages/contracts.html` | `contracts.html` |
| 6 | ارزیابی ریسک | ۶–۸ | `pages/risk.html` | `risk.html` |
| 7 | شبکه متخصصان | ۳–۵ | `pages/experts.html` | `experts.html` |
| 8 | آکادمی | ۳–۵ | `pages/academy.html` | `academy.html` |
| 9 | گردشگری ورزشی | ۶–۸ | `pages/sports-law.html` | `sports.html` |
| 10 | حل اختلاف | ۹–۱۲ | `pages/dispute.html` | `dispute.html` |
| 11 | مطالعات و آراء | ۳–۱۲ | `pages/case-studies.html` | `cases.html` |

---

## فاز A — زیرساخت و هویت

- [x] حذف Google Fonts از HTML
- [x] `@font-face` در `assets/css/fonts.css` (Regular/Medium/Bold)
- [x] import در `custom.css` + `font-family: Vazirmatn`
- [x] برند: حقوق گردشگری + حق‌گرد
- [x] ribbon پایلوت خراسان رضوی
- [x] `about-project.html`
- [x] به‌روز README

---

## فاز B — لندینگ (`index.html`)

- [x] Design tokens: gradient-hero, card-hover, reveal, section-title
- [x] Hero + trust badges
- [x] grid **۱۱ خدمت** با لینک به `pages/`
- [x] سکشن **خراسان رضوی** (۶ حوزه)
- [x] سکشن AI + لینک دستیار
- [x] منوی به‌روز + `about-project.html`
- [x] Intersection Observer برای `.reveal` در `common.js`
- [ ] mega-menu خدمات (اختیاری — بعداً)

---

## فاز C — صفحات عمومی (`pages/`)

- [x] `laws.html`
- [x] `assistant.html`
- [x] `traveler.html`
- [x] `business.html`
- [x] `contracts.html`
- [x] `risk.html`
- [x] `experts.html`
- [x] `academy.html`
- [x] `sports-law.html`
- [x] `dispute.html`
- [x] `case-studies.html`
- [x] `legal-terms.html` + `privacy.html`
- [x] `assets/js/layout.js` (header/footer مشترک)

---

## فاز D — پنل ادمین

- [x] `dashboard.html` — nav گسترده + Chart.js
- [x] `risk.html`, `academy.html`, `sports.html`, `dispute.html`, `cases.html`
- [x] صفحات قبلی: questions, contracts, content, experts, ai, users, reports, settings
- [x] یکسان‌سازی sidebar از طریق `syncAdminNav()` در `admin.js`
- [ ] empty state / skeleton در یک جدول نمونه

---

## فاز E — یکپارچگی

- [x] `register.html`
- [x] لینک ثبت‌نام در `login.html`
- [x] فوتر لندینگ: قانونی + درباره طرح
- [x] یکسان‌سازی sidebar تمام admin با `admin.js`

---

## فاز F — QA و ارائه

- [x] مسیر: index → pages → login → admin
- [ ] تست دستی 320px–1280px (ثبت نتیجه)
- [ ] بازبینی نهایی املاء فارسی
- [ ] چک‌لیست دمو ۷ دقیقه‌ای برای مرکز نوآوری

---

## خارج از scope

API، auth واقعی، AI زنده، داده قانونی عملیاتی

---

*آخرین به‌روزرسانی: پیاده‌سازی فاز A–C و بخش عمده D/E*
