# تطبيقي - APK عبر GitHub

## كيف تبني APK؟

1. ارفع كل الملفات هنا على GitHub في فرع main
2. غيّر اسم التطبيق في capacitor.config.ts:
   - appName: اسم التطبيق الذي يظهر في الجوال
   - appId: مثل com.ismak.app - لازم يكون فريد وبالإنجليزي بدون مسافات
3. اذهب إلى Actions > Build APK > Run workflow
4. انتظر حتى يصبح أخضر، ثم حمّل APK من Artifacts

## ملفات المشروع
- www/index.html = تطبيقك الأصلي كاملاً
- capacitor.config.ts = إعدادات التطبيق
- .github/workflows/build-apk.yml = البناء التلقائي
