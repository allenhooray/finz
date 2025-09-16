<script setup lang="ts">
import { GlobeIcon, MoonIcon, SunIcon, SunMoonIcon } from 'lucide-vue-next';
import { userSelectLocale } from '@/i18n';
import { Button, Space, Tooltip } from '@finz/ui';
import { useColorMode } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const { store: colorMode } = useColorMode()

const toggleColorMode = () => {
  if (colorMode.value === 'auto') {
    colorMode.value = 'dark'
  } else if (colorMode.value === 'dark') {
    colorMode.value = 'light'
  } else if (colorMode.value === 'light') {
    colorMode.value = 'auto'
  }
}

// 切换语言
const toggleLanguage = () => {
  userSelectLocale.value = userSelectLocale.value === 'en' ? 'zh' : 'en';
  locale.value = userSelectLocale.value;
}
</script>

<template>
  <Space>
    <Tooltip :content="t('sizeBar.toggleTheme')">
      <Button variant="ghost" size="icon" @click="toggleColorMode">
        <SunIcon v-show="colorMode === 'light'" class="h-5 w-5 text-muted-foreground" />
        <MoonIcon v-show="colorMode === 'dark'" class="h-5 w-5 text-muted-foreground" />
        <SunMoonIcon v-show="colorMode === 'auto'" class="h-5 w-5 text-muted-foreground" />
      </Button>
    </Tooltip>

    <!-- 语言切换按钮 -->
    <Tooltip :content="t('sizeBar.toggleLanguage')">
      <Button variant="ghost" size="icon" @click="toggleLanguage">
        <GlobeIcon class="h-5 w-5 text-muted-foreground" />
      </Button>
    </Tooltip>
  </Space>
</template>
