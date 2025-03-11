import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import en from './locales/en.json';
import ko from './locales/ko.json';
import jp from './locales/jp.json';
import cn from './locales/cn.json';

const i18n = createI18n({
    legacy: false,
    locale: 'ko',
    fallbackLocale: 'en',
    messages: { en, ko, jp, cn }
  });

const app = createApp(App)

app.use(i18n)
app.use(createPinia())

app.mount('#app')
