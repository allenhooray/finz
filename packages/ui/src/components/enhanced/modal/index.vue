<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/base/dialog'
import { DialogPortal } from 'reka-ui'
import type { ModalProps } from './type';
import { inject } from 'vue';

const { title, open } = defineProps<
  ModalProps
>();
const container = inject('popup-container', document.body)

const emits = defineEmits<{
  (e: 'onClose'): void;
}>();

const handleUpdateOpen = (newOpen: boolean) => {
  if (!newOpen) {
    emits('onClose');
  }
}
</script>

<template>
  <Dialog :open="open" modal @update:open="handleUpdateOpen">
    <DialogPortal :to="container">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{{ title }}</DialogTitle>
          <DialogDescription>
            <slot name="description" />
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <slot />
        </div>
        <DialogFooter v-if="$slots.footer">
          <slot name="footer" />
        </DialogFooter>
      </DialogContent>
    </DialogPortal>
  </Dialog>
</template>
