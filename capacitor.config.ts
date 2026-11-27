import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.myapp.app',
  appName: 'تطبيقي',
  webDir: 'www',
  server: { androidScheme: 'https' },
  android: { allowMixedContent: true }
};
export default config;
