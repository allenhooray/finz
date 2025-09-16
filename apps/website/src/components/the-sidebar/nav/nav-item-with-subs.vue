<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from '@finz/ui'
import { ChevronRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import type { NavItem, SubNavItem } from './type'
import { useI18n } from 'vue-i18n'

interface Props {
  item: NavItem;
}

defineProps<Props>()

const router = useRouter()
const { t } = useI18n()

const handleClickItem = (item: NavItem) => {
  router.push(item.path)
}

const handleClickSubItem = (e: Event, subItem: SubNavItem) => {
  e.stopPropagation()
  router.push(subItem.path)
}
</script>

<template>
  <Collapsible as-child :default-open="item.isActive" class="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger as-child>
        <SidebarMenuButton :tooltip="t(item.title)" @click="handleClickItem(item)">
          <component :is="item.icon" v-if="item.icon" />
          <span>{{ t(item.title) }}</span>
          <ChevronRight
            class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
            <SidebarMenuSubButton as-child>
              <div @click="(e) => handleClickSubItem(e, subItem)">
                <component :is="subItem.icon" v-if="subItem.icon" />
                <span>{{ t(subItem.title) }}</span>
              </div>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</template>
