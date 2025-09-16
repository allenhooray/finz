<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/base/popover'
import { PopoverPortal } from 'reka-ui'
import type { PopconfirmProps, PopconfirmEmits } from './type';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/base/button';
import { inject } from 'vue';

const props = defineProps<PopconfirmProps>()
const emits = defineEmits<PopconfirmEmits>()
const container = inject('popup-container', document.body)

const { t } = useI18n()
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <slot />
    </PopoverTrigger>
    <PopoverPortal :to="container">
      <PopoverContent>
        <div class="flex flex-col gap-2 mb-4">
          <div class="font-bold">{{ props.title }}</div>
          <div v-if="props.content">{{ props.content }}</div>
        </div>
        <div class="flex flex-row justify-end gap-2">
          <Button @click="() => emits('confirm')" variant="destructive">
            {{ t('confirm') }}
          </Button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </Popover>
</template>