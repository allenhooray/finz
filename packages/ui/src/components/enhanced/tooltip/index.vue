<script setup lang="ts">
import type { TooltipProps } from './type'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/base/tooltip'
import { TooltipPortal } from "reka-ui";
import { inject } from 'vue';

const { content } = defineProps<TooltipProps>()
const container = inject('popup-container', document.body)
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipPortal :to="container">
        <TooltipContent>
          <template v-if="$slots.content">
            <slot name="content" />
          </template>
          <p v-else>{{ content }}</p>
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </TooltipProvider>
</template>