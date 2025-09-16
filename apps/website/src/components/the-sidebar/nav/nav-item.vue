<script setup lang="ts">
import { SidebarMenuButton, SidebarMenuItem } from '@finz/ui'
import { useRouter } from 'vue-router'
import type { NavItem } from './type'
import { useI18n } from 'vue-i18n'

interface Props {
  item: NavItem;
}

const { item } = defineProps<Props>()

const router = useRouter()
const { t } = useI18n()

const handleClick = () => {
  router.push(item.path)
}
</script>

<template>
  <SidebarMenuItem>
    <SidebarMenuButton :tooltip="t(item.title)" @click="handleClick">
      <component :is="item.icon" v-if="item.icon" />
      <span>{{ t(item.title) }}</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
</template>
