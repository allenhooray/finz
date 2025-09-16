<script setup lang="ts">
import { EllipsisIcon, InfoIcon, TableConfigIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { DEFAULT_SIDE_NAV_LIST } from '@/configs/system/sidebar';
import NavGroup from './nav/nav-group.vue';
import Toolbar from './toolbar.vue';
import { Button, Space, HoverCard, HoverCardTrigger, HoverCardContent, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger, useSidebar, type SidebarProps } from '@finz/ui';

const { t } = useI18n();

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})
const { open } = useSidebar()
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <Space justify="between">
        <div v-show="open" class="font-bold text-lg">{{ t('appName') }}</div>
        <SidebarTrigger />
      </Space>
    </SidebarHeader>

    <!-- 侧边栏菜单 -->
    <SidebarContent>
      <NavGroup groupName="sideBar.dashboard" :items="DEFAULT_SIDE_NAV_LIST" />
      <NavGroup groupName="sideBar.system" :items="[
        {
          title: 'sideBar.globalConfig',
          path: '/config',
          icon: TableConfigIcon
        },
        {
          title: 'sideBar.about',
          path: '/about',
          icon: InfoIcon
        },
      ]" />
    </SidebarContent>

    <!-- 侧边栏底部 -->
    <SidebarFooter>
      <Toolbar v-show="open" />
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button v-show="!open" variant="ghost" size="icon">
            <EllipsisIcon class="w-4 h-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <Toolbar />
        </HoverCardContent>
      </HoverCard>

    </SidebarFooter>
  </Sidebar>
</template>
