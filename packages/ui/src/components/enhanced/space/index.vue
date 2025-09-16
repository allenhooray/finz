<script setup lang="ts">
import { cva } from 'class-variance-authority';
import type { SpaceProps } from './type'

const {
  align = 'start',
  justify = 'start',
  gap = 8,
  vertical = false,
  wrap = false,
} = defineProps<SpaceProps>()

const buttonVariants = cva('flex', {
  variants: {
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    wrap: {
      true: 'flex-wrap',
    },
  },
  defaultVariants: {
    align: 'start',
    direction: 'horizontal',
    wrap: false,
  },
})
</script>

<template>
  <div :class="buttonVariants({
    align,
    justify,
    direction: vertical ? 'vertical' : 'horizontal',
    wrap,
  })" :style="{
    'gap': `${gap}px`,
  }">
    <slot></slot>
  </div>
</template>
