# حقوق گردشگری | حق‌گرد — RightTrip Law

پلتفرم هوشمند حقوق گردشگری (فرانت استاتیک).

## ساختار

```
index.html              لندینگ (۱۱ خدمت، خراسان رضوی)
about-project.html      معرفی طرح برای مرکز نوآوری
login.html / register.html
pages/                  ۱۱ خدمت + legal + privacy
assets/css/fonts.css    Vazirmatn محلی (assets/fonts)
assets/js/layout.js     هدر/فوتر صفحات داخلی
admin/                  پنل مدیریت
todo.md                 چک‌لیست فازها
```

## اجرا

```bash
npx serve .
```

باز کردن `http://localhost:3000/index.html`

## فونت

فقط از `assets/fonts/Vazirmatn-*.woff2` — بدون CDN گوگل.

## محدودیت

بدون بک‌اند؛ داده و عملیات نمایشی.
