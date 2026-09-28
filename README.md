# حق‌گرد | RightTrip Law

پلتفرم هوشمند حقوق گردشگری — **نسخه استاتیک** (HTML + Tailwind CDN + JavaScript).

## ساختار فایل‌ها

```
index.html          — لندینگ
login.html          — ورود نمایشی
assets/css/custom.css
assets/js/common.js — منو، FAQ، اسکرول
assets/js/admin.js  — پنل ادمین
admin/
  dashboard.html
  questions.html
  contracts.html
  content.html
  experts.html
  ai.html
  users.html
  reports.html
  settings.html
```

## اجرا

فایل `index.html` را در مرورگر باز کنید، یا با یک سرور محلی:

```bash
npx serve .
```

ورود از `login.html` به `admin/dashboard.html` (بدون احراز هویت واقعی).

## محدودیت‌ها

- بدون بک‌اند و API
- داده‌ها و عملیات نمایشی هستند
