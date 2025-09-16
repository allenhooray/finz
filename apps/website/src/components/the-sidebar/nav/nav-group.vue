<script setup lang="ts">
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "@finz/ui"
import type { NavItem as NavItemType } from "./type"

import NavItem from "./nav-item.vue"
import navItemWithSubs from "./nav-item-with-subs.vue"
import { useI18n } from "vue-i18n"

interface Props {
  items: NavItemType[]
  groupName?: string
}

const { t } = useI18n()

defineProps<Props>()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel v-if="Boolean(groupName)">{{ t(groupName!) }}</SidebarGroupLabel>
    <SidebarMenu>
      <component :is="item.items?.length ? navItemWithSubs : NavItem" v-for="item in items" :key="item.title"
        :item="item" />
    </SidebarMenu>
  </SidebarGroup>
</template>
