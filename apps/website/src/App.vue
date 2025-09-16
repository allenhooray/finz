<script setup lang="ts">
import { SidebarProvider, SidebarInset } from '@finz/ui'
import TheSidebar from '@/components/the-sidebar/index.vue'
</script>

<template>
  <SidebarProvider>
    <!-- 侧边栏 -->
    <TheSidebar />

    <!-- 主内容区域，留出侧边栏空间 -->
    <SidebarInset>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive>
            <component :key="$route.path" :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped></style>
