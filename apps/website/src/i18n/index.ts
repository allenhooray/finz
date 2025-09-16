import { useLocalStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'
import { LOCAL_STORAGE_KEYS } from '@/constants/storage'
import en from './langs/en.json'
import zh from './langs/zh.json'

export const userSelectLocale = useLocalStorage(LOCAL_STORAGE_KEYS.USER_SELECT_LOCALE, 'en')

export const i18n = createI18n({
  locale: userSelectLocale.value,
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en,
    zh
  }
})
